const appSettings = require('../../app-settings').aplicationSettings;

module.exports.BasePostBody = class {
    constructor(){
        this.programToken = appSettings.programToken;
    }
}