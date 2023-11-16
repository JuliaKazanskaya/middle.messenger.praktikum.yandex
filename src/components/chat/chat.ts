import Block from '../../core/block';
import Avatar from '../avatar/avatar';
import template from './chat.pug';
import './chat.scss';

interface ChatProps {
  avatar: Avatar;
  userName: string;
  lastMessage: string;
  flagActive: boolean;
  events?: {
    click: () => void;
  };
}

export class Chat extends Block {
  constructor(props: ChatProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
