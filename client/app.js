import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

class App extends React.Component {


    render() {
        return (
            <div>
                <h1>Hello, webpack</h1>
            </div>
        );
    }

    getTasksFromServer() {
        return axios.get(`http://localhost:8080/tasks`);
    }

};

ReactDOM.render(<App/>, document.getElementById("app"));