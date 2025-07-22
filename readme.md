
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

Day 5:
**Import and export:
export from the file which has the functions and import it into the file where u wanna perofrm or call the functions
--if there is only one function in the file then at the end type - export default functionname;

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
Map - collection of data where we can store data as keys and values
set - cannot store duplicate elements in a set only unique elements are stored in it
*********************************************************************************************************************************************

Day 6:
React:
--Javascript library for building user interface
--primarily created and maintained by facebook
--It allows developers to create large web application that can update and render efficiently in response to data changes
--Follows component based architecture where user interface is broken into small and reusable interface

>>component is a small part of inteface and is reusable
javascript function or class is also component 
Using components can break our app into small parts and reuse

Key features:
->Declarative UI: decsribe what we want,the react updates the ui whne the data changes.
->Component based: Encapsulate the logic and layout in a reusable component.
->Virtual DOM: React uses virtual Dom to optimize the update and minimize direct manipulation.
->Unidirectional Dataflow: Data is flown only in one direction from parent to child.
->Strong ecosystem: large number of lib tools and community suppport.

**Creating React application using CRA tool:
CRA tool -create React app
npx - node package executer
when building react web based application two lib are req -  react adn react-dom
when building react mobile application -  react and react-native
node modules - All the libraries required to run the project are available in node modules 
public folder consists all the static assests available by root url
In src foledr we can create ouyr own component
Inside manifest file progessive web app features
index.js is the entry point of the react application
react dom contains a div nd inside it an app component
React.Strictmode - for security purposes
npm start is req
package.json - list of all dependencies and metadata or scripts of the project
build file consists of html css and js file for the respective component because brwoser will not understand react etc
In app.js we cant return multiple elements so to resolve that we can wrap it inside a component

**Creating React application using vite tool:
Only the dependencies adn loib required now are installed by vite tool 
This tool is faster
In vite tool node modules are not installed on its own if we need to intall then we need to give npm install
Using dev because the package.json has dev in the script
There is no index.js file in vite tool so considering main.jsx as index.js file.
main.jsx is the entry point for the vite react application
No need for React-dom because evrything is stored in a Virtaul-dom
npm run dev
jsx javascript with html or xml



In react we have 2 types of components:
-> functional component - component created by a functional keyword
                          modern way to create a compoennt
-> class component - component created with the help of class
                    older way to create a component
******************************************************************************************************************************************
Day 7:

Props:
--short form of properties
--if we need to pass the data from one component to other then props is used.
--component is passed from parent to child
--props are read-only
--props cant be changed inside the child component inside child compenent only read only is possible
--props helps make component reusable i.e we can use same component multiple times with different data 
--It can be of any type string numner array object function etc

 Prop destructuring:
 Reading the value from props and stroing in some variable

 In react we cannot use variable to store and track the value

 State is a container or  to store something and whose values can be tracked by react
 built in object in react  that lets our component remember value over time
********************************************************************************************************************************************

Day 8:
Event :
action performed on browser is event
keypressed,buttnonclick 

changing input event:



onKeyUp- whne the key pressed is released the event occurs
onkeyDown - when we press the key event occurs
