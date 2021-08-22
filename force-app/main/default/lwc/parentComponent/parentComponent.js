import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    handleclick() {
        this.template.querySelector('c-child-component').publicChildMethod(); //Calling child method
    }
}