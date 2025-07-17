//name function 
// function display(){
// console.log("Good AFternoon");
// console.log("How are you");
// console.log("Welcome to javascript class");
// }
// display();

// console.log(".......After 10 minutes");
// display();
// console.log(".......After 20 minutes");
// display();
// console.log(".......After 30 minutes");
// display();

// function greet(name){
//     console.log("Welcome:",name)
// }
// greet("ajay");
// greet("shree");

// function add(x,y){
//     var res=x+y;
//     return res;
// }
// let ress=add(2,5);
// console.log("result is :",ress);

//anonymous function 
// let dispaly=function(name){
//     console.log("welcome:",name);
// }
// dispaly("ram");

// let res=function(x,y)
// {
//     return x+y;

// }
// console.log("result",xres(10,20));

//arrow function
// let display=(name)=>{
//     console.log("Welcome:",name);
// }
// display("shree");

//without round brackets
// let display=name=>{
//     console.log("Welcome:",name);
// }
// display("shree");

//without curly braces
// let display=name=>console.log("Welcome:",name);
// display("shree");

// let res=(x,y)=>x+y;
// console.log("Result:",res(30,50));

// let d=setTimeout((name)=>{
// console.log("Welcome:",name)
// }, 5000,"shree");
// d;

//callback function
// function greet(name,callback){
//     console.log("hello!",name);
//     callback();
// }
// function saybye()
// {
// console.log("bye!");
// }
// greet("sachin",saybye); //passing a function as an aargument to  greet function

//default parameter
// function greet(name="Guest"){
//     console.log("Welcomne:",name);
// }
// greet("shree")
// greet("Abhi")
// greet();

//object
// let emp={
//     id:111,
//     name:"shree",
//     city:"bantwal"
// }
// console.log(emp);
// console.log(emp.name);
// console.log(emp["city"]);
// emp.salary=500000;
// console.log(emp);

// for(let key in emp){
//     console.log("key:"+key+"value:"+emp[key]);//cannot use dot notation here 
// }

//destructing objects
let emp={
     id:111,
     name:"shree",
     city:"bantwal"
 }
 let{id,name,city}=emp;
 console.log(id);
 console.log(name);
 console.log(city);
 