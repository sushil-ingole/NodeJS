class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// const person1 = new Person('Sushil', 25);
// person1.greet();

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying and is in grade ${this.grade}.`);
    }

    greet() {
        super.greet();
        console.log(`I am a student in grade ${this.grade}.`);
    }
}

const student = new Student('Sushil1', 26, 'G3');
student.study();
student.greet();