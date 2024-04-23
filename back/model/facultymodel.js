var mongoose = require('mongoose')

var facultySchema = new mongoose.Schema({
    faculty_name:{
        type: 'String',
    },
    faculty_department: {
        type: 'String',
    },
    salary: {
        type: 'String',
    },
    time: {
        type: 'String',
        default: 'full time'
    },

})

module.exports = mongoose.model('faculty',facultySchema);