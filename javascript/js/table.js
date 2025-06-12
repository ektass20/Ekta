// for(var i=1; i<=10; i++){
//     document.write("2* " + i + " = " + 2* i+ "</br>")
// }

// function table(){
//     var number=document.getElementById("first").value;
//    var result="";
//    var range=document.getElementById("second").value;

//     for(var i=1; i<=range; i++){

//         document.getElementById("dd").innerHTML= 
//         result+=number + " X " + i + " = " + number * i + "<br>";
//     }
    
// }

// How to print values of i with above value like 0-01-012. Loop inside loop// 

//   for( var i=1; i<=5; i++){
//      for(var j=0; j<i; j++){
//           document.write("j");
//      }
//      document.write("<br>")
// }
// document.write("<br>")

// //Loop inside loop for decrement operator//

// for(var i=0; i<=6; i++){
//     for(var k=6; k>i; k--){
//         document.write("k");
//     }
//     document.write("<br>")
// }

//while loop//

//  age=18;
//  while(age<40){
//      document.write("valid for license");
//  }
//  age++;
//  document.write("not valid for license");

//for of loop for iteration of array//
var colors=["red", "blue", "pink", "black"];

for(item of colors){
    document.write(item + "<br>");
}

//for do loop for iteration of object//

var students= {
    name: "ekta",
    course: "mern",
    city: "pkl",
    age: 22
}
document.write("<br>")

for(keys in students){
    document.write(keys+ " : " +students[keys]+ "<br>");
}
document.write("<br>")

// practice ques//

var employees = [
    {name: "ekta", course: "mern", city: "pkl"},
    {name: "meenakshi", course: "devops", city: "chd"},
    {name: "ira", course: "python", city: "delhi"}
]

// for(keys in employees){
//     document.write(keys+ " : " +employees[keys]+ "<br>");
// }

document.write(employees[2]);

for( item of employees){

   for(keys in item){
    document.write(keys+ " : " +item[keys]+ "<br>");
  }

}

// this is an array consisting of objects, which we have to show in a table//
var employees = [
    {name: "ekta", course: "mern", city: "pkl"},
    {name: "meenakshi", course: "devops", city: "chd"},
    {name: "ira", course: "python", city: "delhi"}
]

// this is how to create a table with for loop//
// let tableHTML = `
//     <table border="4" cellpadding="12">
//       <tr>
//         <th>Name</th>
//         <th>City</th>
//         <th>Course</th>
//       </tr>
//   `;
  
  // Use for...of  loop through each student
//   for ( var employee of employees) {
//     tableHTML += `
//       <tr>
//         <td>${employee.name}</td>
//         <td>${employee.city}</td>
//         <td>${employee.course}</td>
//       </tr>
//     `;
//   }
  
// tableHTML += `</table>`;
  
//   // Render the table in the HTML page
//   document.getElementById("pp").innerHTML = tableHTML;
  

//this is how to create a table normally//
//  document.getElementById("pp").innerHTML= 
 
// `<table border="2" cellpadding= "9">
// <tr>
//  <td>Name</td>
// <td>${employee.name}</td>

//  </tr>

//  <tr>
// <td>City</td>
// <td>${employee.city}</td>
// </tr>

// </table>`


// table in for loop//

// document.getElementById("pp").innerHTML=
// `<table border="5" cellpadding= "9">
// <tr>
// <td>Name</td>
// <td>City</td>
// <td>Course</td>
// </tr>

// for( var item of employees)

var employees = [
  {name: "ekta", course: "mern", city: "pkl"},
  {name: "meenakshi", course: "devops", city: "chd"},
  {name: "ira", course: "python", city: "delhi"}
]


for(keys in employees[2]){
  document.write(keys + "<br>");
};



