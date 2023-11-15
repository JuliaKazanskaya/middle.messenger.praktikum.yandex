import './button.sass';
import Block from "../../core/block";
import template from './button.pug';

interface ButtonProps {
    classList: string | string[];
    buttonType: string;
    flagToEnable: boolean;
    textValue: string;
    events?: {
        click: () => void;
    };
}

export class Button extends Block {
    constructor(props: ButtonProps) {
        super(props);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
