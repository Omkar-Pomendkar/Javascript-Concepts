// Logical AND (&&) and Logical OR (||) Operator

let a = true;
let b = false;

function getName()
{
    return 'Omkar Pomendkar'
}

// If both is true then it is true else false
console.log(a && b)

console.log(b || a)

// Template Literals

let username = "Omkar"
let surname = "Pomendkar"

let prefix = "Mr"

console.log(`Hello ${prefix} ${username} ${surname} How are You`)

// Ternamry Operator
let returnAge = true;

function getageinfo(age)
{
    return `This person is ${age}  years old`
}

function getCity()
{
    return `This person is from India`
}

// if(returnAge) {
//     console.log(getageinfo(30))
// }
// else
// {
//     console.log(getCity())
// }


// condition ? Statement for True : Statement for false

// returnAge ? console.log(getageinfo(30)) : console.log(getCity())

// Array desctructuring

const id = 1;
const title = 'Product 1';
const rating = 5;


// Shorthand Property 
const product  = {
    id,title , rating
    
}

// console.log(product)


const product1 = {
    productName : 'Product One',
    productDescription : 'Product Description'

}

// Object DEscrtucturing

// const [productName,productDescription] = product1

// console.log(pr)

// Default Parameters 

function sum(numOne = 10, numtwo = 20)
{
    return numOne+numtwo
}

let result = sum(1,)
console.log(result , 'result');


// Rest & Spread Operator

// Spread
const  arr = [1,2,3,4,5,6];
const  arrtwo = [7,8,9,10];



console.log(...arr,...arrtwo)


// rest operator

function something(a,b,...c){
    console.log(a,b,c)
    return 'Hello'
}

console.log(something(1,2,3,4,5))


// Arrow Functions

const add =  ((a,b)=>{

    return a+b;
})

console.log(add(10,20))

// Array Map Method

const persons = [{
    name:'Person One',
    age : '10',
    city : 'Pune'
},
{
    name:'Person two',
    age : '20',
    city : 'Mumbai'
},
{
    name:'Person Three',
    age : '30',
    city : 'Mumbai'
}]

let extractPersonNames = persons.map((personitem,index) =>{
    return `${personitem.age} ${personitem.name}`
})

// FIlter

console.log(extractPersonNames)

let extractallpersonfromMumbai = persons.filter((personitem,index)=>{
    return personitem.city === 'Mumbai'
})

console.log(extractallpersonfromMumbai);

// some and every

const list = document.querySelector('.List')

    async function fetchlistofdata(){
        try {
            
        } catch (error) {
            
        }
    }



fetchlistofdata()
