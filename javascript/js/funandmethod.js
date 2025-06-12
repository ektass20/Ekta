// This is how you define a normal sum function//
function sum(x,y){
    // x and y would act as local variables//
    console.log(x+y);
}

//Call a function//
//sum();//

//Functions can also return values instead of printing them//

function sum(a,b){
    s= a+b;
    return s;  // this is used to return, but u can return only one variable whether it be array,variable or string , number anything//
}

let val= sum(7,7);
console.log(val);

//a thing to not is that is if u write anything after returning a function anything wouldnt be code in that function, because it won't work..//

//ARROW FUNCTIONS//

function sum(p,q){
    return p+q;
}

// arrow way of this func =>
const arrowSum= (p,q) =>{
    console.log(p+q);
}  // to execute this we will write parameters lyk normal function and it will work//

function multiplication(p,q){
    return p*q;
}

const arrowMulti= (p,q) =>{
    console.log(p*q);  // or simply return p * q;//
} // same as above//

// to print a function in arrow function//
const printHello = () => {
    console.log("hello");
};  // u have to call with adding parenthesis on console.//

//PRACTICE QUES//

//this is how to find the count and print the vowels from any given string//
function countVowels(str) {
    let count=0;
for( let item of str){
    if(item==="a" || item==="e" || item==="o" || item==="i" || item==="u"){
        count++;
        console.log(item);

    }
 }  
 
 return count;  
 
}

//this is how to find the count of vowels from any given string using a arrow function//
const countVow =(str) =>{
    let count=0;
for( let item of str){
    if(item==="a" || item==="e" || item==="o" || item==="i" || item==="u"){
        count++;

    }
 }  
 return count;  
}

//FOR EACH LOOP ARRAYS example// 

let arr=[1,2,3,4];

arr.forEach(function printVal(val){ //value at each index//

    console.log(val);
})
// we dont have to execute callback function for each will do that itself. mostly we pass foreach as arrow function//

let arre=[1,2,3,4];

arr.forEach((val) => { //value at each index//

    console.log(val);
})

//for cities//

let cities =["pune","delhi","goa"];
cities.forEach((val) => { //value at each index//

    console.log(val.toUpperCase());
})

//there are 3 parameters inside a callback function i.e value, index and array itself, all of them being optional.//

let citiys =["pune","delhi","goa"];
cities.forEach((val,idx,citiys) => { //value at each index//

    console.log(val.toUpperCase(),idx, citiys);
})

//PRACTICE QUES//

// return the squre of all arrays characters//
let num=[1,2,3,4,5,6,7];
num.forEach((num) => {
    console.log(num*num) //num**2
});

// we can also pass callback as//
let calcSquare= (num) => {
    console.log(num*num) //num**2
};
num.forEach(calcSquare);
