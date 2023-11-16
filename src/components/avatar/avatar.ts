import Block from '../../core/block';
import template from './avatar.pug';
import './avatar.scss';

interface AvatarProps {
  userPic: string;
  userName: string;
  events?: {
    click: () => void;
  };
}

export class Avatar extends Block {
  constructor(props: AvatarProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
