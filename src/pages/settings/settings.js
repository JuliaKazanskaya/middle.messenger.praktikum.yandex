import {handleValidate} from '/src/modules/handleValidate';
import './settings.sass'
import {checkPasswordMatch} from "/src/modules/checkPasswordMatch";

const settingsForm = document.forms.settings;

for (let key in settingsForm.elements) {
    if (settingsForm.elements[key].type !== 'submit' && settingsForm.elements[key].type !== 'reset' && settingsForm.elements[key].type !== 'file' && settingsForm.elements[key].localName === 'input') {
        settingsForm.elements[key].addEventListener('change', handleValidate);
    }
    if (settingsForm.elements[key].name === 'password-repeat') {
        settingsForm.elements[key].addEventListener('change', checkPasswordMatch);
    }
}
