import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (request, response) => {
	response.send("Hello world!");
});

app.get("/greeting/:name", (request, response) => {
	// /student/:id/grades/:discipline
	response.send(`Hello ${request.params.name}`);
});

app.get("/greeting/:name/helloWord/:hello", (request, response) => {
	response.send(`${request.params.hello} ${request.params.name}!`);
});

app.post("/person/:name/:age/:hairColor", (request, response) => {
	let person = {
		name: request.params.name ? request.params.name : "N/A",
		age: request.params.age ? request.params.age : "N/A",
		hairColor: request.params.hairColor ? request.params.hairColor : "N/A",
	};

	// response.send(person);
	response.json(person);
});

app.post("/student", (request, response) => {
	let person = {
		name: request.body.name ? request.body.name : "N/A",
		age: request.body.age ? request.body.age : "N/A",
		hairColor: request.body.meanGrade ? request.body.meanGrade : "N/A",
	};

	// response.send(person);
	response.json(person);
});

app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
