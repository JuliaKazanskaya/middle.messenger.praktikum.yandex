import Block from '../../core/Block.ts';
import { template } from './loginForm.template.ts';
import styles from './loginForm.module.scss';
import { handleValidate } from '../../core/handleValidate.ts';

interface LoginFormProps {
  className: string;
  inputs: Block[];
  submitButton: Block;
}

export class LoginForm extends Block {
  constructor(props: LoginFormProps) {
    super('form', {
      ...props,
      events: {
        submit: (event: SubmitEvent) => {
          event.preventDefault();
          handleValidate(event);
        },
      },
    });
  }

  init() {
    this.children.inputs = this.props.inputs;
    const element = this.element as HTMLFormElement;
    element.className = `${styles.form} ${styles.form__inputBox} ${this.props.className}`;
  }

  render() {
    return this.compile(template);
  }
}
