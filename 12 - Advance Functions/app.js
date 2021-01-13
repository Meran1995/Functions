// Pure functions
function add(num1, num2) {
	return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

function addRandom(num1) {
	return num1 + Math.random();
}

console.log(addRandom(5));

let pResult = 0;

function addMoreNers(num1, num2) {
	const sum = num1 + num2;
	pResult = sum;
	return sum;
}

console.log(addMoreNers(1, 5));

const hobbies = ["Sports", "Cooking"];

function printHobbies(h) {
	h.push("New Hobby");
	console.log(h);
}

printHobbies(hobbies);

console.log("--- Pure functions ---");

// Factory Functions
let multiplier = 1.1;

function calculateTax(tax) {
	function calculateTax(amount) {
		return amount * tax * multiplier;
	}
	return calculateTax;
}

const calculateVatAmount = calculateTax(0.19);
const calculateIncomeTaxAmount = calculateTax(0.25);

multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

console.log("--- Factory functions ---");

let userName = "Max";

function greetUser() {
	let name = userName;
	console.log("Hi " + name);
}

userName = "Meran";
greetUser();

console.log("--- Closures functions ---");

// function powerOf(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

function powerOf(x, n) {
// 	if (n === 1) {
// 		return x;
// 	}
// 	return x * powerOf(x, n - 1);

  return n === 1 ? x : x * powerOf(x,n - 1);
}

console.log(powerOf(2, 3));

const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Meran',
      friends: [ 
        {
          name: 'Chris'
        }
      ]
    },
    {
      name: 'Julia'
    },
    {
      name: 'Fatima',
      friends: [ 
        {
          name: 'Houbina'
        }
      ]
    },
    {
      name: 'Joshua',
      friends: [ 
        {
          name: 'Samantha'
        }
      ]
    }
  ]
};

function getFriendsName(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends){
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendsName(friend));
  }

  return collectedNames;
}

console.log(getFriendsName(myself));

console.log("--- Recursion functions ---");
