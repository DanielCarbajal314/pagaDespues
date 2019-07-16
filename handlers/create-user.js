const BaseHttp = require('../infrastructure/http/base-http').BaseHttp;
const aplicationSettings = require('../app-settings').aplicationSettings;
const User = require('../models/user').User;


module.exports.createUserHandler = (body,callback) => {
    let user = new User(body);
    BaseHttp.post(aplicationSettings.userEndpoint,{
        body:user,
        json: true
    }).subscribe(newUserResponse => {
        if(newUserResponse.body){
            let newUserData = formatUserResponse(newUserResponse.body);
            callback(newUserData)
        }
        else{
            callback(newUserResponse.body.errors);
        }
    })
}

const formatUserResponse = newUser => {
    return {
        clientUserId:newUser.clientUserId,
        token:newUser.token,
        status:newUser.status,
        fullName: `${newUser.firstName} ${newUser.lastName}`,
        location: `${newUser.city} - ${newUser.stateProvince} - ${newUser.country}`
    }
}