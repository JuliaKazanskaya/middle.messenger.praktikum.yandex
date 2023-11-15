import Block from "../../core/block";
import template from './form.pug';
import './form.sass';

interface FormProps {
    fieldList: Block[];
    formButton: Block;
    classList: string | string[];
    textValue: string;
    nameValue: string;
    events: {
        submit: (e: InputEvent) => void;
    };
}

export class Form extends Block {
    constructor(props: FormProps) {
        super(props);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
