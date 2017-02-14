// // using SendGrid's v3 Node.js Library
// // https://github.com/sendgrid/sendgrid-nodejs
// const  helper = require('sendgrid').mail;

// const from_email = new helper.Email("test@example.com");
// const to_email = new helper.Email("test@example.com");
// const subject = "Sending with SendGrid is Fun";
// const content = new helper.Content("text/plain", "and easy to do anywhere, even with Node.js");
// const mail = new helper.Mail(from_email, subject, to_email, content);

// const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
// const request = sg.emptyRequest({
//   method: 'POST',
//   path: '/v3/mail/send',
//   body: mail.toJSON()
// });

// sg.API(request, function(error, response) {
//   console.log(response.statusCode);
//   console.log(response.body);
//   console.log(response.headers);
// });
