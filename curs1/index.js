console.log("Hello world!");

// asdasd
//      asdasdasd
//          asdasdas;

let age = 26;
console.log(age);

console.log("Mircea are " + age + " ani");

function sayHello(name, age){
    console.log(`${name} are ${age} ani`);
}

let Mircea = "o valoare"

sayHello(Mircea, 18)

let array = [1, 2, 3, 4, 5];

const myConstant = 6;

const obj = { name: "Mircea", age: 26 }; // nu isi poate schimba referinta. poate sa isi schimber valorile proprietatilor

for (let i = 0; i < array.length; i++) {
	setTimeout(function () {
		console.log(`Elementul ${array[i]} la pozitia ${i}`);
	}, 1000);
}
