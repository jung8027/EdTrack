const express = require('express');
const router = express.Router();

router.use("/topic", require('./TopicRouter.js'));
router.use("/mentor", require('./MentorRouter.js'));
router.use("/grade", require('./GradeRouter.js'));
router.use("/student", require('./StudentRouter.js'));
router.use("/class", require('./ClassRouter.js'));
router.use("/instructor", require('./InstructorRouter.js'));

router.use("/email", require('./EmailRouter.js'));

module.exports = router;
