import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as db from './utils/db';
import path from 'path';

const app = express();

const port = (process.env.PORT || 8080);

db.connect();

let publicDirPath = process.env.NODE_ENV == 'production' ? '/../public/client-build' :'/../../public/client-build';
let indexPagePath = process.env.NODE_ENV == 'production' ? '/../public/index.html' :'/../../public/index.html';

//serve static files from client-build directory
app.use( '/public', express.static( path.join(__dirname, publicDirPath)) );

//return index.html
app.get('/', function(req, res) {
    res.sendFile( path.join(__dirname, indexPagePath) );
});

app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// -- REST 
app.get('/tasks', (req, res)=> {
	db.getTasks().then(data => res.send(data));
});

app.get('/tasks/:id', (req, res)=> {
	db.getTaskById(req.params.id).then(data => res.send(data));
});

app.post('/tasks', (req, res)=> {
  	db.createTask(req.body).then(data => res.send(data));
});

app.delete('/tasks/:id', (req, res) => {
    db.deleteTask(req.params.id).then(data => res.send(data));
});
// -- REST

const server = app.listen(port, ()=> {
	console.log(`Server is up and running on port ${port} in ${process.env.NODE_ENV} mode`);
});