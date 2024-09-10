const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

// Task Endpoints
router.post('/', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);
router.put('/:id', taskController.updateTaskById);
router.delete('/:id', taskController.deleteTaskById);

module.exports = router;