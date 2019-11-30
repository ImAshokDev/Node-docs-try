// Using "nodemailer" module to send emails

var mailer = require('nodemailer');

var transporter = mailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

var mailOptions = {
  from: 'khristyohan@gmail.com',
  to: 'khristyohan@gmail.com',

  subject: 'Sending Email using Nodejs script with nodemailer module',
  // Uncomment below line for html message
  html: '<h1>Hello</h1><p>Chaal Pritam!</p>',
  text: 'Hello Chaal Pritam'
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
