
const mongoose = require("mongoose");
const exam = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true
    },
});


const Exam = new mongoose.model("exam", exam);
module.exports = Exam;