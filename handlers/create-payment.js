const BaseHttp = require('../infrastructure/http/base-http').BaseHttp;
const aplicationSettings = require('../app-settings').aplicationSettings;
const Payment = require('../models/payment').Payment;


module.exports.createPaymentHandler = (body,callback) => {
    let payment = new Payment(body);
    BaseHttp.post(aplicationSettings.paymentEndpoint,{
        body:payment,
        json: true
    }).subscribe(newpayment => {
        if(newpayment.body){
            let newpaymentformated = formatPaymentResponse(newpayment.body);
            callback(newpaymentformated)
        }
        else{
            callback(newpayment.body.errors);
        }
    })
}

const formatPaymentResponse = newpayment => {
    return {
        token:newpayment.token,
        status:newpayment.status,
        currency:newpayment.currency,
        clientPaymentId:newpayment.clientPaymentId,
        amount:newpayment.amount       
    }
}