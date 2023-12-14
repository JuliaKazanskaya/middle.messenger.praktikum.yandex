import Block from '../../core/Block.ts';
import { template } from './chats.template.ts';
import { Button } from '../../components/button/index.ts';
import { Chat } from '../../components/chat/index.ts';
import { Message } from '../../components/message/index.ts';
import styles from './chats.module.scss';

export class Chats extends Block {
  constructor() {
    super('main', {});
  }

  init() {
    const element = this.element as HTMLElement;
    element.className = styles.chats;

    this.children.chat = [
      new Chat({
        userName: 'Natali',
        userPic: 'https://shapka-youtube.ru/wp-content/uploads/2022/06/ava-kot-iz-shreka.jpg',
        size: 'small',
        lastMessage: 'Hello',
        flagToActive: true,
      }),
      new Chat({
        userName: 'Kate',
        userPic: 'https://shapka-youtube.ru/wp-content/uploads/2022/06/ava-kot-iz-shreka.jpg',
        size: 'small',
        lastMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit... ',
        flagToActive: false,
      }),
    ];

    this.children.message = [
      new Message({
        textValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d...',
        src: '#',
        flagYours: false,
      }),
      new Message({
        textValue: 'Lorem ipsum dolor sit amet',
        src: '#',
        flagYours: true,
      }),
    ];

    this.children.addButton = new Button({
      type: 'button',
      textValue: '+',
      flagToEnable: true,
      size: 'small',
    });
  }

  render() {
    return this.compile(template);
  }
}
