import Block from '../../core/Block.ts';
import { template } from './chat.template.ts';
import styles from './chat.module.scss';
import { LastMessage } from '../lastMessage/index.ts';
import { UserLogin } from '../userLogin/index.ts';

interface ChatProps {
  flagToActive: boolean;
  lastMessage: string;
  size: 'small';
  userName: string;
  userPic: string;
}

export class Chat extends Block {
  constructor(props: ChatProps) {
    super('li', props);
  }

  init() {
    this.children.userLogin = new UserLogin({
      textValue: this.props.userName,
    });
    this.children.lastMessage = new LastMessage({
      textValue: this.props.lastMessage,
    });

    const element = this.element as HTMLElement;
    element.className = styles.chat;
    if (this.props.flagToActive) element.classList.add(styles.chat_active);
  }

  render() {
    return this.compile(template);
  }
}
