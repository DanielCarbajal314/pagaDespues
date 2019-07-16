const BasePostBody = require('../infrastructure/http/base-post-body').BasePostBody;
const uuidv1 = require('uuid/v1');

module.exports.User = class User extends BasePostBody {
    constructor(requestBody){
        super();
        this.clientUserId = uuidv1();
        this.profileType = "INDIVIDUAL";
        this.firstName = requestBody.firstName;
        this.lastName = requestBody.lastName;
        this.email = requestBody.email;
        this.dateOfBirth = requestBody.dateOfBirth;
        this.addressLine1 = requestBody.addressLine1;
        this.city = requestBody.city;
        this.country = requestBody.country;
        this.stateProvince = requestBody.stateProvince;
        this.postalCode = requestBody.postalCode;
    }
}

