

//the length of the array matters


const numbers = [1,2,3,4,5,6,7,8,9];


let num = numbers.filter((number)=>{ return number < 6});


console.log("testing filter ",num);


// string array
// math floor math.random
//myArray.length gets the length of array 
//math.random * lenght -1 

//for the filter you have to set initial value 
//my array[randomIndex] access the element at the random index


const thoughts = [{title:"First Post", content: "Here we are , not here we are"},
    {title:"Second Post", content: "Here we are , not here we are"},
    {title:"third Post", content: "Here we are , not here we are"},
    {title:"fourth Post", content: "Here we are , not here we are"},
    {title:"fifth Post", content: "Here we are , not here we are"},
    {title:"six Post", content: "Here we are , not here we are"},
    {title:"seven Post", content: "Here we are , not here we are"},
    {title:"eight Post", content: "Here we are , not here we are"},
    {title:"nine Post", content: "Here we are , not here we are"},
    {title:"tenth Post", content: "Here we are , not here we are"},
    {title:"eleven Post", content: "Here we are , not here we are"},
    {title:"twelveth Post", content: "Here we are , not here we are"},
    {title:"thirteen Post", content: "Here we are , not here we are"}



];

let thoughstLength = thoughts.length;
console.log("length of thougths ",thoughstLength)

const thoughtsFilter = thoughts.filter((thought)=>{
return thought.title.includes("n");
})


// string array
// math floor math.random
//myArray.length gets the length of array 
//math.random * lenght -1 

//for the filter you have to set initial value 
//my array[randomIndex] access the element at the random index
let arrayofFive = [];
let randNumbA =Math.floor(Math.random() *5);
  
let randNumbB =Math.floor(Math.random() *thoughstLength);
let randNumbC =Math.floor(Math.random() *thoughstLength);
let randNumbD =Math.floor(Math.random() *thoughstLength);
let randNumbE =Math.floor(Math.random() *thoughstLength);
arrayofFive.push(randNumbA,randNumbB,randNumbC,randNumbD,randNumbE);
console.log("here is the array of five  : ",arrayofFive);




let randNumb = Math.floor(Math.random() * thoughstLength) +1;



console.log("thoughts length random number is ",randNumb);

let thoughtsMap = thoughts.map((thought)=>{
return thought.title;

})

console.log("thoughts mapped",thoughtsMap)
console.log("thoughts filter here for topic ",thoughtsFilter );