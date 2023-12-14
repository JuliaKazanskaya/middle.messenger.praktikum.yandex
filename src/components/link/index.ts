import styles from './link.module.scss';
import Block from '../../core/Block.ts';

export interface LinkProps {
  className?: string;
  hrefTo: string;
  textLink: string;
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super('a', props);
  }

  init() {
    const element = this.element as HTMLLinkElement;
    element.className = styles.main__returnLink;
    if (this.props.className) {
      element.classList.add(this.props.className);
    }
    element!.href = this.props.hrefTo;
  }

  render() {
    return this.compile('{{textLink}}');
  }
}
