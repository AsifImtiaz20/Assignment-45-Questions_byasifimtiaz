/*44. Sandwiches:  
Write a function that accepts an array of items a person wants on a sandwich. The function 
should have one parameter that collects as many items as the function call provides, and it should 
print a summary of the sandwich that is being ordered. Call the function three times, using a different 
number of arguments each time.*/

// Array as a parameter

function mySandwiches (...items: string []){
return `I want Sandwich of ${items}`;

}

let collection1 = mySandwiches("Cheeze", " Lettuce", " Ham") // can add as much as you can
let collection2 = mySandwiches(" Turkey", " Swiss");
let collection3 = mySandwiches(); // Without any argument

console.log(collection1);
console.log(collection2);
console.log(collection3);
