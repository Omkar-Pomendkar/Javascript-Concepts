// // Promises
// Promise is for Eventual Completion of Task. It is an object in JS

// It is a solution to callback hell

// Resolves and Rejected are callbacks provided by JS

// API gives us promises and we handle Promises

// Promises has 3 States
// 1) pending
// 2) Resolve 
// 3) Rejected

// let promise = new Promise ((resolve,reject) =>{


    function getData(dataId , getNextdata){
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                console.log('data',dataId);
                resolve("success");
                if(getNextdata){
                    getNextdata();
                }

            },2000)

        })
    }
    console.log("I am s promise")
    // resolve("Success")
    reject("some error")
// })


// getData(10)

// Promises ko use karne ke liye hamare pass 2 function hote hai
// 1) .then()   -  fulfill
// 2) .catch()  -  error 