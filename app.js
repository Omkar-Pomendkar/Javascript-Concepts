// Callback Function

// function sum(a,b) {
//     console.log(a+b);
// }


// function calculator (a,b, sumCallback){
//     sumCallback(a,b)
// }



// function Calculator (10,20,(a,b)=>{
//     console.log(a,b)
// });

// calculator(1,2,sum); 




// function Hello()
// {
//     console.log("Hello Guys")
// }

// setTimeout(Hello,5000);

// Callback Hell 

// Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.

// (Pyramid of Doom)

// This style of Programming becomes difficult to understand & Manage.


function getData(data,getNextData){
    
    // console.log("Data")
    setTimeout(()=>{
        console.log("data is ",data)
        if(getNextData) {
            getNextData();
        }
    },2000)
}

getData(1 , ()=>{
    getData(2, ()=>{
        getData(3,()=>{
            getData(4)
        });
    })
}) //2s
// getData(2) //2s
// getData(3) //2s 

// Callback Hell ko solve karne ke liye hamare pass aata hai Promise
