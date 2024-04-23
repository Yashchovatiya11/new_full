var express = require('express');
var router = express.Router();

var user = require('../controller/facultycontroller')

router.post('/addfaculty', user.add_faculty);
router.get('/:id', user.find_faculty);
router.get('/', user.find_allfaculty);
router.post('/update/:id', user.update_faculty);
router.delete('/delete/:id', user.delete_faculty);

module.exports = router;