function assert(param1: any, param2: any) {
	return param1 === param2;
}

function sum(param1: number, param2: number) {
	return param1 + param2;
}

// console.log(assert(2, "2"));
// console.log(sum(2, 7));

let hello = function (name: string) {
	// console.log("Hello " + name);
	return "Hello " + name;
};

let greeting = function (anyFunction: (param: string) => string, name: string, age: number) {
	console.log(anyFunction(name) + " you are " + age + " years old");
};

let concatOne = (oriceAltceva: string) => oriceAltceva + "1"; // arrow functions returneaza implicit
// => { return oriceAltceva + "1";}

// greeting(concatOne, "Mircea", 26);

class Person {
	constructor(public name: string, public age: number) {}
}

// same with
class Person1 {
	public name: string;
	public age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

let arr: Array<Person> = [
	{ name: "Mihai", age: 23 }, // JSON notation
	{ name: "Mircea", age: 26 },
	{ name: "Andrei", age: 27 },
	new Person("Catalin", 21), // constructor call
	new Person("Mihai", 21),
];

let compareDesc = function (left: Person, right: Person) {
	// return right - left;
	return right.age - left.age;
};

arr.sort(compareDesc);

// console.log(JSON.stringify(arr));

// let index = 0;
// for (let i = 0; i < 100000000; i++) {
// 	index++;
// }

// setTimeout(function () { // this is asynchronous
// 	console.log("end1");
// }, 2000);

import fs from "fs";

console.log("start");

fs.readFile("./test.txt", "utf8", (err, password) => {
	// citesc parola
	console.log(password); // Hello

	fs.readFile("./content.txt","utf8", (err, content) => {

		fs.readFile("./carti.txt","utf8", (err, carti) => {

		});
	});
});

// console.log("end");

// setTimeout(function () { // this is asynchronous
// 	console.log("end1");
// }, 2000);

// console.log("end2");
