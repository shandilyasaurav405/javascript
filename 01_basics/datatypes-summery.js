// primitive

//7 types : String, Number,Boolean, null,undefined, Symbol, BigInt

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 345677876n   //bigInt 




// Javascript is a dynamic typing language. When you declare a variable, you do not need to specify what type this variable is. Javascript engine infers what type this variable is based on the value assigned to at run time.


// Refrence (Non primitive)

// Array,Objects, Functions

const heros =["shaktiman", "naagraj", "daga"] //array

let myobj = {
    name : "saurav",
    age: 22, 
}//object



// function

const myFunctionfunction(){
    console.log("hello world");
}


//how to know datatypes

console.log(typeof );


//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(primitive is used), Heap(non primitive is used)
// stack memory is used then a copy of original value  is formed. 
//heap memory is used then refrence is formed of original value.


let myname = "saurav";


let anotheName = myname

console.log(anotheName)
