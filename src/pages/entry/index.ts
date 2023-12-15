import Block from '../../core/Block.ts';
import { template } from './entry.template.ts';

export class EntryPage extends Block {
  constructor() {
    super('main', {});
  }

  init() { }

  render() {
    return this.compile(template);
  }
}
