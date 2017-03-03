import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as db from './utils/db';

const app = express();

db.connect();

app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

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

const server = app.listen(8080, ()=> {
	console.log(`Server is up and running on port 8080`);
});