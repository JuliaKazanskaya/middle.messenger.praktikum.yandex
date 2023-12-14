import Block from '../../core/Block.ts';
import { Input } from '../input/index.ts';
import { Error } from '../error/index.ts';
import { template } from './inputBox.template.ts';
import styles from './inputBox.module.scss';
import { handleValidate } from '../../core/handleValidate.ts';

interface InputBoxProps {
  flagRequired?: boolean;
  id: string;
  inputName: string;
  inputType: 'text' | 'password' | 'tel' | 'email' | 'file';
  maxlengthValue?: number;
  minlengthValue?: number;
  patternValue?: string;
  placeholderName: string;
}

export class InputBox extends Block {
  constructor(props: InputBoxProps) {
    super('div', props);
  }

  init() {
    this.children.error = new Error({
      textValue: '',
      id: this.props.id,
    });
    this.children.input = new Input({
      ...this.props,
      events: {
        blur: (event) => {
          handleValidate(event);
        },
      },
    });

    const element = this.element as HTMLDivElement;
    element.className = styles.input;

    element.dataset.name = this.props.id;
  }

  render() {
    return this.compile(template);
  }
}
