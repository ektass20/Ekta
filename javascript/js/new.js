// function check(){
//     var a=document.getElementById("ff").value;

//     if( a%2==0){
//         document.getElementById("pp").innerHTML="Number is even"
    
//     }
//     else{
//         document.getElementById("pp").innerHTML="Number is odd"
//     }
    

// }

function daycheck(){
    var days=document.getElementById("first").value;
    var output=document.getElementById("para");
    switch(days){
        case "1":
        output.innerHTML=" Its Monday";
        break;
        case "2":
        output.innerHTML=" Its Tuesday";
        break;
        case "3":
        output.innerHTML=" Its Wednesday";
        break;
        case "4":
        output.innerHTML=" Its Thursday";
        break;
        case "5":
        output.innerHTML=" Its Friday";
        break;
        case "6":
        output.innerHTML=" Its Saturday";
        break;
        case "7":
        output.innerHTML=" Its Sunday";
        break;
        default:
            output.innerHTML= "Its not a day";

    }
    document.getElementById("first").value=" ";
}
