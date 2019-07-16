const BasePostBody = require('../infrastructure/http/base-post-body').BasePostBody;
const uuidv1 = require('uuid/v1');
const aplicationSettings = require('../app-settings').aplicationSettings;

module.exports.Payment = class PayPaymentmentMethod extends BasePostBody {
    constructor(requestBody){
        super();
        this.programToken = aplicationSettings.programTokenForPayment;
        this.clientPaymentId = uuidv1();
        this.amount = requestBody.amount;
        this.purpose = 'GP0005';
        this.currency = 'USD';
        this.destinationToken = requestBody.destinationToken;
    }
}

