import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import findContacts from '@salesforce/apex/ContactController.findContacts';

const DELAY = 300;

export default class ApexWireMethodToProperty extends LightningElement {
    searchKey = '';

    //@wire(getContactList)
    //contacts; //contacts.data - list of contacts, contacts.error for error

    @wire(findContacts,{searchKey: '$searchKey'}) //$ indicates searchKey is dynamic and reactive
    contacts;

    handleChange(event) {
        //Debouncing this method: This is used to Apex call doesn't happen frequently
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
    }
}