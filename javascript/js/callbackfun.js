// console.log("hello");
// console.log("bye");

// CallBack functions are the functions that can be passed as parameters in other functios.This is how to make a callback function//..
//CallBack hell meant having a lot of functions nested inside each other..//


// function greet(callback){
//     console.log("hii");
//     callback();
// }

// function bye(){
//     console.log("bye");
// }

// greet(bye);


// function sumNums(a,b,callback) {
//     const sum = a+b;
//     callback(sum);
// }

// function printNums(result){
//       console.log(result);   
// }

// sumNums(54,98,printNums);


// function multiplyNums(a,b,callback){
//     setTimeout(()=>{

//     })
//     const multiply=a*b;
//     callback(multiply);

// }
// function printNums(result){
//     console.log(res)
// }


// function showName(name,callback){
//     setTimeout(()=>{
//         console.log(name);
//         if(callback){
//         callback();   
//         }
//     },2000);
// }

// function showCity(city,callback){
//     setTimeout(()=>{
//         console.log(city);
//         if(callback){
//             callback();
//         }

//     },2000);
// }

//  showName("rahul",()=>{
//     showCity("delhi",()=>{
//         showName("esha",()=>{
//             showCity("goa",()=>{
//                 showName("ira",()=>{  
//                     showCity("chd");     
//             });
//         });
//     });

//     });
//  });




// //PROMISES: They are used to make callback functions easy... 
// They can also get nested in future so thats when we use async await to prevent that.. 
// When there are a lot of promises chained inside each other then they will be known as promise chain.//

// function showName(name){
//     return new Promise((resolve,reject)=>{
//         console.log("fetchingg name...");
//         setTimeout(()=>{
//             console.log(name);
//             resolve();
//         },2000);
//     })
// }

// function showCity(city){
//     return new Promise((resolve,reject)=>{
//         console.log("fetchingg city...");
//         setTimeout(()=>{
//             console.log(city);
//             resolve();
//         },2000);
//     })
// }

// showName("rahul").then(()=>{
//     showCity("delhi").then(()=>{
//         showName("esha").then(()=>{
//             showCity("goa").then(()=>{
//                 showName("ira").then(()=>{ 
//                     showCity("chd");
            
//         })
//     })
//         })
//     })
// })

// to make chaining of promises//

// function showName(name){
//     return new Promise((resolve,reject)=>{
//         console.log("fetchingg name...");
//         setTimeout(()=>{
//             console.log(name);
//             resolve();
//         },2000);
//     })
// }

// function showCity(city){
//     return new Promise((resolve,reject)=>{
//         console.log("fetchingg city...");
//         setTimeout(()=>{
//             console.log(city);
//             resolve();
//         },2000);
//     })
// }

// showName("rahul")
// .then(()=>{
//     showCity("delhi")
// })
// .then(()=>{
//     showName("esha")
//     .then(()=>{
// showCity("goa")
// })
// .then(()=>{
//     showName("ira")
//     .then(()=>{ 
// showCity("chd");
//         })
//     })
// })
//now some functions will move fast and dont wait for the others one to execute so we will use return keyword to make it wait till the other work is going on...//

// function makeDough(){
//     return new Promise((resolve,reject)=>{
//         console.log("making Dough....");
//         setTimeout(()=>{
//             console.log("Your dough is ready");  
//             resolve(); 
//     },1000);
//     });
// }

// function addToppings(){
//     return new Promise((resolve,reject)=>{
//         console.log("Adding toppings....");
//         setTimeout(()=>{
//             console.log("Toppings added");  
//             resolve(); 
//     },2000);
//     });
// }

// function addSauce(){
//     return new Promise((resolve,reject)=>{
//         console.log("Adding sauce.....");
//         setTimeout(()=>{
//             console.log("Sauce added");  
//             resolve(); 
//     },3000);
//     });
// }
// function serve(){
//     return new Promise((resolve,reject)=>{
//         console.log("serving.....");
//         setTimeout(()=>{
//             console.log("Pizza served");  
//             resolve(); 
//     },4000);
//     });
// }

// makeDough()
// .then(()=>{
//     return addToppings();
// })
// .then(()=>{
//     return addSauce();
// })
// .then(()=>{
//     return serve();
// })
//promises in case of reject: we will simply add catch//





    
// ASYNC AWAIT: This is most recent to prevent promise chain and call back hell..//

// function getData(id,name){
//     return new promise((resolve,reject)=>{
//         console.log("fetching data....");
//         setTimeout(()=>{
//             console.log(id);
//             console.log(name);
//             resolve();
//         },3000);
//     });
// }

// async function display(){
//     await getData(101,"rahul");
//     await getData(102,"ravik");
// }

// display();

// function makeDough(){
//     return new Promise((resolve,reject)=>{
//         console.log("making Dough....");
//         setTimeout(()=>{
//             console.log("Your dough is ready");  
//             resolve(); 
//     },1000);
//     });
// }

// function addToppings(){
//     return new Promise((resolve,reject)=>{
//         console.log("Adding toppings....");
//         setTimeout(()=>{
//             console.log("Toppings added");  
//             resolve(); 
//     },2000);
//     });
// }

// function addSauce(){
//     return new Promise((resolve,reject)=>{
//         console.log("Adding sauce.....");
//         setTimeout(()=>{
//             console.log("Sauce added");  
//             resolve(); 
//     },3000);
//     });
// }
// function serve(){
//     return new Promise((resolve,reject)=>{
//         console.log("serving.....");
//         setTimeout(()=>{
//             console.log("Pizza served");  
//             resolve(); 
//     },4000);
//     });
// }

// async function display(){
//     await makeDough();
//     await addToppings();
//     await addSauce();
//     await serve();
// }

// display();

//Async await is used as a prevention to promise chaining and also used to give a clear code which is easier to read..//

// function checkNum(num){
//     return new Promise((resolve,reject)=>{
//         if(num%2==0){
//             resolve("Even Number");
//         }
//         else if(typeof num!= 'number'){
//             reject("Invalid input");
//         }
//         else{
//             resolve("Odd Number");
//         }
//     })

// }

// checkNum(11)
// .then((msg)=>{
//     console.log("Success",msg);
// })
// .catch((err)=>{
//     console.log("Error:",err);
// });
// adding two catches to make it proceed even if their is an error//

// function showName(name){
//         return new Promise((resolve,reject)=>{
//             console.log("fetchingg name...");
//             setTimeout(()=>{
//                 resolve("Jay");
//             },2000);
//         })
//     }

//     function showAddress(Address){
//         return new Promise((resolve,reject)=>{
//             console.log("fetchingg address...");
//             setTimeout(()=>{
//                 reject("23d chd");
//             },3000);
//         })
//     }

    
//     function showCity(city){
//         return new Promise((resolve,reject)=>{
//             console.log("fetchingg city...");
//             setTimeout(()=>{
//                 resolve("chd");
//             },3000);
//         })
//     }

//     function showContact(contact){
//             return new Promise((resolve,reject)=>{
//                 console.log("fetchingg contact...");
//                 setTimeout(()=>{
//                     resolve("9876543210");
//                 },3000);
//             })
//         }
        
//     showName()
//       .then((msg)=>{
//         console.log(msg);
//         return showAddress().catch((err)=>{
//             console.log("procedding without address:",err);
//         });
//       })
//       .then((msg)=>{
//         return showCity();
//       })
//       .then((msg)=>{
//         console.log(msg);
//         return showContact();
//     })
//     .then((msg)=>{
//         console.log(msg);
//     })
//     .catch((err)=>{
//         console.log("error occured: Can't proceed furthur..",err)
//     });

// If we add an entire block rejected we will add catch to just that single object but if its at total function it will stop at any moment it will see reject if their is no special catch specified...//


function showId(id){
    return new Promise((resolve,reject)=>{
        console.log("fetching id...");
        resolve(id);
    })
}

function getName(name){
    return new Promise((resolve,reject)=>{
        console.log("fetchingg name...");
        resolve(name);
    })
}

function getCity(city){
    return new Promise((resolve,reject)=>{
        console.log("fetching  city...")
        resolve(city);
    })
}

showId(101).then((msg)=>{
console.log(msg);
return getName("aryan");
})
.then((msg)=>{
    console.log(msg);
    return getCity("chd");
})
.then((msg)=>{
    console.log(msg);
})



