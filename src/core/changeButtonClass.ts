import { printForm } from './printForm.ts';

export const changeButtonClass = (event: Event) => {
  const inputs: HTMLInputElement[] = [...(event.target as HTMLFormElement).form];
  let isValidForm: boolean = true;

  inputs?.forEach((elem) => {
    if (elem.type !== 'submit' && elem.validity.valid) {
      isValidForm = false;
    }
  });

  if (inputs) {
    if (inputs[inputs.length - 1].type === 'submit') {
      if (isValidForm) {
        inputs[inputs.length - 1].removeAttribute('disabled');
      } else {
        inputs[inputs.length - 1].setAttribute('disabled', '');
      }
    }
  }

  printForm(event);
};
