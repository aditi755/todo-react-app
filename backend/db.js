const mongoose = require("mongoose")

//mongo url
mongoose.connect('mongodb+srv://aditi:duaLipa21@cluster0.uybrrhv.mongodb.net/todos')
const todoSchema = mongoose.Schema({
     title: String,
     description: String,
     completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}