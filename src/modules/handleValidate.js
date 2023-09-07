import {changeButtonClass} from './changeButtonClass';
import {getErrorSpan} from '/src/components/error/getErrorSpan';
import {errorMessage} from '/src/components/error/errorMessage';

export const handleValidate = (element) => {
    changeButtonClass(element);
    let errorElement = getErrorSpan(element);
    let tempElement = element.target.validity;
    const errorMessageText = errorMessage;

    if (!tempElement.valid) {
        errorElement.classList.add('error_invalid');
        errorElement.classList.remove('error-message');
        switch (true) {
            case tempElement.valueMissing:
                errorElement.textContent = errorMessageText.requiredText;
                break;
            case tempElement.tooShort || tempElement.tooLong:
                errorElement.textContent = errorMessageText.lengthText;
                break;
            case tempElement.patternMismatch:
                errorElement.textContent = errorMessageText.typeMismatch;
                break;
            default:
                errorElement.textContent = errorMessageText.another;
                break;
        }
    } else {
        errorElement.classList.remove('error_invalid');
        errorElement.classList.add('error-message');
        errorElement.textContent = '';
        return false;
    }

    errorElement.style.top = element.target.offsetTop + element.target.clientHeight + 2 + "px";

    return true;
}
