// //Variables
// var doNotUse = true;
// let value = "I am a string"
// console.log(value)
// const value2 = "I am still a string"
// console.log(value2)

//Conditionals

// if (doNotUse === true) {
//     console.log("Do not use VAR!")
// } else {
//     console.log("Why not?")
// }
//
// //type coersion
// let foo = 13;
// let bar = "13";
//
// console.log(foo == bar);
// console.log (foo === bar);

//Functions
// function doSomething(parameter) {
//     return parameter + " is the answer to life."
//
// }
// console.log(doSomething("Pizza", "donuts"));
// const doSomethingElse = (parameter) => parameter + " is the answer to life."
// console.log(doSomethingElse(42));


/*
If divisible by 3, fizz
If divisible by 5, buzz
If divisible both FizzBuzz
 */

// function fizzBuzz() {
//     for (let i = 1; i < 101; i++) {
//         if (i % 15 === 0) {
//             console.log("FizzBuzz")
//         } else if (i % 5 === 0) {
//             console.log("Buzz")
//         } else if (i % 3 === 0) {
//             console.log("Fizz")
//             } else {
//             console.log(i);
//         }
//     }
// }
//
// fizzBuzz();

window.addEventListener('DOMContentLoaded', (event) => {
    console.log ("DOM loaded and parsed.");
})

function displayMessage() {
    let boxes = document.getElementsByClassName("my-item");
    console.log(boxes)
}

document.getElementById("fireEvent").addEventListener('click', displayMessage);
