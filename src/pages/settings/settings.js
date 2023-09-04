import {handleValidate} from '/src/modules/handleValidate';
import './settings.sass'

const inputForm = document.forms.auth;

inputForm.elements.login.addEventListener('click', handleValidate);
inputForm.elements.password.addEventListener('click', handleValidate);
