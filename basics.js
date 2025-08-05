// console.log("hello world");

// const aa = [21 ,12 ,31 ,33 ,41 ,3 ] ;
// let ab = aa[0] ;

// for(let i=0;i<aa.length;i++){
//   if(aa[i]>ab){
//     ab=aa[i];
//   }
// }
// console.log(ab);
// var a=1;
// a=47;
// console.log(a);
// const firstname="Ekansh Vishnoi";
// let ismarried=true;
// let age=21;
// console.log("My name is "+ firstname + ", " + age+ " years old");

// if(ismarried){
//   console.log("I am married");
// }
// if(ismarried==false){
//   console.log("I am not married");
// }
// let answer=0;
// for(let i=0;i<=1000;i++){
//   answer=answer+i;
// }
// console.log(answer);

//array

// const user = [1,2,3,52,42,532,52,43,536];
// let a=user[0];
// for(let i=0; i<user.length;i++){
//   if(a<user[i])
//     a=user[i];
// }
// console.log(a);
// let user=[ {
//   firstname: "Ekansh Vishnoi",
//   gender: "male"
// },
// {
//   fname: {firstname: "Chetna ",
//     lastname: "Vishnoi"
//   },
//   gender: "Female"
// }]
// console.log(user[0].firstname);
// console.log(user[0]["gender"]);
// console.log( user[1]["fname"]["firstname"] + user[1]["fname"]["lastname"] + " is " + user[1]["gender"] );

//functions

// function findsum(a,b){
//   return a+b;
// }
// const value= findsum(1,2);
// console.log(value);

function Sum(num1,num2){
  let result = num1 + num2;
  return result;
}
function displayResult(data){
  console.log("Result of the sum is : " + data);
}
// function displayresultpassive(data){
//   console.log("Sum's result is : "+ data);
// }
// const answer = Sum(4,34,displayResult);
// i ando this also 
console.log(displayResult(Sum(34,43)));

// function arithmetic(a,b,ar){
//   const answer = ar(a,b);
//   return answer;
// }
// function sum(a,b){
//   return a+b;
// }
// const value = arithmetic(34,43,sum);
// console.log(value);

//setTimeout

// function sum(a,b){
//   console.log(a+b);
// }
// setTimeout( function(){
//   sum(34,43);
// } , 3*1000)
// setInterval( function(){
//   sum(34,43);
// } , 3*1000)

// function greet(){
//   console.log("heelo world");
// }
// setTimeout(greet, 3*1000)
//2nd arugument is when the function should be called

