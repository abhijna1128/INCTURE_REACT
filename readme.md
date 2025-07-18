
Day2:
CSS:
**Three types of CSS:
>>inline
>>internal
>>External

**There are multiple sleectors:
-> *
-> elemets
-> #id
-> .class

grouping multiple elements
h2,p{
    color: red;
}

**BOX MODEL:
It is a rectangular shapes model
there are 4 layers:(starting from the core or the middle its listed as follows)
--content: content want we want to display
--padding: space between border and content
--border: border is the line around padding and content
--margin: outside space of the border

**UNits in CSS
>> px - fixed size
>> % - relative size
>> em - relative to font size
>> rem - relative to root fontsize

**Layout in CSS:
Layout is how elements are placed or arranged on our webpage
>> display property:
--block: behaves like block takes the entire width
--inline: no width no height
--infinite-block: it is inline but supports block using width and height
--none: hide the element completely
--flex: turns the element into flex conatiner
--grid: turns the elemnt to a grid container
>>Positioning in CSS:
--static - default normal flow
--relative - related to its ortiginal Positioning
--absolute - nearest to its position ancestor
--fixed - should be fixed when we scroll the screen
--sticky - scroll normally but sticks to a position whne its reaches a center point
>>Flex-box:
1 dimensional layout system to align item in row or column easily
--display: flex
--flex-direction: 
--justify content - align contents horizontally
--align items - alogn items vertically
--flex-wrap - wrap items into the next line
>>grid:
--display: grid
-- grid-template-columns: 1fr 1fr 1fr;
--gap - 

*****************************************************************************************************************************************

Day 3:
Javascript:
Programming lang which makes our webapage dynamic

**variable:
Container to store the values
>>var keyword:
--In java variable can be created using var keyword
--var keyword has global scope
--var keyword can be redeclared 

>>let and const keyword:(ECMA )
--In modern approach can create it using let and const keyword
--let keyword has block or functional level scope
--let cannot be redeclared
--cannot reassign value to a const variable

ECMA script version is the version of javascript

**Datatypes:

>>Primitive datatypes:
number - any number decimal or integer
String - any text
boolean - store any true or false condition
undefined - variable is decalred but not initialised
null - varian=ble with no value
BigInt - laarger number beyond normal number
Symbol -

>>Reference datatype:
Array - 
Object - 
Function - 

**Operators in javascript:

>>Arithmetic Operator- performing arithmatic operations
>>Assignment operator - assign the values(=,+=,-=,*=)
>>Comparision Operator - 
>>Logical Operator
>>Unary Operator
>>Ternary Operator
>>bitwise Opertor etc.

**Control Statement:

>>Conditional Statement:
--if
--if... else
--if...else if ...else
--switch

>>Looping statements:
--for loop - when the number of iterations are known in the beginnning 
--while loop 
--do while loop

break - go out of the loop
continue - skips the particular iteration

**Array:
In js its not a that which stores the similar datatypes elements
while sorting its not going to sort directly its going to convert into a string and then compare.

***************************************************************************************************************************************

Day 4:

Function:
--A group of code or statements that is grouped together to perform or execute specific task
--code resuability
There are two types of functions :
--name functions which have function names 
--anonymous functions which do not have function names

->Arrow function (ECMA script)
--Shortest and modern way to create a function in js
--Need not use function keyword
--Should use arrow to denote arrow function
--If there is only oneparameter then the round bracket ofr the parameter is optional in this function
--if there is only one statement in the body then the flower bracjket is also optional

->callback function (ECMA )


->Default parameter:(introduced in ECMA script)
when we try to call a function a forget a argument and thta time if u wanna pass something whenevr argument is not defined then use defualt is used whe we have not passed the argument

->Nested function: function inside another function

**Objects:
collection of keys and values pair
object starts with a curly braces
to access those key value pairs can use two methods:dot notation and bracket notation
for in loop for objects and for of loop for arrays

->Destructuring of Object:(ECMA)
Extracting value from an object and storing in a variable

**DOM:
Tree like structure
programming interface provided by the browser to allow js to to interact and manipulate the html and css element.

>>DOM selectors:
Method in js thta help us to sleect a html element from webpage,so that we can read ,modify and delete the element.
to get the reference of dom element
5 types of DOMselectors:
->getElementById() - select a particular element
->getElementsByClassName() - html collection of elements
->getElementsByTagName() - html collection 
->querySelector()- going to select first matching element
->querySelectorAll() - returns Nodelist of all the elements

Predefined functions available in javascript :
 ->getAttribute() - we can get the value of a particular element
 ->setAttribute() - can set the value of a attribute for a particular element
*********************************************************************************************************************************************

Day 4:
**Import and export:
export from the file which has the functions and import it into the file where u wanna perofrm or call the functions
--if there is only on function in the file then at the end type - export default functionname;

**Asynchronous and synchronous programming:
->synchronous :
At a time one task can be prerformed in a systematic order from top to bottom because is a single
->Asynchronous :
if we want to execite multiple tasks at same time then this programming can be used.

backtick operator (``) was introduced in ECMA
to write anytihng in the webpage - .innerHTML

**Promise:
promise represents a value that may be available now, later or never
It has 3 states:
->Pending - later - waiting to get the value
->Resolved - now - data is available
->Rejected - never - got some errors

asynch - make a function return a promise
await - first promise should be resolved and thne whatever is there is going to return 

**ES6(ECMA script 2015):
Javascript version it gives how to write code
->let and const
->arrow function
->Template literals: embedd variables inside a string
->Array Destructuring: same as object destructuring
->spread Operators - if we want to print a new array with same elements as the before array and also add new two elements(its denoted by 3 dots ...)
destructuring of array elements
-> for in and for of
-> class
->promise 
->async await
->import export
->Rest operator -  is used collect multiple elements into a single array or object(represented by 3 dots (...))
->Map & set: 
Map - collection of data where we can store data as keys adn values
set - cannot store duplicate elements in a set only unique elements are stored in it
