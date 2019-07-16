const RxHR = require('@akanass/rx-http-request').RxHR;
const appSettings = require('../../app-settings').aplicationSettings;

module.exports.BaseHttp = RxHR.defaults({
    auth:{        
        username: appSettings.userName,
        password: appSettings.password
    }
});