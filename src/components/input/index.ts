import styles from './input.module.scss';
import Block from '../../core/Block.ts';

interface InputProps {
  events?: {
    blur?: (event: InputEvent) => void;
  };
  flagRequired?: boolean;
  inputName: string;
  inputType: 'text' | 'password' | 'tel' | 'email' | 'file';
  maxlengthValue?: number;
  minlengthValue?: number;
  patternValue?: string;
  placeholderName: string;
}

export class Input extends Block {
  constructor(props: InputProps) {
    super('input', props);
  }

  init() {
    const element = this.element as HTMLInputElement;
    element.className = `${styles.input} ${styles.inputForm_text}`;

    element.type = this.props.inputType;
    element.name = this.props.inputName;
    if (this.props.flagRequired) {
      element.required = this.props.flagRequired;
    }
    if (this.props.minlengthValue) {
      element.minLength = this.props.minlengthValue;
    }
    if (this.props.maxlengthValue) {
      element.maxLength = this.props.maxlengthValue;
    }
    if (this.props.patternValue) {
      element.pattern = this.props.patternValue;
    }
    element.placeholder = this.props.placeholderName;
  }

  render() {
    return this.compile('');
  }
}
