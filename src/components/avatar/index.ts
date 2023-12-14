import Block from '../../core/Block.ts';
import { template } from './avatar.template.ts';
import styles from './avatar.module.scss';

interface AvatarProps {
  size: 'big' |'small';
  userName: string;
  userPic: string;
}

export class Avatar extends Block {
  constructor(props: AvatarProps) {
    super('figure', props);
  }

  init() {
    const element = this.element as HTMLElement;
    element.className = styles.avatar;
    if (this.props.size === 'big') {
      element.classList.add(styles.avatar__img_size_big);
    } else {
      element.classList.add(styles.avatar__img_size_small);
    }
  }

  render() {
    return this.compile(template);
  }
}
