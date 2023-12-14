import styles from './entry.module.scss';

export const template = `
    <h1 class=${styles.navigation}>Who Are You?</h1>
    <div class=${styles.entry__buttons}>
        <a class=${styles.entry__button} href="/login" title='Вход'>ВХОД</a>
        <a class=${styles.entry__button} href="/register" title='Регистрация'>РЕГИСТРАЦИЯ</a>
    </div>
`;
