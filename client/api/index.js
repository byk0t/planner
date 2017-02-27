import axios from 'axios';

import { apiPrefix } from '../../config/config.json';

export default {
	
	loadTask(taskId) {
		return axios.get(`${apiPrefix}/tasks/${taskId}`);
	},

    listTasks() {
        return axios.get(`${apiPrefix}/tasks`);
    },

    createTask(data) {
        return axios.post(`${apiPrefix}/tasks`, data);
    },

    deleteTask(taskId) {
        return axios.delete(`${apiPrefix}/tasks/${taskId}`);
    }
}
