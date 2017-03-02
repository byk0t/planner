import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const TaskActions = {

    loadTask(id) {
        AppDispatcher.dispatch({
            type: Constants.LOAD_TASK_REQUEST,
            id:id
        });
        api.loadTask(id)
        .then(({data})=>
            AppDispatcher.dispatch({
                type: Constants.LOAD_TASK_SUCCESS,
                task: data
            })
        )
        .catch();
    },

    loadTasks() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_TASKS_REQUEST
        });

        api.listTasks()
        .then(({ data }) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_TASKS_SUCCESS,
                tasks: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_TASKS_FAIL,
                error: err
            })
        );
    },

    createTask(task) {
        api.createTask(task)
        .then(() =>
            this.loadTasks()
        )
        .catch(err =>
            console.error(err)
        );
    },

    deleteTask(taskId) {
        api.deleteTask(taskId)
        .then(() => {
                this.loadTasks();
                AppDispatcher.dispatch({
                    type: Constants.DELETE_TASK_SUCCESS                   
                })
            }
        )
        .catch(err =>
            console.error(err)
        );
    }
};

export default TaskActions;
