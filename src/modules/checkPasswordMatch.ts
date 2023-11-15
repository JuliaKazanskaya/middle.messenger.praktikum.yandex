import { getErrorSpan } from '../components/error/getErrorSpan';
import { errorMessage } from '../components/error/errorMessage';

export const checkPasswordMatch = (element: HTMLElement) => {
    let firstPassword: HTMLInputElement | null = document.querySelector(`input[name='password']`);
    let secondPassword: HTMLInputElement | null = document.querySelector(`input[name='password-repeat']`);
    let errorElement = getErrorSpan(element);

    if (firstPassword && secondPassword && errorElement instanceof HTMLElement) {
        if (firstPassword.value === secondPassword.value) {
            errorElement.classList.remove('error_invalid');
            errorElement.classList.add('error-message');
            errorElement.textContent = '';
        } else {
            errorElement.classList.add('error_invalid');
            errorElement.classList.remove('error-message');
            errorElement.textContent = errorMessage.mismatchedPassword;
            errorElement.style.top = (element.offsetTop + element.clientHeight + 2) + 'px';
        }
    }
};
