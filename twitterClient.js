const {TwitterApi}= require("twitter-api-v2");

const client = new TwitterApi({
    appKey: "{put your appkey}",
    appSecret: "{put your appSecret}",
    accessToken: "{put ur token}",
    accessSecret: "{put ur access secret}",

})

const rwClient = client.readWrite

module.exports = rwClient