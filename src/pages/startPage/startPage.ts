import Block from '../../core/block';
import template from './startPage.pug';
import '../index/index.scss';

export default class StartPage extends Block {
  render() {
    return this.compile(template, {});
  }
}
