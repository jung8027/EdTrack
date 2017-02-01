var express = require('express');
var router  = express.Router();

router.use("/topic", require('./TopicRouter.js'));
router.use("/mentor", require('./MentorRouter.js'));
router.use("/grade", require('./GradeRouter.js'));
router.use("/student", require('./StudentRouter.js'));

module.exports = router;
