const obj = {name:"Ekansh",
  age: 21,
  gender: "Male"
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(obj.hasOwnProperty("age"))
console.log(obj.hasOwnProperty("fullname"))
console.log(Object.assign({} , obj , {newproperty : "valuenew"}))