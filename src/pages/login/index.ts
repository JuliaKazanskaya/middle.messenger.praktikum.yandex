import Block from '../../core/Block.ts';
import { template } from './login.template.ts';
import { Button } from '../../components/button/index.ts';
import { Link } from '../../components/link/index.ts';
import { LoginForm } from '../../components/loginForm/index.ts';
import { InputBox } from '../../components/inputBox/index.ts';

export class Login extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.loginForm = new LoginForm({
      inputs: [
        new InputBox({
          id: 'login',
          inputName: 'login',
          placeholderName: 'Логин',
          inputType: 'text',
          flagRequired: true,
          patternValue: '^[A-Za-z0-9_\\-]+$',
          minlengthValue: 3,
          maxlengthValue: 20,
        }),
        new InputBox({
          id: 'password',
          inputName: 'password',
          placeholderName: 'Пароль',
          inputType: 'password',
          flagRequired: true,
          minlengthValue: 8,
          maxlengthValue: 40,
          patternValue: '^(?=.[A-Z])(?=.\\d).*$',
        }),
      ],
      submitButton: new Button({
        type: 'submit',
        textValue: 'Войти',
        flagToEnable: false,
        size: 'big',
      }),
      className: 'form__login',
    });
    this.children.linkForm = new Link({
      hrefTo: '/register',
      textLink: 'Зарегистрироваться',
    });
  }

  render() {
    return this.compile(template);
  }
}
