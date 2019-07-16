const BasePostBody = require('../infrastructure/http/base-post-body').BasePostBody;
const uuidv1 = require('uuid/v1');

module.exports.PaymentMethod = class PaymentMethod {
    constructor(requestBody){
        this.transferMethodCountry = "US";
        this.transferMethodCurrency = "USD";
        this.type = "BANK_ACCOUNT";
        this.bankAccountPurpose = "SAVINGS";
        this.branchId = requestBody.branchId;
        this.bankAccountId = requestBody.bankAccountId;
    }
}

