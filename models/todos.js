const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    todo : {
        type : String,
        required : true

    }
}, {timestamp : true})

module.exports = mongoose.model('Todo', todoSchema)