// Async Await  help us to make simple asynchronus 

// async function always retrun Promise

// async function myFunc(){...}

// await pauses the execution of its surrounding aync function until the promise is settled


// async function hello()
// {
//     console.log("hello")
// }


async function getData(dataId){
    return new Promise ((resolve , reject)=>{
        setTimeout(()=>{
            
        console.log("data",dataId)
        resolve("success");
        },2000)
    });
}


// async function getWetherData(){

//     await api() // 1st call
//     await api(); // 2nd call
// }

// Async -await

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);

}