// let foodItems=["cherries","apples","litchis","tomatoes","cucumbers"];
// // to add a value to the end//
// foodItems.push("bananas");
// console.log(foodItems);

// // pop is to delete and return an item or value//
// let deltedItem = foodItems.pop();
// console.log(foodItems);
// console.log("deleted", deltedItem);// this is to know which item we deleted//

// //tostring= to change an array into string//
// console.log(foodItems.toString());
// console.log(foodItems);

// //concat method= joins multiple arrays and return new array//
// let barbies=["elsa","anna","snowwhite","jasmine"];
// let barbiemovies=["alladin","frozen","cindrella"];

// let girls = barbies.concat(barbiemovies);
// console.log(girls);
// // u can concatinate as many arrys as u want//

// //unshift method= kinda like push but at the start means add at the start//
// barbies.unshift("rapunzel");

// //shift method= works like pop but at the start means delete from the start//
// let deletedbarbie = barbies.shift();
// console.log(barbies);
// // both shift and unshift deleted from the original array so u will see new values changed//

//  console.log("deleted", deletedbarbie);  // this is to view what u had deleted//

// // all methods start with small letter//


// //SLICE METHOD= returns a peice of the array, it doesnt change in the original array but just give uhh a new array with the sliced part. it work the same in strings. we will give starting index and ending index to it. but keep in mind that ending index is uninclusive.//

// console.log(barbies.slice(0,3));
// // if we dont give any ending pt it will simple give us entire array after the given starting index.//

// console.log(barbiemovies.slice(0,2));//if we dont give any starting and ending it will return complete array as it is..//

// //SPLICE METHOD = this changes in the original array and do everything in the array like add,remove,replace. We have to give 3 parameters lyk starting index and then how mucb we have to delete and after that and at last we have to specify if we have to add any other elements.//

// let arr =[1,3,5,8,9];
// //let splice(39 and 49 at the 2 index of the array)

// // this is how to add element//
// arr.splice(2,0,39);
// // arr.splice(2,2,39,50);

// //Delete item//
// arr.splice(3,1);

// //replace an element//
// arr.splice(3,1,101);

// //if u dont pass the no of elements to be delted so it will delete all the eleemnts after that specific index and will act like slice. like if u just write arr.splice(4) it will delete all values after index 4.// 

// let cities=["pkl","chd","delhi","goa"];

// console.log(cities);

// //practiceques for array methods//

// //1. create an array to store companies-> "bloomerg","microsoft","uber","goggle","ibm","netflix".
// //a.remove the first cmpny, //
// // remove uber and add ola in its place, //
// // add amazon at the end..//

// let companies=["bloomerg","microsoft","uber","goggle","ibm","netflix"];

// //remove the first company//
// console.log(companies.shift());
// console.log(companies);

// // add amazon at the end amd start both//
// companies.unshift("amazon");//start//
// companies.push("amazon");//end

// console.log(companies);

// //remove uber and add ola//
// //  companies[6]= "ola";
// companies.splice(2,1,"ola");
// console.log(companies);


//
// practice ques for functions and methods//


// find the marks higher than 90//
let marks =[95,99,87,89,90,81];

let newArr= marks.filter((val)=>{
    return val>=90;
});

console.log(newArr);

//2: In this we have to make an array with a number n from input and then apply reduce method to find sum and product of the array//
let n =prompt("enter a number : ");

let arr=[];
for(let i=1; i<=n; i++){
    arr[i-1] = i;   //1,2,4,n//
}

console.log(arr);

let sum = arr.reduce((result,current)=>{
     return result + current
})
 console.log("the sum of array is" +" "+  sum);

// the product with reduce method//

let product= arr.reduce((result,current)=>{
    return result * current
})

console.log("product", product)











