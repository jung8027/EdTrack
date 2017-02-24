const router = require("express").Router();
const SENDGRID_API_KEY = require('../../sendgrid.js');
const sg = require('sendgrid')(SENDGRID_API_KEY);
const helper = require('sendgrid').mail;

function sendMail(req, res){
	console.log('sendMail invoked!');
	console.log("req.body: ", req.body);

	const from_email = new helper.Email(req.body.from);
	const to_email = new helper.Email(req.body.to);
	const subject = "Upcoming Mentor Session Info";

	let students = req.body.students;
	let teachingTopic = req.body.teachingTopic;

	const content = new helper.Content("text/html", '<!DOCTYPE html><html><head><style>div.container {width: 100%;border: 1px solid gray;}header, footer {padding: 1em;color: white;background-color: #3F485D;clear: left;text-align: center;}nav ul {list-style-type: none;padding: 0;}nav ul a {text-decoration: none;}#teachingTopic {margin-left: 170px;border-left: 1px solid gray;padding: 1em;overflow: hidden;}</style></head><body><div class="container"><header><h1> Mentor Session Info</h1></header><h1></h1><section id="students">'+ students +'</section><section id="teachingTopic">'+ teachingTopic +'</section><footer>Copyright &copy; EdTrack.io</footer></div></body></html>');

	const mail = new helper.Mail(from_email, subject, to_email, content);

	const request = sg.emptyRequest(
{		method: 'POST',
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
