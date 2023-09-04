import {getErrorSpan} from '/src/components/error/getErrorSpan';
import {errorMessage} from '/src/components/error/errorMessage'

export const checkPasswordMatch = (element) => {
    let firstPassword = document.querySelector(`input[name='password']`);
    let secondPassword = document.querySelector(`input[name='password-repeat']`);
    let errorElement = getErrorSpan(element);

    if( firstPassword.value === secondPassword.value) {
        errorElement.classList.remove('error_invalid');
        errorElement.classList.add('error-message');
        errorElement.textContent = '';
    } else {
        errorElement.classList.add('error_invalid');
        errorElement.classList.remove('error-message');
        errorElement.textContent = errorMessage.mismatchedPassword;
        errorElement.style.top = element.target.offsetTop + element.target.clientHeight + 2 + 'px';
    }
}