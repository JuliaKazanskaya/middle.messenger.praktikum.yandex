import { handleValidate } from '../../core/handleValidate';
import { checkPasswordMatch } from '../../core/checkPasswordMatch';
import './registration.scss';

const regForm: NodeList = document.querySelectorAll('input');

for (let key in regForm) {
  const element = regForm[key] as HTMLInputElement;
  if (element.localName === 'input') {
    element.addEventListener('blur', handleValidate);
    if (element.name === 'password-repeat') {
      element.addEventListener('blur', (event) => {
        if (event.target instanceof HTMLElement) {
          checkPasswordMatch(event.target);
        }
      });
    }
  }
}
