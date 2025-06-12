var employees = [
    {name: "ekta", course: "mern", city: "pkl"},
    {name: "meenakshi", course: "devops", city: "chd"},
    {name: "ira", course: "python", city: "delhi"}
  ]
  
 
// for(keys in employees[2]){
//     document.write(keys + "<br>");
//   };
  
// let table = `<table border="2" cellpadding="9"> <tr> `;
//   for(keys in employees[0]){
//   table = table + `<th> ${keys} </th>`
// } 
//  table = table + `</tr>`;

// for ( keys of employees){
// for ( item in keys){ `<tr>`
//  table  = table + `<td>` + keys[item] + `</td>`
//  }
// table = table + `</tr>`;
// }
//  document.write(table);


 var workers = {
  raj : {id:1,fname:"ram", lname:"kumar", ageYear:1992, city:"chd",desig:"java"},
  rahul :  {id:2,fname:"sham", lname:"kushal", ageYear:1999, city:"delhi",desig:"python"},
  ramesh: {id:3,fname:"rahul", lname:"kapoor", ageYear:1995, city:"goa",desig:"mern"}
}

// making nested object in table//

let table = `<table border="3" cellpadding= "8"> <tr>`;
  for (key in workers.raj){

    table = table + `<th> ${key}</th>`;
}

table = table + `</tr>`;

for ( item in workers){
  table += `<tr>`
   for (props in item){ 
  table = table + `<td>` + workers[item][props] + `</td>`;
}
  table = table + `</tr>`;
}
document.write(table);



