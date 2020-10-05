// const ids = new Set(['Hello', 'Bye', "Brother"]);
// ids.add(2);

// for (const entry of ids.entries())  {
//   console.log(entry[0]);
// }

// const person1 = {name: 'Max'};
// const person2 = {name: 'Manu'};

// const personData = new Map([[person1, [{date: 'Yesterday', price: 10}]]]);

// personData.set(person2, [{date: 'two weeks ago', price: 100}]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

// WeakSet and WeakMap is use in big aplications
// let person = { name: "Max" };
// const persons = new WeakSet();
// persons.add(person);

// // ... some perations
// // person = null;
// // console.log(persons);

// const personData = new WeakMap();
// personData.set(person, 'Extra Info');

// person = null;

// console.log(personData);