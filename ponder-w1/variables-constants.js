const PI = 3.14159;
let radius = 5;
let area = PI * radius * radius;

console.log(area);

radius = 20;
area = radius * radius * PI;

console.log(area); 

const one = 1;
const two = '2';

// type coersion! Cool
let result = one * two;
console.log(result); 

result = one + two;
console.log(result);
// the + operator is used for both addition and string concatenation, so it treats the number as a string and concatenates them instead of adding them together

result = one + Number(two);
console.log(result); 
// this will convert the string '2' to the number 2 and then add it to 1, giving us 3



// Scope!
let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    
 