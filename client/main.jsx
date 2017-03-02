import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';

import Root from './components/Root.jsx';

ReactDOM.render(<Root history={hashHistory}/>, document.getElementById("main"));