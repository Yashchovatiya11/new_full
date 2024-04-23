var mongoose = require('mongoose');
const { type } = require('os');


var studentSchema = new mongoose.Schema({
    name: { type: String },
    surname: { type: String },
    lastname: { type: String },
    dob: { type: String },
    gender: { type: String },
    contact_number: { type: Number },
    whatsapp_number: { type: Number },
    father_contactnumber: { type: Number },
    adress: { type: String },
    qualification: { type: String },
    image: { type: String },
    course_name: { type: String },
    content_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "content"
    },
    course_start_date: {
        type: Date,
        default: Date.now()
    },
    pc_laptop: {
        type: String,
        default: "PC"
    },
    installment: {
        type: Array
    }

});

module.exports = mongoose.model('student', studentSchema);