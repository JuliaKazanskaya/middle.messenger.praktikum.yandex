import Block from '../../core/Block.ts';
// import {template} from './message.template.ts';
import styles from './message.module.scss';

interface MessageProps {
  flagYours: boolean;
  src: string;
  textValue: string;
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super('li', props);
  }

  init() {
    const element = this.element as HTMLParagraphElement;
    element.className = styles.message;
    if (this.props.flagYours) element.classList.add(styles.message__your);
  }

  render() {
    return this.compile('{{textValue}}');
  }
}
