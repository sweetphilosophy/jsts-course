// function hello(): string {
// 	return "hello";
// }

// let x = {
// 	helloAsync: function () {
// 		return new Promise((resolve) => {
// 			resolve("Hello");
// 		});
// 	},
// };

// function deepHelloAsync(): Promise<any> {
// 	return new Promise((resolve) => {
// 		resolve(x);
// 	});
// }

// deepHelloAsync()
// 	.then((res) => {
// 		return res.helloAsync();
// 	})
// 	.then((res2: any) => {
// 		console.log(res2);
// 	});

// interface CsvEntry {
// 	number: string;
// 	fromBase: number;
// 	toBase: number;
// }

// function readFromFile(filePath: string): Promise<Array<CsvEntry>> {
// 	let results: Array<CsvEntry> = [];

// 	return new Promise((resolve, reject) => {
// 		if (!filePath) {
// 			reject(`Provide a valid file path`);
// 		}

// 		let parser = new csv.parse.Parser({ columns: true });

// 		parser
// 			.on("data", (data) => {
// 				results.push(data);
// 			})
// 			.on("end", () => resolve(results))
// 			.on("error", (err) => reject(err));

// 		fs.createReadStream(filePath).pipe(parser);
// 	});
// }

// await readFromFile("path");

// readFromFile("path").then();

function f1() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Hello from function1");
		}, 2000);
	});
}

function f2() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject("Hello from function2");
		}, 4000);
	});
}

// f2().then(msg => console.log(msg))
// f1().then(msg => console.log(msg))

// Promise.all, Promise.race, Promise.allSettled
// let promisesArray = [f1(), f2()];
// // let promiseAllVariable = Promise.all(promisesArray);
// // let promiseRaceVariable = Promise.race(promisesArray);
// let promiseAllSettledVariable = Promise.allSettled(promisesArray);

// promiseAllSettledVariable.then((res) => {
// 	res.forEach((element:any) => {
// 		if (element) {
// 		} else {

// 		}
// 	});
// 	// console.log(res);
// });

// promiseRaceVariable.then(res =>{
//     console.log(res)
// })

// console.log(promiseAllVariable);

// promiseAllVariable
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

function sumOrConcat(param1: number | string, param2: number | string) {}

function print(param1: number | string | boolean | undefined | null) {
	console.log(param1);
}

type Mircea = string | number;

let x: Mircea = 123

// !!! NEVER DO THIS !!!
// undefined | any

print();
