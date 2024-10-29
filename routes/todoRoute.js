const router = require('express').Router();
const todoController = require('../controllers/todo.controller');

router.post('/create' , todoController.createTodo);
router.get('/get' , todoController.getTodos);
router.put('/update/:id' , todoController.updateTodo);
router.delete('/delete/:id' , todoController.deleteTodo);

module.exports = router