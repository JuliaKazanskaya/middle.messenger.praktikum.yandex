export const changeButtonClass = (event: Event) => {
    let formClassList: string[] = [...(event.target as HTMLFormElement).form.classList];
    let inputs: HTMLInputElement[] | undefined;
    formClassList.forEach(item => {
        if (item.match('form__auth') || item.match('form__registration') || item.match('form__userSettings')) {
            const formElement = (event.target as HTMLElement).closest(`.${item}`) as HTMLElement | null;
            if (formElement) {
                inputs = Array.from(formElement.querySelectorAll('input')) as HTMLInputElement[];
            }
        }
    });

    let isValidForm: boolean = true;

    inputs?.forEach((elem) => {
        if (elem.type !== 'submit' && elem.type !== 'reset') {
            if (!elem.validity.valid) {
                isValidForm = false;
            }
        }
    });

    inputs?.forEach((elem) => {
        if (elem.type === 'submit') {
            if (isValidForm) {
                elem.classList.add('button_active');
                elem.classList.remove('button_inactive');
                elem.removeAttribute('disabled');
            } else {
                elem.classList.remove('button_active');
                elem.classList.add('button_inactive');
                elem.setAttribute('disabled', '');
            }
        }
    });
};
