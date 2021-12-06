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

'5' = 5
//instead do 
Number('5') === 5