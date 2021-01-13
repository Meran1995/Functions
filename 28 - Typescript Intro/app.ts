// class User {
// 	// typescript rule need to difine it:
// 	name: string;
// 	private age: number;

// 	constructor( name: string, age: number){
// 		this.name = name;
// 		this.age = age;
// 	}
// }

// use greetAble as a blueprint
interface GreetAble {
	name: string;
}

// Extra Safety
interface PrintAble {
	print(): void;
}
// Typescript class simplfy
class User implements GreetAble, PrintAble {
	constructor(public name: string,private age: number){}

	print(){
		console.log(this.name);
	}
}

class Admin extends User {
	constructor(name: string, age: number, private permission: string[]){
		super(name, age)
	}
}

const user = new User("Meran", 26);
console.log(user.name); // user.age will NOT do, because the "private" syntax!

const firstNum = document.getElementById("num1") as HTMLInputElement; // typescript value html
const secondNum = document.getElementById("num2") as HTMLInputElement;
const inputBtn = document.querySelector("button")!;

function add(a: number, b: number){
	return a + b;
}


// TYPE = the typescript function to name your own type of it and use it more then onces
type PrintFun = "console" | "alert";
// this is another way to do that like above
enum OutputMode { CONSOLE, ALERT };

function printFun(result: string | number , printMode: OutputMode) { // OutputMode can be replaced by PrintFun too
	if (printMode === OutputMode.CONSOLE){
		console.log(result);
	} else if(printMode === OutputMode.ALERT){
		alert(result);
	}
}

// Typescript interface way of 
interface CalculateContainer{
	res: number;
	print(): void;
}

// after results we sign our object a value of numbers
// after numbers we sign our print function a value of void:... 
// that dont get anything in return
type CalculateResult = CalculateContainer[];

const results: Array<CalculateContainer> = [];
const names = ["Meran"];

inputBtn.addEventListener("click", () => {
	// + sign is the value of numbers that we define
	const num1 = +firstNum.value;
	const num2 = +secondNum.value;
	const result = add(num1, num2);
	const resultCon = {
		res: result,
		print(){
			console.log(this.res)
		}
	};
	results.push(resultCon);
	// results.push(5);
	// results[0].print();
	printFun(result, OutputMode.CONSOLE);
	printFun(result, OutputMode.ALERT);
})
// const result = add(5, 3);
// let isDone = false;

// console.log(result);


// generic type way of your own typeScript function
function logAndEcho<T>(val: T) {
	console.log(val);
	return val;
}
logAndEcho<string>("Hi there man!").split(" ");