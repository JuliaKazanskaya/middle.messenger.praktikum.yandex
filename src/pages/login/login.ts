import { handleValidate } from '../../core/handleValidate';
import './login.scss';

const inputForm: NodeList = document.querySelectorAll('input');

for (let key in inputForm) {
  const element = inputForm[key] as HTMLInputElement;
  if (element.localName === 'input') {
    element.addEventListener('blur', handleValidate);
  }
}
