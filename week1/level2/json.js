// javascript object notation

const user = '{"name":"Ekansh","age":21,"gender":"Male"}'

const users = JSON.parse(user) //Here we convert user which was an string to a object
console.log(users["name"])  

const userss = JSON.stringify(users) //Here we convert user which was an object to a string 
console.log(userss)