import Block from "../../core/block";
import template from "../startPage/startPage.pug";
import '../index/index.sass';

export default class startPage extends Block {
    render() {
        return this.compile(template, {});
    }
}
