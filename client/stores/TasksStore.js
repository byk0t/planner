    import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _tasks = [];
let _task = {};
let _loadingError = null;
let _isLoading = true;

function formatTask(task) {
    return {
        id: task._id,
        title: task.title,
        text: task.text,        
        createdAt: task.createdAt
    };
}

const TasksStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    getTasks() {        
        return _tasks;
    },

    getTask() {
        return _task;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.LOAD_TASKS_REQUEST: {
            _isLoading = true;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_TASKS_SUCCESS: {
            _isLoading = false;
            _tasks = action.tasks.map( formatTask );
            _loadingError = null;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_TASKS_FAIL: {
            _loadingError = action.error;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_TASK_REQUEST: {
            TasksStore.emitChange();
            break;    
        }

        case AppConstants.LOAD_TASK_SUCCESS: {
            _task = formatTask(action.task);
            TasksStore.emitChange();
            break;    
        }

        case AppConstants.LOAD_TASK_FAIL: {
            _loadingError = action.error;
            TasksStore.emitChange();
            break;    
        }

        case AppConstants.DELETE_TASK_SUCCESS: {
            _task = {};
            TasksStore.emitChange();
            break;        
        }

        default: {
            console.log('No such handler');
        }
    }
});

export default TasksStore;
