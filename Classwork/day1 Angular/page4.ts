//int num = 100 ; in C 

//const num = 100 // implicit in js
let num: number = 100
console.log(`num = ${num} , typeof ${typeof(num)}`)

//num = 100

//num = "str" not assignable to type "number"

const firstName: string = "steve"

console.log(`firstName = ${firstName} , typeof ${typeof(firstName)}`)

let myvar:undefined

console.log(`myvar = ${myvar} , typeof ${typeof(myvar)}`)

let can: boolean = true
console.log(`can = ${can} , typeof ${typeof(can)}`)

const person:{name:string,age:number} = {name: "perosn1", age : 40}

console.log(`perosn = ${person}, type of ${typeof(person)}`)
console.log(person)
// union used to give multiple datatype option 
let result: number | string |boolean
result = 100
result = "error"
result = true


let myvar2:number|string|boolean

myvar2 = 100
myvar2 = "jea"
myvar2 = true
// to store any type of value use any
let myvar3:any

myvar3 = 100
myvar3 = "jea"
myvar3 = true
