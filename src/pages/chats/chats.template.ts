import styles from './chats.module.scss';

export const template = `
    <ul class=${styles.chats__list}>
        <li>
            <input class=${styles.chats__search} type="text" name="search" placeholder="Поиск">
       </li>
       {{#each chat}}
            {{{this}}}
        {{/each}}

    </ul>

    <div class=${styles.chats__text}>
      <ul class="block-chats__messages">
        {{#each message}}
            {{{this}}}
        {{/each}}
      </ul>
      <div class=${styles.chats__divider}></div>
      <div class=${styles.chats__input}>
        <textarea class=${styles.chats__textarea} placeholder="Ваше сообщение" rows="3" name="message"></textarea>
        {{{addButton}}}
      </div>
    </div>
`;
