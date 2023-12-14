import './error_500.module.scss';
import Block from '../../../core/Block.ts';
import { template } from './error_500.template.ts';

export class ErrorPage500 extends Block {
  constructor() {
    super('main', {});
  }

  init() {}

  render() {
    return this.compile(template);
  }
}
