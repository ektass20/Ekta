var isHide=false;
document.getElementById("click").addEventListener('click',function(){
    if(!isHide){
document.getElementById("clickResult").innerHTML= "Text"
    }else{
        document.getElementById("clickResult").innerHTML=""
    }
    isHide=!isHide;
})

document.getElementById("doubleClick").addEventListener('dblclick',function(){
    var element=document.getElementById("doubleClick");
    // document.getElementById("doubleClick").style.color="red";
    element.fontSize="30px"
})

//document.getElementbyId

document.getElementById("focus").addEventListener('focus',function(){
    this.style.backgroundColor="pink"
    this.style.border="4px solid red"
})


document.getElementById("mouseover").addEventListener('mouseover', function(){
    var element=getElementById("mouseover");
    element.style.color="";
    element.style.fontSize=""
})

document.getElementById("check").addEventListener('change', function(){
    document.getElementById("result").innerHTML=this.value
})

// select from drop down(working)//
document.getElementById("select").addEventListener('change', function(){
    document.getElementById("result").innerHTML="You selected : "
    +this.value
})

//create element(working)//
document.getElementById("create").addEventListener('click',function(){
    var element= document.createElement('h3');
    document.getElementById("main").appendChild(element).innerHTML="hello";
})
//create parent(working)//
document.getElementById("parent").addEventListener('click', function(){
    var element=document.createElement('h3');
    document.body.appendChild(element).innerHTML="hello";
})

//add insertadjacentHTml beforehand, afterend, afterbegin and beforebegin//
document.getElementById("html").addEventListener('click', function(){
    var element=document.createElement('h3');
    document.getElementById("main").insertAdjacentElement("afterend",element).innerHTML="hello";
})

//select by class name//
document.getElementById('style').addEventListener('click',function(){
    var listClass = document.getElementsByClassName("listItem")
    for(var i=0; i<listClass.length;i++){
        listClass[i].style.color="blue"
    }
})

//select elements by tag name//
document.getElementById('style').addEventListener('click',function(){
    var listItems = document.getElementsByTagName("h1")
    for(var i=0; i<listItems.length;i++){
        listItems[i].style.color="red";
        listItems[i].style.fontSize="30px";
    }
})

//query selector//
document.getElementById("style").addEventListener('click', function(){
    var listItems = document.querySelectorAll("h1,li,div")
    for(var i=0; i<listItems.length;i++){
        listItems[i].style.color="yellow";
        listItems[i].style.fontSize="30px";
    }
}) // to apply it to more than 1 element we use All othwerwise we use simple query selector without loop. it will automatically apply to what he finds first in the dom like heading is in the starting at html it will apply to heading, doesnt matter where ever u have written heading in the all selector.//

// First element child//
document.getElementById("style2").addEventListener('click', function(){
    document.querySelector('ul').firstElementChild.style.color="blue"
})

//last element child//
document.getElementById("style2").addEventListener('click', function(){
    document.querySelector('ul').lastElementChild.style.color="brown"
})

//previous sibling//


//adding image//
document.getElementById("image1").setAttribute("width", "200")
document.getElementById("image1").setAttribute("height", "200")

