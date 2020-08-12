import fetch from "node-fetch";

// const fetch1 = require("node-fetch");

const url = "https://random.dog/woof.json";

// console.log("start");

// fetch(url) // apeleaza fetch returneaza un Promise (promise e un obiect) ca la un moment dat vom primi un response de la un API de pe internet
// 	.then((body) => body.json()) //
// 	.then((result) => { // cand obiectul de tip json e returnat, noi il folosim as it is
// 		console.log(result);
// 	});

// let f = fetch(url);

// let f2 = f.then(function (body) {
// 	// return cb()
// 	return body.json();
// });

// f2.then(function (res) {
// 	console.log(res);
// });

// console.log("end");

// let promise = new Promise();

// Promise { pending }
// [[PromiseStatus]] : "pending"
// ...

// console.log("start");

// function fromTimeout() {
// 	return new Promise((resolve, reject) => {
// 		let result = "yay!";
// 		let error = "NOOOO!";
// 		setTimeout(() => resolve(result), 2000);
// 		setTimeout(() => reject(error), 3000);
// 	});
// }

// fromTimeout()
// 	.then((res) => {
// 		console.log(res);
// 		altPromise.then(() => {
// 			alt1Promise.then();
// 		});
// 	})
// 	.catch((err) => console.error(err))
// 	.finally(() => console.log("Promise ended successfully"));

// async / await

// console.log("end");

async function fromTimeoutAsync() {
	let index = 0;

	for (let i = 0; i < 10000000; i++) {
		index++;
	}

	// throw "NOOO!";
	return index;
}

async function main() {
	try {
		console.log("start");

		let index = await fromTimeoutAsync();

		console.log((await fromTimeoutAsync()).toExponential());

		console.log(index);

		console.log("end");
	} catch (e) {
		console.error(e);
	}
}

main();
