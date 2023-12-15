import Block from './Block.ts';
import { render } from './render.ts';
import styles from '../styles/modal.module.scss';

// Pages
import { EntryPage } from '../pages/entry/index.ts';
import { ErrorPage404 } from '../pages/errors/error_404/index.ts';
import { ErrorPage500 } from '../pages/errors/error_500/index.ts';
import { Login } from '../pages/login/index.ts';
import { Register } from '../pages/register/index.ts';
import { Settings } from '../pages/settings/index.ts';
import { Chats } from '../pages/chats/index.ts';

const pageTheme: Record<string, string> = {
  '/': '',
  '/404': styles.main_theme_404,
  '/500': styles.main_theme_500,
  '/login': styles.main_theme_auth,
  '/register': styles.main_theme_reg,
  '/settings': styles.main_theme_settings,
  '/chats': styles.main_theme_chat,
};

const ROUTES: Record<string, Block> = {
  '/': new EntryPage(),
  '/404': new ErrorPage404(),
  '/500': new ErrorPage500(),
  '/login': new Login(),
  '/register': new Register(),
  '/settings': new Settings(),
  '/chats': new Chats(),
};

document.addEventListener('DOMContentLoaded', () => {
  const currentRoute = window.location.pathname;
  const pageThemeValue = pageTheme[currentRoute] || '';
  render('#app', ROUTES[currentRoute], pageThemeValue);
});
