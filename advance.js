// Callback Promises and Async-Await
// async await >> Promise chains >> Callback Hell

// What is Synchronus ?
// Synchronus means the code runs in a particular sequqnce of  instructions given in the program Each instruction waits for thr previuos instructions to complet its execution.



// Asynchronus Programming
// Due to Synchronus programming , sometimes imp instructions get blocked due to come previous instructions, which casue a delay in UI
// Asynchronus code execcution allows to execute next instructions immediately and doesn't bloc the flow


console.log("One")
function hello(){

console.log("Two")
}
setTimeout((()=>{
    console.log("Hello Guys")
}),5000)
 
hello()
console.log("Three ")
console.log("Four")


// Set Timeout is a function which executes code when we decide

// What is Callback?
// Passing a Function as argument or calling a function inside a function is called Callback Function