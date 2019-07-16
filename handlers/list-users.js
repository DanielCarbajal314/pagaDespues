const BaseHttp = require('../infrastructure/http/base-http').BaseHttp;
const aplicationSettings = require('../app-settings').aplicationSettings;


module.exports.listUsersHandler = (callback) => {
    BaseHttp.get(aplicationSettings.userEndpoint,{
        json:true
    })    
    .subscribe(userListResponse => {
        if(userListResponse.body){
            let users = userListResponse.body.data.map(user=>formatUserResponse(user));
            callback(users);
        }
        else{
            callback(userListResponse.body.errors);
        }
    })
}

const formatUserResponse = User => {
    return {
        clientUserId : User.clientUserId,
        token : User.token,
        status : User.status,
        email : User.email,
        fullName : `${User.firstName} ${User.lastName}`,
        fullName : `${User.firstName} ${User.lastName}`,
        location : `${ User.addressLine1 } - ${User.city} - ${User.stateProvince} - ${User.country}`
    }
}