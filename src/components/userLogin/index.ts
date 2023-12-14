import styles from './userLogin.module.scss';
import Block from '../../core/Block.ts';

interface UserLoginProps {
  textValue: string;
}

export class UserLogin extends Block {
  constructor(props: UserLoginProps) {
    super('h6', props);
  }

  init() {
    const element = this.element as HTMLTitleElement;
    element.className = styles.login;
    // element.innerText = this.props.textValue;
  }

  render() {
    return this.compile('{{textValue}}');
  }
}
