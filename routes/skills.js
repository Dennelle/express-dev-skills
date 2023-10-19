var express = require('express');
var router = express.Router();

module.exports = router;

//require the controller that exports Skills CRUD functions
const skillsCtrl = require('../controllers/skills');

//the router was mounted. All actual paths start with "/skills"

// get /skills
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

route.get('/skills/:id', skillsCtrl.getOne());
