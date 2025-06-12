//1: in this ques, we had to access a heading and then append something to it. so we made a heading as said by hello js and then append(means add from the back) from apna college students// 
// let h2= document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText= h2.innerText + " " +"from Apna College students";


//2 question: we had to create 3 divs with same classes, then access them and change their text to something unique//

// let divs = document.querySelectorAll(".box");


// let i=1;
// for(divs of divs){
//     divs.innerText= `new unique value ${i}`;
//     i++;
// }

//ADD NEW ELEMENTS IN JAVASCRIPT AND OUR CODEE.//
//To do this first we have to create and then add them by using some methods like we has a button that welike to access at the ending of the div, to do this we got methods some of which are as follows..//

//create what u want to add.//
// let newBtn = document.createElement("button");
// console.log(newBtn)

// newBtn.innerText = "click me"; 

// //access the div or node u wanna work with//
// let div = document.querySelector(".dd");

// //node.append: ADD  at the end of the node//
// div.append(newBtn);

// //node.prepend: to add at the starting of the node.//

// div.prepend(newBtn);
// //node.before: to add before the div or node.//
// div.before(newBtn);

// //node.after: too add after the node and div.//
// div.after(newBtn);

// // Remove elements or nodes//
// // we can simply access the thing we wanna delete and then simply write node.remove. For example we have a button we wanna delete then we can simply write node.remove//

// div.remove();


//practice ques//

let newBtn = document.createElement("button");
console.log(newBtn);

newBtn.innerText = "click me";

newBtn.style.backgroundColor ="red";
newBtn.style.color ="white";

document.querySelector("body").prepend(newBtn);

//2:append a new class just with js to and existing element having a class.. this is done with classlist to keep both the styling and not overwrite one.//

let para = document.querySelector("p");

para.classList.add("newPp");

//class list is something we use when we have to add two classses to a element and want the element to include properties of both the classes combined and if their is any property overlapping means available in both it will simply pick up the latest one and apply it on.. similiarly we can also remove class list by using node.classList.remove("nameoftheclasstoberemoved")..///





