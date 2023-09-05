export const getErrorSpan = (element) => {
    let errorElement;

    if (element.target.classList.contains('form__login')) {
        errorElement = document.querySelector(`span[name='error-login']`);
    } else if (element.target.classList.contains('form__password')) {
        errorElement = document.querySelector(`span[name='error-password']`);
    } else if (element.target.classList.contains('form__email')) {
        errorElement = document.querySelector(`span[name='error-email']`);
    } else if (element.target.classList.contains('form__first-name')) {
        errorElement = document.querySelector(`span[name='error-first-name']`);
    } else if (element.target.classList.contains('form__second-name')) {
        errorElement = document.querySelector(`span[name='error-second-name']`);
    } else if (element.target.classList.contains('form__phone')) {
        errorElement = document.querySelector(`span[name='error-phone']`);
    } else if (element.target.classList.contains('form__password')) {
        errorElement = document.querySelector(`span[name='error-password']`);
    } else if (element.target.classList.contains('form__password-repeat')) {
        errorElement = document.querySelector(`span[name='error-password-repeat']`);
    }

    return errorElement;
}
