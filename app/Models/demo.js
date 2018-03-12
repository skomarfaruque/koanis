const mongoose = require('mongoose')
/*
    Task Schema
*/
const TaskSchema = mongoose.Schema = {
    name: String,
    urgency: String
}

module.exports = mongoose.model("demo", TaskSchema)