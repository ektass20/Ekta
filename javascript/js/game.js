function guessgame(){
    var userguess= document.getElementById("num").value;
    const number=33;

    if( userguess==number){
        alert("Congratulations🎉, u guessed it right🫡");
    }
    else if( userguess>number && userguess-number > 10){
        alert("Too high, Try again🙂");
    }
    else if( userguess>number && userguess-number < 10){
        alert(" A little high, Try again👍🏻");
    }
    else if( userguess<number && number-userguess > 10) {
        alert(" Too low, Try again🙂");
    }
    else if( userguess<number && number-userguess < 10) {
       alert("a little low but close👍🏻");
    }
} 


