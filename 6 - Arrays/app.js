// This is fast and new JS
// const newArray1 = [1, 2, 3];
// console.log(newArray1);

// const newArray2 = new Array('Hi!!', 'Welcome',);
// console.log(newArray2);

// const newArray3 = Array(5, 2);
// console.log(newArray3);

// const newArray4 = Array.of(1, 2);
// console.log(newArray4);

// This can be use for confurting something to arrays
// const listItems = document.querySelectorAll('li');

// const newArray5 = Array.from(listItems);
// console.log(newArray5);

// You can set 
// Strings
// Numbers
// Nested array
// loops
// Mixed data in a Array

//remove add or set it on n1 or last....
// const hobbies = ['sport', 'cooking'];
// hobbies.push('reading');
// hobbies.unshift('Coding');
// hobbies.pop();
// hobbies.shift('')

// console.log(hobbies)

// hobbies[1] = 'coding';
// // hobbies[2] = 'reading';
// console.log(hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies)

// hobbies.splice(2);
// console.log(hobbies)

// Slice the Array for better vision
// const test = [1, 5.3, 1.5, 10.54, -5, 10];
// // const storeTest = test.slice(0, 2);

// // Concat combine the first Array and make the new array the New Array
// const storeTest = test.concat(3.99, 1.23);



// test.push(5.91);

// console.log(test, storeTest);
// // find the same value and give as output where it (place) is in the array
// console.log(test.indexOf(1.5));


// const personData = [{name: 'Max'}, {name: 'Manu'}];
// console.log(personData.indexOf({name: 'Manu'}));

// const manu = personData.find((person, index, persons) => {
//   return person.name === 'Manu';
// });

// manu.name = 'Anna';

// console.log(manu, personData);

// // Here you get the index where max is on the array
// const Max = personData.findIndex((person, index, persons) => {
//   return person.name === 'Max';
// });

// console.log(Max);

// + tax on a price
// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxPrice = [];

// // for ( const price of prices) {
// //   taxPrice.push(price * (1 + tax));
// // }

// // same as above!!
// prices.forEach((price,idx, prices) => {
//   const priceObj = {index: idx, taxPrice: price * (1 + tax)};
//   taxPrice.push(priceObj);

// });

// console.log(taxPrice);

// shorter but the same as above
// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxPrice = prices.map((price,idx, prices) => {
  // const priceObj = {index: idx, taxPrice: price * (1 + tax)};
  // return priceObj;
// });

// console.log(taxPrice); 

// const sortPrice = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });

// console.log(sortPrice); 
// // console.log(sortPrice.reverse());

// const filterArray = prices.filter( p => p > 6);

// console.log(filterArray);

// // let sum = 0;

// // prices.forEach((price) => {
// //   sum += price
// // });

// // const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
// //   return prevValue + curValue;
// // }, 0);

// // Is the same as above!
// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// console.log(sum);

// const nameData = ['Max', 'Bob', 'Mr', 30];
// // const firstName = nameData[0];
// // const lastName = nameData[1];

// const [ firstName, lastName, ...otherInfo ] = nameData;
// console.log(firstName, lastName, otherInfo);