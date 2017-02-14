const router = require("express").Router();

const SENDGRID_API_KEY='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'
const sg = require('sendgrid')(SENDGRID_API_KEY);

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
//
function sendMail(req, res){
	console.log('sendMail invoked!');
	const  helper = require('sendgrid').mail;

	const from_email = new helper.Email("test@example.com");
	const to_email = new helper.Email("quan.a.vuong@gmail.com");
	const subject = "Sending with SendGrid is Fun";
	const content = new helper.Content("text/plain", "OMG OMG I received an EMAILLLLLL!!! OMG OMG");
	const mail = new helper.Mail(from_email, subject, to_email, content);


	//console.log(process.env.SENDGRID_API_KEY)
	const request = sg.emptyRequest({
		method: 'POST',
		path: '/v3/mail/send',
		body: mail.toJSON()
	});

	sg.API(request, function(error, response) {
		console.log(response.statusCode);
		console.log(response.body);
		console.log(response.headers);

		res.send(response);


	});

}

router.route("/")
	.post(sendMail);

module.exports = router;
