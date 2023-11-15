import {handleValidate} from '../../modules/handleValidate'
import {checkPasswordMatch} from '../../modules/checkPasswordMatch'
import './registration.sass'

const regForm: NodeList = document.querySelectorAll('input')
for (let key in regForm) {
    const element = regForm[key] as HTMLInputElement
    if (element.localName === 'input') {
        element.addEventListener('blur', handleValidate)
    }
    if (element.name === 'password-repeat') {
        element.addEventListener('blur', (event) => {
            if (event.target instanceof HTMLElement) {
                checkPasswordMatch(event.target);
            }
        })
    }
}
