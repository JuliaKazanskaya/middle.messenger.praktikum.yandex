import styles from './error_404.module.scss';

export const template = `
    <section>
      <h5 class=${styles.main__errorText}>ИНОГДА ПОТЕРЯТЬСЯ ЭТО НЕ ПЛОХО</h5>
      <a class=${styles.main__returnLink} title='Назад к чатам' href='/'>Назад к чатам</a>
    </section>
`;
