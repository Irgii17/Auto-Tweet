const rwClient = require("./twitterClient.js");
const CronJob = require("cron").CronJob;
const  tweet = async () => {
    try {
        await rwClient.v1.tweet(" put your message here! ")

    } catch (e) {
        console.error(e)

    }
}

const job = new CronJob("45 8 * * *", () =>{ //if u want to use time (this time follow ur GMT ) //45 meaning minute 8 meaning hour
    console.log('cron job Starting!')
tweet()

})
job.start();
