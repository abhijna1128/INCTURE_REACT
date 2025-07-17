<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f2f2f2;
            margin: 0;
        }
        .calculator {
            width: 300px;
            background-color: #fff;
            border-radius: 15px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }
        .display {
            width: 100%;
            height: 50px;
            text-align: right;
            font-size: 1.5rem;
            padding: 10px;
            margin-bottom: 20px;
            border: none;
            background-color: #ffeb3b;
            border-radius: 8px;
            color: #333;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        .button {
            background-color: #03a9f4;
            border: none;
            font-size: 1.5rem;
            padding: 20px;
            cursor: pointer;
            border-radius: 10px;
            transition: background-color 0.3s, transform 0.2s;
            color: white;
        }
        .button:hover {
            background-color: #0288d1;
            transform: scale(1.1);
        }
        .button:active {
            transform: scale(0.95);
        }
        .button.clear {
            background-color: #ff5722;
        }
        .button.clear:hover {
            background-color: #e64a19;
        }
        .button.equal {
            background-color: #8bc34a;
        }
        .button.equal:hover {
            background-color: #689f38;
        }
        .button.operator {
            background-color: #ff9800;
        }
        .button.operator:hover {
            background-color: #f57c00;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" class="display" disabled>
        <div class="buttons">
            <button class="button clear" onclick="clearDisplay()">C</button>
            <button class="button operator" onclick="appendOperation('/')">/</button>
            <button class="button operator" onclick="appendOperation('*')">*</button>
            <button class="button operator" onclick="appendOperation('-')">-</button>

            <button class="button" onclick="appendNumber('7')">7</button>
            <button class="button" onclick="appendNumber('8')">8</button>
            <button class="button" onclick="appendNumber('9')">9</button>
            <button class="button operator" onclick="appendOperation('+')">+</button>

            <button class="button" onclick="appendNumber('4')">4</button>
            <button class="button" onclick="appendNumber('5')">5</button>
            <button class="button" onclick="appendNumber('6')">6</button>
            <button class="button equal" onclick="calculate()">=</button>

            <button class="button" onclick="appendNumber('1')">1</button>
            <button class="button" onclick="appendNumber('2')">2</button>
            <button class="button" onclick="appendNumber('3')">3</button>
            <button class="button" onclick="appendNumber('0')">0</button>
        </div>
    </div>

    <script>
        let currentInput = '';
        let currentOperation = '';
        let previousInput = '';

        function appendNumber(number) {
            currentInput += number;
            document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`;
        }

        function appendOperation(operation) {
            if (currentInput === '') return;
            if (previousInput !== '') {
                calculate(); // Calculate the previous operation before appending a new one
            }
            currentOperation = operation;
            previousInput = currentInput;
            currentInput = '';
            document.getElementById('display').value = `${previousInput} ${currentOperation}`;
        }

        function calculate() {
            if (previousInput === '' || currentInput === '') return;
            let result;
            let prev = parseFloat(previousInput);
            let current = parseFloat(currentInput);

            switch (currentOperation) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        alert("Cannot divide by zero");
                        return;
                    }
                    result = prev / current;
                    break;
                default:
                    return;
            }

            currentInput = result.toString();
            currentOperation = '';
            previousInput = '';
            document.getElementById('display').value = currentInput;
        }

        function clearDisplay() {
            currentInput = '';
            previousInput = '';
            currentOperation = '';
            document.getElementById('display').value = '';
        }
    </script>
</body>
</html>
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

**Arrow function (ECMA script)
--Shortest and modern way to create a function in js
--Need not use function keyword
--Should use arrow to denote arrow function
--If there is only oneparameter then the round bracket ofr the parameter is optional in this function
--if there is only one statement in the body then the flower bracjket is also optional

**callback function (ECMA )
Default parameter:(introduced in ECMA script)
when we try to call a function a forget a argument and thta time if u wanna pass asomething whenevr argument is not defined then use defualt is used whe we have not passed the argument

Nested function: function inside another function

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
->querySelectorAll() - list of all the elements

Predefined functions available in javascript :
 ->getAttribute() - we can get the value of a particular element
 -> can set the value of a attribute for a particular element

