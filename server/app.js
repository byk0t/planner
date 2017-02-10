import express from 'express';
import * as db from './utils/db';

const app = express();

app.get('/', (req, res)=> {
  res.send('Hello World, Bro!')
});

app.get('/test', (req, res)=> {
  res.send('Hello World, This is a test!')
});

app.get('/testdb', (req, res)=> {
	db.connect();
	const task = db.createTask( {title:'Work', text:'Do your work'});
	res.send("Created task " + task.title);
});

const server = app.listen(8080, ()=> {
	console.log(`Server is up and running on port 8080`);
});