class Course {
	#price;
	
	get price() {
		return '$' + this.#price;
	}

	set price(value) {
		if (value < 0) {
			throw 'Invalid value!';
    }
    this.#price = value;
  }

	constructor(cTitle, cPrice, cLenght) {
		this.title = cTitle;
		this.price = cPrice;
		this.lenght = cLenght;
	}

	calValue() {
		return this.lenght / this.#price;
	}

	pSummary() {
		console.log(`
      Title: ${this.title}, 
      Lenght: ${this.lenght}, 
      Price: ${this.price}
    `);
	}
}

const jsCourse = new Course("Javascript = The complete guide", 50, 44);
const reactCourse = new Course("React = The complete guide", 50, 36);

console.log(jsCourse);
console.log(reactCourse);

console.log(jsCourse.calValue());
console.log(reactCourse.calValue());

jsCourse.pSummary();
reactCourse.pSummary();

class PracticalCourse extends Course {
	constructor(title, lenght, price, exCount) {
		super(title, price, lenght);
		this.numOfExercises = exCount;
	}
}

const angularCourse = new PracticalCourse(
	"Angular = The Complete Guide",
	36,
	50,
	10
);

console.log(angularCourse);
angularCourse.pSummary();

class TheoreticalCourse extends Course {
	publish() {
		console.log("Publishing...");
	}
}

const flutterCourse = new TheoreticalCourse(
	"Flutter - Build IOS and Andriod Apps",
	50,
	48
);

flutterCourse.price = 1;
flutterCourse.pSummary();
flutterCourse.publish();