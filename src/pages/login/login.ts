import {handleValidate} from '../../modules/handleValidate'
import './login.sass'

interface FieldList {

}

const inputForm: NodeList = document.querySelectorAll('input')



for (let key in inputForm) {
    const element = inputForm[key] as HTMLInputElement
    if (element.localName === 'input') {
        element.addEventListener('blur', handleValidate)
    }
}
