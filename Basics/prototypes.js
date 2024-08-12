// let usernameVariable = "Sushil";
// function usernameFunction() { }

// console.log("usernameVariable.__proto__: ", usernameVariable.__proto__); // usernameVariable.__proto__:  {}
// console.log("usernameVariable.prototype: ", usernameVariable.prototype); // usernameVariable.prototype:  undefined - As

// console.log("usernameFunction.__proto__: ", usernameFunction.__proto__); // usernameFunction.__proto__:  {}
// console.log("usernameFunction.prototype: ", usernameFunction.prototype); // usernameFunction.prototype:  {}

// Why usernameVariable.prototype:  undefined?
// => - The prototype property is only present on functions, as it is used to build the prototype chain when the function is used as a constructor.
//    - Since usernameVariable is a string (a primitive), it does not have a prototype property, hence usernameVariable.prototype is undefined.


// All Functions Have a prototype Property:
// Every function in JavaScript has a prototype property by default. This property is an object.
// This prototype property is primarily used for functions intended to be used as constructors.


// The Role of prototype When Used as Constructor:
// When a function is used as a constructor (i.e., called with the new keyword), the newly created object’s internal [[Prototype]] property (often accessed via __proto__) is set to the constructor function’s prototype object.
// Ex.
// function ExampleFunction() { }
// // Accessing the prototype property of the function
// console.log(ExampleFunction.prototype); // {}
// const instance = new ExampleFunction();
// console.log(instance.__proto__ === ExampleFunction.prototype); // true

// Ex:
// 1. __proto__ on Different Types:

// Object:
// const obj = {};
// console.log(obj.__proto__); // [Object: null prototype] {}

// Array
// const arr = [];
// console.log(arr.__proto__); // Object(0) []

// Function
// function func() { }
// console.log(func.__proto__); // {}

// Instance of a Constructor:
// function MyConstructor() { }
// const instance = new MyConstructor();
// console.log(instance.__proto__); // {}


// 2. prototype on Functions:

// Regular Function:
// function func() { }
// console.log(func.prototype); // {}

// Arrow Function:
// const arrowFunc = () => { };
// console.log(arrowFunc.prototype); // undefined (Arrow functions do not have a prototype property)

// Built-in Function:
// console.log(Array.prototype); // Object(0) []


// Clarification:
// All objects (including functions) have __proto__ because it is part of the object's internal structure used for inheritance.
// Only functions have a prototype property, which is used to set up inheritance for objects created with that function as a constructor.

// Important Note on Arrow Functions:
// Arrow functions (() => {}) do not have a prototype property. This is because they are not meant to be used as constructors and do not have their own this context.


