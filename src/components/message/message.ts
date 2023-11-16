import Block from '../../core/block';
import template from './message.pug';
import './message.scss';

interface MessageProps {
  classList: string;
  textValue: string;
  flagToYou: boolean;
  events?: {
    click: () => void;
  };
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
