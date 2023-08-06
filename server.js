//****ARRAY */
// 1. Declaration and intializtion of array
// const cars =["TATA", "MAHENDRA", "BMW"];
// cars[3]= "AUDI"
// console.log(cars);
// function user() {
//     var name, age, city ;
//     console.log("Enter your details:");
// }
// user()


// call by value and refrence in javascript
// var x = 50;
//  var y = x;

// //  y = 25;
//  console.log('x value: ' + x);
//  console.log('y value: ' + y);

//call by referance
// Array
// var a= [4 ,6];   /*a is an object*/
// b=[789]    /*b is also an object*/
 
// b.push(25);    
// console.log(b);

// Object
// const obj={
//     name: "sagar",
//     address:"chennai"};

// const obj2= obj;
// obj2.name = "lavan";

// console.log(obj2);

//nesting function

// function bike(x, y) {
//     console.log('this is my favoriet bike' + x );
//     model(x,y);
// }
// function model(x, y) {
//     console.log('i love this model R-' + y );
// }

// bike("yamaha", 15)
// function name(x,y) { /*x is my fist name and y is my surname*/

// console.log("my name is "+ x);
// surname(x,y);
// }
// function surname (x,y){
//     console.log("and "+ y + "is my surname");
// }
// name("Sagar", "Rathod");

//*********** 4. STRUCTRE AND UNION ********* */
//Structure in javascript
/* 1. premitive 
2. non premitive.

(1) primitvie
data types are : string, number, boolean, null, undefined.

(2) nonPrimtive 
data type: Array , object, function ext


*/

// 9. Write  a  program  using  user-defined  function  which  finds  the  sum  of 
// digits of a number using recursion.
// function sum(num){
//     if(num === 0){
//         return 0
//     }
//     return num%10 + Math.floor(sum(num/10))
// }
// console.log(sum(125));

// 10. Define a structure called time_struct containing three members integer 
// hour, integer minute and integer second. Develop a program that 
// would assign values to individual members and display the time in the following formate

// const hour = 12;
// const minute = 30;
// const second = 45;

// console.log(`Time: ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`);

//11.  Define a structure called bank containing account no., holder name and 
// balance  and  display  them  for  N  holders  whose  balance  is  less  than 
// 5000.

// // Sample bank account data
// const accounts = [
//     { accountNo: 1234, holderName: 'sagar', balance: 4000 },
//     { accountNo: 5678, holderName: 'sem', balance: 5500 },
//     { accountNo: 9876, holderName: 'sid', balance: 3000 },
// ];

// // Display accounts with balances less than 5000
// console.log('Bank accounts with balance less than 5000:');
// for (const account of accounts) {
//     if (account.balance < 5000) {
//         displayAccountInfo(account);
//     }
// }

// //function to display bank account information
// function displayAccountInfo(account) {
//     console.log(`Account No.: ${account.accountNo}`);
//     console.log(`Holder Name: ${account.holderName}`);
//     console.log(`Balance: ${account.balance}`);
//   }
   
//12. Define a structure called student_record containing name, date of birth 
// and total marks obtained. Use the date structure to represent the date 
// of birth. Develop a program to read data for 10 students in a class and 
// list them rank-wise.

// 17 a) Write a program to create a file and check whether exist or not.