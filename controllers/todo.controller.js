const todos = require('../models/todos')

const createTodo = async(req, res) =>{
    try {
        const newTodo = new todos({
            todo: req.body.todo
        });
        await newTodo.save()
        res.status(201).json(newTodo)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getTodos = async(req, res) =>{
    try {
        const getAll = await todos.find()
        res.status(200).json(getAll)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteTodo = async(req, res) =>{
    try {
        await todos.findByIdAndDelete(req.params.id);
        res.status(200).json("todo Deleted Successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}
const updateTodo = async(req, res) =>{
    try {
        const newTodo = await todos.findByIdAndUpdate(
            req.params.id,
            {todo:req.body.todo},
            {new : true}
        )
        res.status(200).json(newTodo)
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {createTodo, getTodos, updateTodo, deleteTodo}