import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';

export default class LdsCreateRecord extends LightningElement {
    name = '';
    accountId;

    handleNameChange(event) {
        this.name = event.target.value;
        this.accountId = undefined;
    }

    createAccount() {
        const fields = {};
        fields[ACCOUNT_NAME_FIELD.fieldApiName] = this.name;
        const recordInput = {apiName : ACCOUNT_OBJECT.objectApiName, fields};
        createRecord(recordInput)
        .then(account => {
            this.accountId = account.id;
            this.dispatchEvent(
                new ShowToastEvent({
                    title:'Success',
                    message:'Account Created',
                    variant:'success',
                })
            );
        })
        .catch(error=> {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        })
    }
}