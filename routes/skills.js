var express = require('express');
var router = express.Router();
//require the controller that exports Skills CRUD functions
const skillsCtrl = require('../controllers/skills');

//the router was mounted. All actual paths start with "/skills"

// get /skills
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);

module.exports = router;
