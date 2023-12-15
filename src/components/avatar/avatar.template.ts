import styles from './avatar.module.scss';

export const template = `
    <img class=${styles.avatar__img} src={{userPic}} alt={{userName}}>
    <figcaption class=${styles.avatar__figcaption}>
        <img class='${styles.avatar__logo} ${styles.avatar__img_size_small}' src='/static/camera.svg' alt='Фото'>
    </figcaption>
`;
