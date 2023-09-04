import {handleValidate} from '/src/modules/handleValidate';
import './login.sass'

const inputForm = document.forms[`auth`];

for (let key in inputForm.elements) {
    if (inputForm.elements[key].type !== 'submit' && inputForm.elements[key].type !== 'reset' && inputForm.elements[key].localName === 'input') {
        inputForm.elements[key].addEventListener('change', handleValidate);
    }
}