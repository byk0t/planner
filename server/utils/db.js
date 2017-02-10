import mongoose from 'mongoose';

import '../models/Task';

const Task = mongoose.model('Task');

export function connect() {
    mongoose.connect(`mongodb://localhost:27017/test`);
}

export function createTask(data) {
    const task = new Task({
        title: data.title,
        text: data.text,        
        createdAt: new Date()
    });

    return task.save();
}