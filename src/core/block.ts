import EventBus from './eventBus';
import { nanoid } from 'nanoid';

export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
  };

  id = nanoid(6);

  props: any;

  children: Record<string, Block>;

  _element: HTMLElement | null = null;

  eventBus: () => EventBus;

  constructor(propsAndChildren: any = {}) {
    const eventBus = new EventBus();
    const { props, children } = this.getChildren(propsAndChildren);

    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount() {}

  _componentDidUpdate(oldProps: Props, newProps: Props) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: Props, newProps: Props) {
    if (oldProps != newProps) {
      this.eventBus().emit(Block.EVENTS.FLOW_CDU);
      return true;
    } else return false;
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  setProps(nextProps: Props) {
    if (!nextProps) {
      return;
    }

    const oldProps = { ...this.props };
    Object.assign(this.props, nextProps);

    this._componentDidUpdate(oldProps, this.props);
  }

  set element(target) {
    this._element = target;
  }

  get element(): HTMLElement | null {
    return this._element;
  }


  _render(): void {
    const fragment = this.render();

    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newElement);
    }

    this._element = newElement;
    this._addEvents();
  }

  render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent(): HTMLElement | null {
    return this.element;
  }

  _makePropsProxy(props: any) {
    return new Proxy(props as unknown as object, {
      get: (target: Record<string, unknown>, prop: string) => {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target: Record<string, unknown>, prop: string, value: unknown) => {
        target[prop] = value;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);

        return true;
      },
      deleteProperty: () => {
        throw new Error('Нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  getChildren(propsAndChild) {
    const children = {};
    const props = {};

    Object.keys(propsAndChild).forEach(key => {
      if (propsAndChild[key] instanceof Block) {
        children[key] = propsAndChild[key];
      } else props[key] = propsAndChild[key];
    });

    return { children, props };
  }

  _removeEvents() {
    const { events } = this.props as any;

    if (!events || !this._element) {
      return;
    }

    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }

  _addEvents() {
    const { events } = this.props as any;

    if (!events) {
      return;
    }

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  // Этот метод компилирует шаблон с использованием данных и дочерних компонентов.
  compile(template: (locals: any) => string, locals: any) {
    const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        locals[key] = child.map((ch) => `<div data-id="id-${ch.id}"></div>`);

        return;
      }

      locals[key] = `<div data-id="id-${child.id}"></div>`;
    });

    fragment.innerHTML = template({ ...locals, children: this.children });

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((ch) => {
          const stub = fragment.content.querySelector(`[data-id="id-${ch.id}"]`);

          if (!stub) {
            return;
          }
          stub.replaceWith(ch.getContent() as HTMLElement);
        });

        return;
      }

      const stub = fragment.content.querySelector(`[data-id="id-${child.id}"]`);

      if (!stub) {
        return;
      }

      stub.replaceWith(child.getContent() as HTMLElement);
    });

    return fragment.content;
  }
}
