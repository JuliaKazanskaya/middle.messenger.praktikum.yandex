export const getErrorSpan = (element: HTMLElement): HTMLElement => {
  let errorElement: HTMLElement = element;

  if (element.classList.contains('form__login')) {
    errorElement = document.querySelector('span[id=\'error-login\']') as HTMLElement;
  } else if (element.classList.contains('form__password')) {
    errorElement = document.querySelector('span[id=\'error-password\']') as HTMLElement;
  } else if (element.classList.contains('form__email')) {
    errorElement = document.querySelector('span[id=\'error-email\']') as HTMLElement;
  } else if (element.classList.contains('form__first-name')) {
    errorElement = document.querySelector('span[id=\'error-first-name\']') as HTMLElement;
  } else if (element.classList.contains('form__second-name')) {
    errorElement = document.querySelector('span[id=\'error-second-name\']') as HTMLElement;
  } else if (element.classList.contains('form__phone')) {
    errorElement = document.querySelector('span[id=\'error-phone\']') as HTMLElement;
  } else if (element.classList.contains('form__password-repeat')) {
    errorElement = document.querySelector('span[id=\'error-password-repeat\']') as HTMLElement;
  }

  return errorElement;
};
