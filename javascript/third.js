// export function add(x,y)
// {
//     return x+y;
// }
// // let res=add(10,20);
// // console.log("Result:",res);
// // export function sub(x,y){
// //     return x-y;
// // }
// // export function product(x,y){
// //     return x*y;
// // }
// // export function div(x,y){
// //     return x/y;
// // } 

// //if there is only one function in the file
// export default add;

//synchronous and asynchronous programmming

// console.log("Program started..");

// setTimeout(()=>{
// console.log("Fetching Data from an API");
// },5000);

// console.log("Closing our Application...");

// const datas=[
//     {name:"Abhi",Profession:"software developer"},
//     {name:"Shree",Profession:"software Tester"}

// ];
// function getDatas(){
//     let output="";
//     datas.forEach((data,index)=>{
//         output+=`<li>${data.name}</li>`
//     })
//     document.body.innerHTML=output;
// }
// getDatas();

// const datas=[
//     {name:"Abhi",profession:"software developer"},
//     {name:"Shree",profession:"software Tester"}

// ];
// function getDatas(){
//     setTimeout(()=>{
//     let output="";
//     datas.forEach((data,index)=>{
//         output+=`<li>${data.name}-${data.profession}</li>`
//     })
//     document.body.innerHTML=output;
// },3000);
// }
// function createData(newData,callback){
//     setTimeout(()=>{
//         datas.push(newData);
//         callback();
//     },5000);
// }

// createData({name:"Ajay",profession:"databsae admin"},getDatas);
// getDatas();


//promise               
// const datas=[
//     {name:"Abhi",profession:"software developer"},
//     {name:"Shree",profession:"software Tester"}

// ];
// function getDatas(){
//     setTimeout(()=>{
//     let output="";
//     datas.forEach((data,index)=>{
//         output+=`<li>${data.name}-${data.profession}</li>`
//     })
//     document.body.innerHTML=output;
// },3000);
// }
// function createData(newData){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         datas.push(newData);
//         let error=false; // if given true it will return error
//         if(!error){
//             resolve();
//         }
//         else{
//             reject("Some error occured");
//         }
//     },5000);
//     })
// }

//createData({name:"Ajay",profession:"databsae admin"}).then(getDatas).catch(err=>console.log(err));
 
// //asynch awake

// const datas=[
//     {name:"Abhi",profession:"software developer"},
//     {name:"Shree",profession:"software Tester"}

// ];
// function getDatas(){
//     setTimeout(()=>{
//     let output="";
//     datas.forEach((data,index)=>{
//         output+=`<li>${data.name}-${data.profession}</li>`
//     })
//     document.body.innerHTML=output;
// },3000);
// }
// function createData(newData){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         datas.push(newData);
//         let error=false; // if given true it will return error
//         if(!error){
//             resolve();
//         }
//         else{
//             reject("Some error occured");
//         }
//     },5000);
//     })
// }
// async function start()
// {
// await createData({name:"Ajay",profession:"databsae admin"}); //first it will wait until createData is executed and then getDatas is executed so time of both will be added
// getDatas();
// }
// start();

// let name="Abhijna";
// let city="Puttur";
// let profession="Student";

// console.log("Welcome to Java Script session. My Name is :",name,"I am from :",city,"My profession is:",profession);
// console.log(`My name is :${name}. I am from ${city} \nMy profession is ${profession}`); //template variables

//destructuring of an array
// let num=[10,20,30,40];
// let[x,y,z,a]=num;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(a);

//spread operators
// let num=[10,20,30,40];

// let sec=[...num,50,60];
// console.log(num);
// console.log(sec);

//rest operator
// function display(...name){
//     console.log(name);
// }
// display("Abhi","Shree","krithika");

// function sum(...num){
//     return num.reduce((a,b)=>a+b);
// }
// console.log(sum(1,2,3,4,5,6,7,8,9));

//class
// class emp{
//     constructor(name){
//         this.name=name;
    
//     }
//     greet(){
//         console.log(`Welcome :${this.name}`);
//     }
// }
// let emps=new emp("abhi");
// let emps1=new emp("shree");
// let emps2=new emp("krithikaa");
// emps.greet();
// emps1.greet();
// emps2.greet();

//Map 
// let emp=new Map();
// emp.set("id","111");
// emp.set("name","abhi");
// emp.set("city","Puttur");

// console.log(emp.get("id"),emp.get("name"),emp.get("city"));

//set
let set=new Set(); // duplicate elements are not added in set

set.add(10);
set.add(20);
set.add(30);
set.add(20);

console.log(set);

