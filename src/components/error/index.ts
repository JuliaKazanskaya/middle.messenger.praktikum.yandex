import styles from './error.module.scss';
import Block from '../../core/Block.ts';
// import {errorMessage} from './errorMessage';
// import {getErrorSpan} from './getErrorSpan';

interface ErrorProps {
  id: string;
  textValue: string;
}

export class Error extends Block {
  constructor(props: ErrorProps) {
    super('span', props);
  }

  init() {
    const element = this.element as HTMLSpanElement;
    element.className = styles.error;
    element.id = this.props.id;
  }

  render() {
    return this.compile('{{textValue}}');
  }
}
