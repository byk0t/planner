import mongoose from 'mongoose';

import '../models/Task';

const Task = mongoose.model('Task');

export function connect() {
    mongoose.connect(`mongodb://localhost:27017/test`);
}

export function getTasks() {
	return Task.find();
}

export function deleteTask(id) {
    return Task.findById(id).remove();
}

export function createTask(data) {
    const task = new Task({
        title: data.title,
        text: data.text,        
        createdAt: new Date()
    });

    return task.save();
}