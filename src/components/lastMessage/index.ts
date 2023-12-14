import styles from './lastMessage.module.scss';
import Block from '../../core/Block.ts';

interface LastMessageProps {
  textValue: string;
}

export class LastMessage extends Block {
  constructor(props: LastMessageProps) {
    super('p', props);
  }

  init() {
    const element = this.element as HTMLParagraphElement;
    element.className = styles.message;
    // element.innerText = this.props.textValue;
  }

  render() {
    return this.compile('{{textValue}}');
  }
}
