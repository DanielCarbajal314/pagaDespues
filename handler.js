'use strict';
const createUserHandler = require('./handlers/create-user').createUserHandler;
const listUsersHandler = require('./handlers/list-users').listUsersHandler;
const createPaymentMethodHandler = require('./handlers/create-payment-method').createPaymentMethodHandler;
const listPaymentMethodsHandler = require('./handlers/list-payment-methods').listPaymentMethodsHandler;
const createPaymentHandler = require('./handlers/create-payment').createPaymentHandler;

module.exports.createUser = (event, context, callback) => {
  createUserHandler(event.body, newUser=>{
    callback(null, newUser);
  });
};

module.exports.listUsers = (event, context, callback) => {
  listUsersHandler(userList=>{
    callback(null, userList);
  });
};

module.exports.createPaymentMethod = (event, context, callback) => {
  createPaymentMethodHandler(event.body, newPaymentMethod=>{
    callback(null, newPaymentMethod);
  });
};


module.exports.listPaymentMethods = (event, context, callback) => {
  listPaymentMethodsHandler(event.query.userToken, userPaymentMethodList=>{
    callback(null, userPaymentMethodList);
  });
};

module.exports.createPayment = (event, context, callback) => {
  createPaymentHandler(event.body,newPayment=>{
    callback(null, newPayment);
  });
};