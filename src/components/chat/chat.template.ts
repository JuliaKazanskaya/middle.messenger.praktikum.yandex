import styles from './chat.module.scss';

export const template = `
<img class=${styles.chat__preview_image} src={{userPic}} alt={{userName}}>
<div class=${styles.chat__preview}>
    {{{userLogin}}}
    {{{lastMessage}}}
</div>
`;
