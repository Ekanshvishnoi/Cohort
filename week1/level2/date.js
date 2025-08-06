const currentDate = new Date();
// console.log(currentDate.getDate());
// let srt = "Eknash Vishnoi" ;

// console.log(srt.length) ;

// console.log("this shows miliseconds since 1970 : "+ currentDate.getTime());

let before = new Date();
let beforeinms = before.getTime();
let a = 0 ;
let n = prompt("Enter the value of n");

for(let i=0;i<n ; i++ ){
  a += i;
}
let after = new Date();
let afterinms = after.getTime();
console.log(afterinms - beforeinms);