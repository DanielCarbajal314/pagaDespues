const BaseHttp = require('../infrastructure/http/base-http').BaseHttp;
const aplicationSettings = require('../app-settings').aplicationSettings;
const PaymentMethod = require('../models/payment-method').PaymentMethod;


module.exports.createPaymentMethodHandler = (body,callback) => {
    let paymentMethod = new PaymentMethod(body);
    BaseHttp.post(aplicationSettings.userEndpoint+`/${body.userToken}/bank-accounts`,{
        body:paymentMethod,
        json: true
    }).subscribe(newpaymentMethod => {
        if(newpaymentMethod.body){
            let newpaymentMethodformated = formatPaymentMethodResponse(newpaymentMethod.body);
            callback(newpaymentMethodformated)
        }
        else{
            callback(newpaymentMethod.body.errors);
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
        bankAccountPurpose:newpaymentMethod.bankAccountPurpose,
        bankAccountId:'********'+newpaymentMethod.bankAccountId.slice(-5),
        profileType:newpaymentMethod.profileType,
        fullName: `${newpaymentMethod.firstName} ${newpaymentMethod.lastName}`,
        location: `${newpaymentMethod.city} - ${newpaymentMethod.stateProvince} - ${newpaymentMethod.country}`
    }
}