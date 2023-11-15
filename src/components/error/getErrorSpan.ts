export const getErrorSpan = (element: HTMLElement): HTMLElement => {
    let errorElement: HTMLElement = document.createElement('span');

    if (element.classList.contains('form__login')) {
        errorElement = document.querySelector(`span[name='error-login']`) as HTMLElement;
    } else if (element.classList.contains('form__password')) {
        errorElement = document.querySelector(`span[name='error-password']`) as HTMLElement;
    } else if (element.classList.contains('form__email')) {
        errorElement = document.querySelector(`span[name='error-email']`) as HTMLElement;
    } else if (element.classList.contains('form__first-name')) {
        errorElement = document.querySelector(`span[name='error-first-name']`) as HTMLElement;
    } else if (element.classList.contains('form__second-name')) {
        errorElement = document.querySelector(`span[name='error-second-name']`) as HTMLElement;
    } else if (element.classList.contains('form__phone')) {
        errorElement = document.querySelector(`span[name='error-phone']`) as HTMLElement;
    } else if (element.classList.contains('form__password-repeat')) {
        errorElement = document.querySelector(`span[name='error-password-repeat']`) as HTMLElement;
    }

    return errorElement;
};
