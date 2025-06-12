//Document Object Model also known as DOM Notes..//

//How to select html using dom: this can be done by using select id method//
document.getElementById("idofthelement");//this is how we can access any single attribute. we should not give same id to multiple values it should be unique. for same things we can give class.//

//To select by class we can use//
document.getElementsByClassName("nameofclass");

//to select by tag we can use//
document.getElementsByTagName("nameoftag");

// the best is to access everything with query selector//
//How to acces elements in js using query//

document.querySelector("nameoftheeltobeaccessed");// for classes accessing we have to write a dot in front and for ids accessing we have to include a # in the front. normal query selector is used to access only on element//

//to access a lot of elements in the code we use queryselectorAll.//

document.querySelectorAll("nameoftheeltobeaccessed");// we can include this into var and then access that var through console.log.//

"DOM MANIPULATION PROPERTIES";
//Their are a lot of peoperties, some of them are as follows.//

//tagName: returns tag for elements or nodes.//
//innerText: returns the text content of the element and children nodes//
//innerHTML: gives same as inner Text but with html//
//textcontent: returns textual content even for hidden elements.//

"DOM HEIRARCHY";
//PARENT: Highest in the dom structure like window//
//children: elements coming after parent//
//Sibling: nodes on the same level as each other,side by side are called siblings.//



