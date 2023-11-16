import './input.scss';
import Block from '../../core/block';
import template from './input.pug';

interface InputProps {
  classList: string;
  inputType: string;
  inputName: string;
  placeholderName: string;
  spanValue: string;
  flagRequired?: boolean;
  minlengthValue?: number;
  maxlengthValue?: number;
  patternValue?: string;
  events?: {
    blur: (e: InputEvent) => void;
  };
}

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
