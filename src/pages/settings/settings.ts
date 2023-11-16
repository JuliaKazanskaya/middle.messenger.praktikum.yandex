import './settings.scss';
import { handleValidate } from '../../core/handleValidate';
import { checkPasswordMatch } from '../../core/checkPasswordMatch';

const settingsForm: NodeList = document.querySelectorAll('input');
for (let key in settingsForm) {
  const element = settingsForm[key] as HTMLInputElement;
  if (element.name !== 'avatar' && element.localName === 'input') {
    element.addEventListener('blur', handleValidate);
  }
  if (element.name === 'password-repeat') {
    element.addEventListener('blur', (event) => {
      if (event.target instanceof HTMLElement) {
        checkPasswordMatch(event.target);
      }
    });
  }
}
