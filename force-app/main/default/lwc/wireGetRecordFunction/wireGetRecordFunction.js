import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';
import ACCOUNT_FIELD_NAME from '@salesforce/schema/Account.Name';

export default class WireGetRecordFunction extends LightningElement {

    @api recordId;
    data;
    error;

    @wire(getRecord, {recordId: '$recordId', fields: [ACCOUNT_FIELD_NAME]})
    wiredAccount({data, error}) {
        if(data) {
            this.data = data;
            this.error = undefined;
        } else if(error) {
            this.data = undefined;
            this.error = error;
        }
    }

    get name() {
        return getFieldValue(this.data, ACCOUNT_FIELD_NAME);
    }
}