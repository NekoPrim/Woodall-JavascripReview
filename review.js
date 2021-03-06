/*
Jargon!!

. - dot
() - parentheses, parens
[] - square brackiets, square braces
{} - curly braces, curlies
< - less than, bird, angle brackets
> -  greater than, gator, angle brackets
/ - slash, forward slash, whack
\ - backslash, backwhack
! - not, exclamation point, bang
# - pound, hash, octothorp
* - star, asterisk, splat
|| - or operator, pipes
&& - and operator
$ - bling, cash money, dollar sign, jQuery
NaN - Not a number, bread

*/

/*

Primitive Data Types

    Strings     'taco'
    Number      18
    Boolean     true / false
    Underfined  undefined
    Null        null

Complex Data Types

    Arrays      [1, 2, 3], ["hello", "world"];
    Objects     {firstName: "Dez"};

*/

console.log('js');

let nothing = null;

// Always use camelCase

let firstName = 'Dez';

// <div class="first-name">Dez</div> (ka-bob case: used sometimes for html)

// Other nameing conventions
// Snake_case
// Kebob-case
// PascalCase or UpperCamelCase
// SCREAMING_CASE


// bad example object
let thing = {
    x: 'Dez',
    y: 'Quade',
    z: 34
};

// good example object

let thePersonWhoICurrentlyAm = {
    firstName: 'Dez',
    lastName: 'Quade',
    age: 34
};

function aFunctionThatTakesTwoNumbersAndReturnsTheirSum(a, b) {
    return a + b;
}

/*

Expressions

Operators
    A way to act on a value

*/

// An expression evaluates to a single value
7 + 3;          // 10
sum(7, 3);      // 10

let aMediumSizeNumber = 7 + 3;
let anotherNumber = sum(7, 3);

console.log('my fav number is', anotherNumber);
console.log('my fav number is', sum(7, 3));

// Increment operator

anotherNumber ++;                       // 11
// Exact same as
anotherNumber = anotherNumber + 1;      // 11


// Addition assignment Operator Number
anotherNumber += 10;                    // 22
anotherNumber = anotherNumber + 10;     // 32

let myNumber = 5;
myNumber += 3;
myNumber -= 3;
myNumber *= 3;
myNumber /= 3;
myNumber % 2;                           // usually used for checking if a number is even. how many times does 2 go into myNumber and return what is left over

function isEvan(number) {
    return number % 2 === 0;
}

let name = 'Dez';
name += 'Quade';                        // Dez Quade
name = name + 'Quade';                  // Dez Quade Quade

// THE TRICKY PLUS OPERATOR
// Does two things;
// - Adds two number together (2 + 3 = 5)
// - Joins two strings together (concatenation) ('a' + 'b' = 'ab')

// Anti-values
// Values that are not values

NaN;        // not a number
            // usually a type coervion error, eg. Number('abc')

//Intentionally nothing

null;

// Just nothing
// Function with no returb actually return underfined
undefined;

// a variable can also be just be just not defined (actually, not declared)
// Uncaught ReferenceError: variable 'whatever' is undefined

[
    {
        firstName: 'Dez',
        lastName:'Quade',
        cohort: 'Woodall'
    },
    {
        firstName: 'Joe',
        lastName: 'Anderson'
    }
]

let cohort = 'Woodall';

if (cohort) {
    console.log(`Welcome to ${cohort}`);
}

/*

CONDITIONALS

*/

if (someBoolean) {
    // then, do this
}
else {
    // Do this, if nothing else is truthy
}

/*

Conditional Operators

*/

if (myNumber > 8) {
    // Do whatever...
}

/*

<   more than
<=  greater than or equal to
>   less than
>=  less than or equal to 
=== triple equals (exactly equals)
==  double equals (coerce types, then compare) (try not to use)
!== not equals
!=  not equals (coerce types)

*/

/*
'5' = 5
//instead do 
Number('5') === 5

*/

/*

Array and loops!

An array is a list of things

90% of the time you will need to loop through an array

*/

let beverages = [
    'bubly',
    'jasmine tea',
    'water',
    'coffee'
];

/*

kinds of loops:
    for...of
    for...in
    for
    while

*/

for (let beverage of beverages) {
    console.log(`I am drinking ${beverage}`);
}

// console.log(`This is beverage number ${i + 1}`);

for (let i = 0; i < beverages.length; i ++) {
    let beverage = beverages[i];
    console.log(`I am drinking ${beverage}`);
}

for (let i = 10; i <= 100; i +5) {
    console.log('counting up...', i);
}

// for...in loop
for (let i in beverages) {
    let beverage = beverages[i];
    console.log(`I am drinking ${beverage}`);
}

// while is usually used if you want to keep running continuously or until a condition is finally met

let forecast;
while (forecast.windSpeed < 50) {
    forecast = goAskTheWeatherService();
}

sendAMessageToMortensenToStopTheCrane();

let isGameRunning = true;
while (isGameRunning) {
    nextTick();
}

$('#stopButton').oc('click', function() {
    isGameRunning = false;
})

/*

Functions!!!!!

*/

function generateSong(words, notes) {
    let song = `
    ${words} ${words} ${words}
    ${notes} ${notes} ${notes}`;
    return song;
}

let words = "hello hello"; //this words is separate from the words in function

let mySong = generateSong('hey hey hey', 'C F G');
console.log('check out my song', song);

// function declaration
// this is hoisted
function sum(n1, n2) {
    return n1 + n2;
}

// function expression
// this will not run until code gets to it
let answer = function(n1, n2) {
    return n1 + n2;
};

// Create an anonymous function
// and assign it to a variable called sum
function(n1, n2) {
    return n1 +n2;
}

function sayHell() {
    console.log('hell');
}

function callMeTwoTimes(fn) {
    fn();
    fn();
}

// Common pattern in javascrip
// "Callback function"
callMeTwoTimes(sayHell);

callMeTwoTimes(function() {
    console.log('hell');
})

$('button').on('click', onButtonClick);

function onButtonClick() {
    console.log('stop clicking me');
}

$(document).on('ready', onReady);

function onReady() {
    console.log('so ready');
}

$(document).on('ready', function(){
    console.log('so ready');
});

Number('5');        // 5

let notes = ['do', 're', 'me'];
// this is called a "method"
notes.push('fa');       //add to end
notes.pop();            //remove from end
notes.shift();          //remove from front
notes.unshift('la');    //add to front

notes.join(', ');       //shows array on one line
notes.split(', ');      //