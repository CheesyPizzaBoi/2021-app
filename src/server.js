/* const Vonage = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "b2425b31",
  apiSecret: "lnyCrBqC22ndF8Y9"
})

const from = "18337907409"
const to = "12134769259"
const text = 'A text message sent using the Vonage SMS API'

vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
})

*/

const express = require('express');

const app = express();

const port = 3000;

app.listen(port);

