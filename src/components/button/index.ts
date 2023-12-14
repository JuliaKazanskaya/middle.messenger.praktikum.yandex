import styles from './button.module.scss';
import Block from '../../core/Block.ts';

interface ButtonProps {
  events?: {
    click: () => void;
  };
  flagToEnable: boolean;
  size: 'big' | 'small';
  textValue: string;
  type: 'button' | 'submit';
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  init() {
    const element = this.element as HTMLButtonElement;
    element.className = styles.button;
    if (this.props.size === 'big') {
      element.classList.add(styles.button_size_big);
    } else {
      element.classList.add(styles.button_size_small);
    }
    element.type = this.props.type;
    element.disabled = this.props.flagToEnable;
    element.title = this.props.textValue;
  }

  render() {
    return this.compile('{{textValue}}');
  }
}
