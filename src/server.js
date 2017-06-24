'use strict';
const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-mail', function (req, res) {
  sendMail(req.body);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send('SEND MAIL');
});

app.listen(3000, function () {
  console.log('LISTENING on port 3000');
});

function sendMail(formData) {
  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'auikaskada',
        pass: 'OkmQaz12#'
      },
      debug: true
    },
    {
      from: 'Kaskada <auikaskada@gmail.com>',
      headers: {
        'X-Laziness-level': 1000
      }
    }
  );
  console.log('SMTP Configured');
  var message = {
    to: 'Bartek <bartlomiej.kornowski@gmail.com>',
    subject: 'Wiadomość z serwisu Kaskada',
    text: 'Wiadomość wysłana przez : ' + formData.name + "\n" +
    'Adres kontaktowy e-mail : ' + formData.email + "\n" +
    'Wiadomość dotyczy : ' + formData.message,
    html: '<p>Wiadomość wysłana przez : ' + formData.name + '</p>' +
    '<p>Adres kontaktowy e-mail : ' + formData.email + '</p>' +
    '<p>Wiadomość dotyczy : ' + formData.message + '</p>'
  };
  console.log('Sending Mail');

  transporter.sendMail(message, function (error, info) {
    if (error) {
      console.log('Error occurred ', error.message);
      return;
    }
    console.log('Message sent successfully!');
    console.log('Server responded with "%s"', info.response);
    transporter.close();
  });
}
