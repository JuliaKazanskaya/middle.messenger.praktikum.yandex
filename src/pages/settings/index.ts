import Block from '../../core/Block.ts';
import { template } from './settings.template.ts';
import { Button } from '../../components/button/index.ts';
import { Link } from '../../components/link/index.ts';
import { LoginForm } from '../../components/loginForm/index.ts';
import { InputBox } from '../../components/inputBox/index.ts';
import { Avatar } from '../../components/avatar/index.ts';

export class Settings extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    this.children.settingsForm = new LoginForm({
      inputs: [
        new InputBox({
          id: 'email',
          inputName: 'email',
          placeholderName: 'Почта',
          inputType: 'email',
          flagRequired: true,
          patternValue: '^[0-9A-z._\\-%+]+@[A-z]+.[A-z]{2,5}$',
        }),
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
          id: 'display_name',
          inputName: 'display_name',
          placeholderName: 'Отображаемое имя',
          inputType: 'text',
          flagRequired: false,
        }),
        new InputBox({
          id: 'first_name',
          inputName: 'first_name',
          placeholderName: 'Имя',
          inputType: 'text',
          flagRequired: true,
          patternValue: '^[A-ZА-Я]{1}[a-zа-я\\-]+$',
        }),
        new InputBox({
          id: 'second_name',
          inputName: 'second_name',
          placeholderName: 'Фамилия',
          inputType: 'text',
          flagRequired: true,
          patternValue: '^[A-ZА-Я]{1}[a-zа-я\\-]+$',
        }),
        new InputBox({
          id: 'phone',
          inputName: 'phone',
          placeholderName: 'Телефон',
          inputType: 'tel',
          flagRequired: true,
          minlengthValue: 10,
          maxlengthValue: 15,
          patternValue: '^[+]?[0-9]+$',
        }),
        new InputBox({
          id: 'oldPassword',
          inputName: 'oldPassword',
          placeholderName: 'Старый пароль',
          inputType: 'password',
          flagRequired: true,
          minlengthValue: 8,
          maxlengthValue: 40,
          patternValue: '^(?=.[A-Z])(?=.\\d).*$',
        }),
        new InputBox({
          id: 'newPassword',
          inputName: 'newPassword',
          placeholderName: 'Новый пароль',
          inputType: 'password',
          flagRequired: true,
          minlengthValue: 8,
          maxlengthValue: 40,
          patternValue: '^(?=.[A-Z])(?=.\\d).*$',
        }),
      ],
      submitButton: new Button({
        type: 'submit',
        textValue: 'Регистрация',
        flagToEnable: false,
        size: 'big',
      }),
      className: 'form__settings',
    });
    this.children.avatar = new Avatar({
      userName: 'Julia',
      userPic: 'https://avatars.githubusercontent.com/u/52495622?s=96&v=4',
      size: 'big',
    });
    this.children.linkForm = new Link({
      hrefTo: '/chats',
      textLink: 'Вернуться к чатам',
    });
  }

  render() {
    return this.compile(template);
  }
}
