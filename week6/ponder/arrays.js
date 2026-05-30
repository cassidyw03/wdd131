const steps = ['one', 'two', 'three', 'four', 'five'];

// steps.forEach(function(step) {
//     console.log(step);
// });

//  some functions

steps.forEach(showSetps);

function showSetps(step) {
    console.log(step);
}

let myList = document.getElementById('myList');

const stepsHTML = steps.map(listTemplate);

function listTemplate(step) {
    return `<li>${step}</li>`;
}

myList.innerHTML = stepsHTML.join('');



// .map() - creates a new array by applying a function to each element of an existing array. It does not modify the original array.


let grades = ['A', 'B', 'C', 'A',];
let points;

let gpaPoints = grades.map(convert);


function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

console.log(gpaPoints);



//  .reduce() - reduces an array to a single value by applying a function to each element and accumulating the result. It can be used for tasks like summing numbers, finding the maximum value, or concatenating strings. The original array remains unchanged.

let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, points) {
    return total + points;
}

console.log(totalPoints);

let gpaAverage = totalPoints / gpaPoints.length;

console.log(gpaAverage);    

// .filter() - creates a new array containing only the elements that satisfy a specified condition. It does not modify the original array.


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
          

const shortWords = words.filter(function(word) {
    return word.length < 6;
});

console.log(shortWords);

// .indexOf() - returns the first index at which a specified element can be found in an array, or -1 if it is not present. It does not modify the original array.

const myArray = [12, 34, 21, 54, 3];
const luckyNumber = 3;
let luckyIndex = myArray.indexOf(luckyNumber);
console.log(luckyIndex);

// dynamic content

let container = document.getElementById('studentContainer');

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

students.forEach(function(student) {
    let name = document.createElement('div');
    name.className = 'format';

    let html = `<span>${student.first} ${student.last}</span> <hr>`;
    name.innerHTML = html;
    container.appendChild(name);
})
          