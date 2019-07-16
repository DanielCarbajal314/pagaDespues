const BaseHttp = require('../infrastructure/http/base-http').BaseHttp;
const aplicationSettings = require('../app-settings').aplicationSettings;
const PaymentMethod = require('../models/payment-method').PaymentMethod;


module.exports.listPaymentMethodsHandler = (userToken,callback) => {
    BaseHttp.get(aplicationSettings.userEndpoint+`/${userToken}/bank-accounts`,{
        json: true
    }).subscribe(userPaymentMethodsResponse => {
        if(userPaymentMethodsResponse.body){
            let paymentMethods = userPaymentMethodsResponse.body.data.map(paymentMethod=>formatPaymentMethodResponse(paymentMethod));
            callback(paymentMethods)
        }
        else{
            callback(userPaymentMethodsResponse.body.errors);
        }
    })
}

const formatPaymentMethodResponse = newpaymentMethod => {
    return {
        token:newpaymentMethod.token,
        type:newpaymentMethod.type,
        status:newpaymentMethod.status,
        transferMethodCountry:newpaymentMethod.transferMethodCountry,
        transferMethodCurrency:newpaymentMethod.transferMethodCurrency,
        bankName:newpaymentMethod.bankName,
        bankAccountId:'********'+newpaymentMethod.bankAccountId.slice(-5),
        bankAccountPurpose:newpaymentMethod.bankAccountPurpose,
    }
}