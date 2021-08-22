import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api
    itemName;
    _textVal; //Private track variable

    @api
    publicChildMethod() {
        alert('Calling Child Method From Parent');
    }

    connectedCallback() {
        alert(this.itemName);
    }

    //Using the same property name in the getter results in calling it in loop leading to Maximum call stack size exceeded error
    //Hence use different property name inside the getter e.g. _textVal
    @api
    get textVal() {
        return this._textVal;
    }

    set textVal(value) {
        this._textVal = value;
    }
}