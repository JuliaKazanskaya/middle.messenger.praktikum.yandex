import { changeButtonClass } from './changeButtonClass';
import { getErrorSpan } from '../components/error/getErrorSpan';
import { errorMessage } from '../components/error/errorMessage';

export const handleValidate = (event: Event): boolean => {
    changeButtonClass(event)
    let errorElement: HTMLElement = getErrorSpan(event.target as HTMLElement)
    let tempElement = (event.target as HTMLInputElement).validity
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

    errorElement.style.top = (event.target as HTMLElement).offsetTop + (event.target as HTMLElement).clientHeight + 2 + 'px';

    return true;
};
