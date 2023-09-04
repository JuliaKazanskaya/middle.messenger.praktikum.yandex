import {handleValidate} from '/src/modules/handleValidate';
import {checkPasswordMatch} from '/src/modules/checkPasswordMatch';
import './registration.sass'

const regForm = document.forms[`registration`];

for (let key in regForm.elements) {
    if (regForm.elements[key].type !== 'submit' && regForm.elements[key].type !== 'reset' && regForm.elements[key].localName === 'input') {
        regForm.elements[key].addEventListener('change', handleValidate);
    }
    if (regForm.elements[key].name === 'password-repeat') {
        regForm.elements[key].addEventListener('change', checkPasswordMatch);
    }
}
