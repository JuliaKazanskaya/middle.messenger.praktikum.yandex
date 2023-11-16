import Block from '../../core/block';
import { Button } from '../button/button';
import { Input } from '../input/input';
import template from './form.pug';
import './form.scss';

interface FormProps {
  classList: string;
  inputType: string;
  inputName: string;
  placeholderName: string;
  spanValue: string;
  flagRequired?: boolean;
  minlengthValue?: number;
  maxlengthValue?: number;
  patternValue?: string;
  formButton: Button;
  classForm: string;
  textValue: string;
  nameValue: string;
  // inputList: Input[];
  events: {
    submit: (e: InputEvent) => void;
  };
}

export class Form extends Block {
  initChildren() {
    const {
      classList,
      inputType,
      inputName,
      placeholderName,
      spanValue,
      flagRequired,
      minlengthValue,
      maxlengthValue,
      patternValue,
    } = this.props;

    this.children.input = new Input({
      classList,
      inputType,
      inputName,
      placeholderName,
      spanValue,
      flagRequired,
      minlengthValue,
      maxlengthValue,
      patternValue,
      events: {
        blur: this.validateInput.bind(this),
      },
    });

  }

  constructor(props: FormProps) {
    super(props);
  }

  validateInput() {
    // TODO Подключить свою валидацию
    // const { value } = this.children.input._element as HTMLInputElement;
    //
    // const [isValid, message] = Validator.validate(this.props.validation, value);
    //
    // this.children.error.setProps({
    //     errorText: isValid ? '' : message,
    // });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
