import Block from './Block.ts';

export const render = (query: string, block: Block, className: string): void => {
  const root = document.querySelector(query) as HTMLDivElement;
  root.className = className;
  if (root) {
    root.append(block.getContent()!);
  }

  block.dispatchComponentDidMount();
};
