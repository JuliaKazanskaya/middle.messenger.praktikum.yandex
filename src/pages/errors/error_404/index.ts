import './error_404.module.scss';
import Block from '../../../core/Block.ts';
import { template } from './error_404.template.ts';

export class ErrorPage404 extends Block {
  constructor() {
    super('main', {});
  }

  init() {}

  render() {
    return this.compile(template);
  }
}
