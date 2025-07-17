// if(true){
//     //var x=10;
//     var x=10;
//     console.log("x:",x);
//     let=20;
//     console.log("x:",x);
// }
// //console.log("x:",x);

// let x=10;
// console.log(x);
// console.log(typeof(x));
// x="ABC";
// console.log(x);
// console.log(typeof(x));

// let x=true;
// let y=null;
// let z;
// let a=1174981382305893658179374896327148963491802468192741389549873859163n;

// console.log(typeof(x));
// console.log(typeof(y));
// console.log(typeof(z));
// console.log(typeof(a));

// let age=20;
// (age>20)?console.log("Eligible"):console.log("Not Eligible");


// let marks=55;

// if(marks>=90)
// {
//     console.log("Grade:A+");
// }
// else if(marks>=80&&marks<90)
// {
//     console.log("Grade A");
// }
// else if(marks>=70&&marks<80)
// {
//     console.log("Grade B");
// }
// else if(marks>=60&&marks<70)
// {
//     console.log("Grade C");
// }
// else{
//     console.log("Fail")
// }

// let choice=2;

// switch(choice){
//     case 1:console.log("Case 1 Executed..");
//            break;

//     case 2:console.log("Case 2 Executed..");
//            break;

//     case 3:console.log("Case 3 Executed..");
//            break;

//     case 4:console.log("Case 4 Executed..");
//            break;

//     default:console.log("Please Enter valid Choice")
// }

//write a js program that is going to check whether its a palindrome or not 

// let x=121;
// let temp=x;
// let rev=0;

// while(temp>0){
//     let rem;
//     rem=temp%10;
//     rev=rev*10+rem;
//     temp=Math.floor(temp/10);
// }
// if(x==rev){
//     console.log("It is a palindrome");
// }
// else{
//     console.log("Not a palindrome")
// } 


//write a program to generate all the palindrome numbers from 1 to 1000

// for(let i=1;i<=1000;i++){
//     let temp=i;
//     let rev=0;

// while(temp>0){
//      let rem;
//      rem=temp%10;
//      rev=rev*10+rem;
//      temp=Math.floor(temp/10);
//  }

//  if(i==rev){
//      console.log("i:",i);
// }
// }

// Write s program to check whther the given number is a prime number or not

// let num=50;
// flag=true;
// for(let i=2;i<num/2;i++){
//     if(num%i==0){
//         flag=false;
//         break;
//     }
// }
//     if(flag==true)
// {
//     console.log("is a prime");
// }
// else{
//     console.log("Not prime");
// }

// for(let j=1;j<=1000;j++){
//     flag=true;
// for(let i=2;i<=j/2;i++){
//     if(j%i==0){
//         flag=false;
//         break;
//     }
// }
//     if(flag==true)
// {
//     console.log(j);
// }
// }

// let num=new Array(10,20,30,40);
// console.log(num);

// let data=[10,20,30,10,20,30,"ABC",true]
// data[1]=100;
// console.log(data);
// // console.log(data[3]);
// console.log(data.length)

// for(let i=0;i<=data.length-1;i++){
//     console.log(data[i]);
// }
// for(let x of data){
//     console.log(x);
    
// }

// data.push(200);
// console.log(data);

// data.unshift(500);
// console.log(data);

// data.pop();
// console.log(data);
// data.shift();
// console.log(data);
// console.log(data.indexOf(10));
// console.log(data.lastIndexOf(10));

// let data=[90,60,40,70,10,80,20,30,50]
// console.log(data);

// // data.sort();
// console.log(data);
// data.reverse();
// console.log(data);

let data = [10, 200, 300, 210, 1, 100, 5];

for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j < data.length; j++) {
        if (data[i] > data[j]) {
            // Swap data[i] and data[j]
            let temp = data[i];
            data[i] = data[j];
            data[j] = temp;
        }
    }
}

console.log(data);


