const conf = require("../conf");
let serialComService = require("../serial-com");


/**
 *
 * Here, it's quite simple.
 *
 * You need to implement those 4 methods.
 * You only have to replace CHANGEME by the correct (and full) AT command
 *
 * a valid command starts with "at+"
 *
 * There is no test to help you validating those steps. But, really, the only thing you have to do is read examples, find the good one, and use it.
 *
 * Just, don't forget to use configurations values appEUI and appKey (a local variable is provided in each method needing it)
 *
 * And since there is no tests to help you validate those steps, don't hesitate to ask for a safety check if you don't succeed to validate the challenge (or if you are stuck)
 *
 */

const setModeLoraWan = () => {
    serialComService.sendCommand("at+mode=0"); // SET LoraWan work mode
};

const setAppEui = () => {
    const appEUI = conf.appEUI;
    serialComService.sendCommand("at+set_config=app_eui:" + appEUI);
};

const setAppKey = () => {
    const appKey = conf.appKey;
    serialComService.sendCommand("at+set_config=app_key:" + appKey);
};

const sendJoinRequest = () => {
    serialComService.sendCommand("at+join=otaa");
};


module.exports = {
    setModeLoraWan,
    setAppEui,
    setAppKey,
    sendJoinRequest
};
