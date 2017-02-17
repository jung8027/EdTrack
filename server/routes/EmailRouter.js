const router = require("express").Router();
// const email = require("../../client/public/email.min.html");
// const email = require("../../client/public/test1.min.html");

const SENDGRID_API_KEY='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'
const sg = require('sendgrid')(SENDGRID_API_KEY);
const  helper = require('sendgrid').mail;

function sendMail(req, res){
	console.log('sendMail invoked!');

	const from_email = new helper.Email("edtrack@googlegroups.com");
	const to_email = new helper.Email("quan.a.vuong@gmail.com");
	const subject = "Mentor Session Info next Tuesday 2/21";

	// const content = new helper.Content("text/html",'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>EdTrack</title></head><body><h1>EdTrack Mentor Session Info</h1></body></html>');
	const content = new helper.Content("text/html", '<!DOCTYPE html><html><head><style>div.container {width: 100%;border: 1px solid gray;}header, footer {padding: 1em;color: white;background-color: rgb(0, 180, 0);clear: left;text-align: center;}nav ul {list-style-type: none;padding: 0;}nav ul a {text-decoration: none;}#topics {margin-left: 170px;border-left: 1px solid gray;padding: 1em;overflow: hidden;}</style></head><body><div class="container"><header><h1> Mentor Session Info</h1></header><h1></h1><section id="students"> Iliass Quan Jung Luis</section><section id="topics"> # Final Topics ## Data Structures & Algorithms - hash tables (what are they + their practical use in JavaScript) - Big O Runtime (what is it + identifying runtime of various functions) - arrays (contiguous vs non-contiguous) - stacks and queues - recursion - linked lists</section><footer>Copyright &copy; EdTrack.io</footer></div></body></html>');


	const mail = new helper.Mail(from_email, subject, to_email, content);


	//console.log(process.env.SENDGRID_API_KEY)
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



// /Users/Quan/Desktop/AC3.1/PROJECTS/EdTrack/node_modules/babel-core/lib/transformation/file/index.js:600
//       throw err;
//       ^

// SyntaxError: /Users/Quan/Desktop/AC3.1/PROJECTS/EdTrack/client/public/test1.min.html: Unexpected token (1:1)
// > 1 | <!DOCTYPE html><html><head><style>
//     |  ^
//   2 | div.container {
//   3 |     width: 100%;
//   4 |     border: 1px solid gray;
