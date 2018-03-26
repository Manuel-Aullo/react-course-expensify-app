 const person = {
 	name: "Manuel",
 	age: 39,
 	location: {
 		city: "Ylöjärvi",
 		temp: -25
 	}
 };

const {name: firstName = "Anonymous", age} = person;
 // const name = person.name;
 // const age = person.age;
 console.log(`${firstName} is ${age}.`);
 const {city, temp: temperature} = person.location;
 console.log(`It's ${temperature}ºC in ${city}`);

const book = {
	title: "Ego is the Enemy",
	author: "Ryan Holiday",
	publisher : {
		name: "Penguin"
	}
};

const {name: publisherName = "Self-Published"} = book.publisher;
console.log(publisherName);

//
// Array destructuring
//

const address = ["Takotie 12", "Siivikkala", "Ylöjärvi", "33450"] ;

const [, alue, kaupunki = "Madrid", zip] = address;

console.log(`You are in ${alue} ${kaupunki}`);

const item = ["Coffee (hot)", "2.00€", "2.50€", "2.75€"];

const [itemName = "Coffee (Iced)",,mediumCoffeePrice = "3.00€",] = item;
console.log(`A medium ${itemName} costs ${mediumCoffeePrice}`);
