export const changeButtonClass = (event) => {
    let formClassList = [...event.target.form.classList];
    let inputs;
    formClassList.forEach(item => {
        if (item.match('form__auth') || item.match('form__registration') || item.match('form__settings')) {
            inputs = Array.from(event.target.closest(`.${item}`).elements);
        }
    });

    let isValidForm = true;

    inputs.forEach((elem) => {
        if (elem.type !== 'submit' || elem.type !== 'reset') {
            if (!elem.validity.valid)
                isValidForm = false;
        }
    });

    inputs.forEach((elem) => {
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
}