/*
todo{
    title: string,
    description: string,
    boolean: string
}
*/
const mongoose = require('mongoose');

//mongodb+srv://priyansu_singh:Priyansu%403344@cluster0.kppfn5m.mongodb.net/todos

mongoose.connect("mongodb+srv://priyansu_singh:Priyansu%403344@cluster0.kppfn5m.mongodb.net/todos");

const todoSchema = mongoose.Schema({
        title: String,
        description:String,
        completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}