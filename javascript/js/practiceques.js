// const product={
//     fullName: "Parker Jotter Standard CT Ball Pen",
//     rating: 4,
//     offer: 5,
//     price: 270,
// };

// console.log(product);


// const profile={
//     fullName: "Shradhakhapra",
//     followers: 250000,
//     following: 4,
//     isFollow: true,
// };

// console.log(profile);
// console.log(typeof profile["isFollow"]);

// ques for arraya loops//
// we have to calculate the average marks//

// let marks = [85,97,44,37,76,60];

// let sum = 0;

// for (let val of marks){
//    sum+=val;
// }

// let avg= sum/marks.length;
// console.log("average marks is"+ " " + avg);

// print the  final prices of items after applying a offer of 10% on every item in an array given below//

//this is done using for of loop with indirect index usage//
 let items=[250,645,300,900,50];
// let idx=0;
// for(let el of items){
//     console.log(`value at index ${idx} = ${el}`);
//     let offer= el/10;
//     items[idx] = items[idx]-offer;
//     console.log(`value after offer= ${items[idx]}`);
//     idx++
// }

//Now using for loop//

for (let i = 0; i<items.length; i++){
    let offer = items[i]/10;
    items[i]-= offer;
}
console.log(items);




