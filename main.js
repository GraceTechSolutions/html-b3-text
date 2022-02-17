// Variables
// var x = 5.2
// let y = 'Jay'

// Constant
// const p = 'Hello'

// {
//     let z = 5
//     console.log(z);
// }
// console.log(z);


// Datatype
// Numbers
// int
// 1,2,3,4,98, ---

// float
// 1.2, 4.5, 7.5

// hex
// 0xcc

// String
// 'Hello'
// "Hello"

// Escape character
// \'
// \"
// \\
// \n
// \t

// let desc = 'This \tis my \\ uncle\'s\n sh\op \"I am --\"'
// console.log(desc);

// Template litrels
// let first_name = 'Ujwal'
// let morning = true
// let Greet = `${morning? 'Good Morning':'Good Evening'} ${first_name}`
// console.log(Greet);

// Boolean
// true
// false

// undefined
// let z;

// null
// let n = null;



// Arithnatic
// +
// -
// /
// %
// *
// **
// ++
// --


// Assignment
// =    | x = 10
// +=   | x += 2    |   x = x + 2
// -=   | x -= 2    |   x = x - 2
// *=   | x *= 2    |   x = x * 2
// /=   | x /= 2    |   x = x / 2
// %=   | x %= 3    |   x = x % 2
// **=  | x **= 2   |   x = x ** 2
// ?

// let result = 1 > 2 ? 'x' : 'y';



// Comparision
// ==       equal to
// ===      equal value and equal type
// !=       not equal to
// !==      not equal value or not equal type
// >        grater than
// <        less than
// >=       grater than or equal to
// <=       less than or equal to


// Logical
// &&   logical and
// ||   logical or
// !    logical not


// Type
// typeof
// instanceof

// Botwise operators
// &    and
// |    or
// ~    not
// ^    xor
// <<   left shift
// >>   right shift


// 0000000000000000000101 = 5
// 0000000000000000000010 = 2



// Control statement

// console.log(result);


// if (1>2){
//     console.log('1 is grater than 2');
// }
// else if (2==2){
//     console.log('Hello');
// }
// else if(1==1){
//     console.log('1 Is Equal to 2');
// }
// else {
//     console.log('1 is not grater than 2');
// }

// x = 100

// while (x < 10) {
//     console.log(x);
//     x++ 
// }

// console.log('--------------------------------------');
// x = 100

// do {
//     console.log(x);
//     x++
// } while (x < 10)

// console.log(x);

// Form events
// let submit = (e) => {
//     e.preventDefault();
//     console.log(e);
//     console.log('Submitted');
// }

// let form = document.getElementById('form')

// form.addEventListener('submit', submit)

// KeyboardEvent

// document.getElementById('data').addEventListener('keydown', ()=>{
//     console.log('Key Down');
// })

// document.getElementById('data').addEventListener('keyup', ()=>{
//     console.log('Key Up');
// })

// document.getElementById('data').addEventListener('keypress', ()=>{
//     console.log('Key Pressed');
// })

// Mouse Event
// document.getElementById('button').addEventListener('mousedown', ()=>{
//     console.log('Mouse DOWN Event..');
// })

// document.getElementById('button').addEventListener('mouseup', ()=>{
//     console.log('Mouse UP Event..');
// })

// document.getElementById('button').addEventListener('mousewheel', ()=>{
//     console.log('Mouse Moved..');
// })


let title = document.getElementById('title')

let data = document.getElementById('data')

let button = document.getElementById('button')


button.addEventListener('click', ()=>{
    text = data.value
    console.log(text);
    title.innerText = text
})



