const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
});

router.put('/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
