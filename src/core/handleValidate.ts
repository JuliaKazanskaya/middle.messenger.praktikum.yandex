import { changeButtonClass } from './changeButtonClass.ts';

const errorMessage = {
  requiredText: 'Это обязательное поле',
  lengthText: 'Должно быть от 3 до 20 символов',
  typeMismatch: 'Неверный формат',
  mismatchedPassword: 'Пароли не совпадают',
  another: 'Ошибка',
};

export const handleValidate = (event: Event): boolean => {
  changeButtonClass(event);

  const errorElement: HTMLInputElement = event.target as HTMLInputElement;
  const errorSpan: HTMLElement = document.querySelector(`span[id=${errorElement.name}]`) as HTMLElement;

  const errorMessageText = errorMessage;
  if (!errorElement.validity.valid) {
    errorSpan.style.display = 'block';
    switch (true) {
      case errorElement.validity.valueMissing:
        errorSpan.textContent = errorMessageText.requiredText;
        break;
      case errorElement.validity.tooShort || errorElement.validity.tooLong:
        errorSpan.textContent = errorMessageText.lengthText;
        break;
      case errorElement.validity.patternMismatch:
        errorSpan.textContent = errorMessageText.typeMismatch;
        break;
      default:
        errorElement.textContent = errorMessageText.another;
        break;
    }
  } else {
    errorSpan.style.display = 'none';
    errorSpan.textContent = '';
    return false;
  }

  errorSpan.style.top = `${(event.target as HTMLElement).offsetTop
    + (event.target as HTMLElement).clientHeight + 2}px`;

  return true;
};
