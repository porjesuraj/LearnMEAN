//create object using cosntructor fucntion
//constructor function : function used to create a object 
function Person(name,email,age)
{
    this.name = name
    this.email = email
    this.age = age
  /* this.canVote = function () {  if(this.age >= 18)
        {
            console.log(`${this.name} is eligiable for voting`)
        }
        else
        {
            console.log(`${this.name} is not eligiable for voting`)
        }
         } */

}

Person.prototype.canVote = function () {  if(this.age >= 18)
    {
        console.log(`${this.name} is eligiable for voting`)
    }
    else
    {
        console.log(`${this.name} is not eligiable for voting`)
    }
     }

const p1 = new Person('person1','test@gmail.com',40)
console.log(p1)
console.log('' + p1)
console.log(p1)

p1.canVote()
const p2 = new Person('perosn2','test@yahoo.com',45)
console.log(p2)
console.log(p2.toString())

   p2.canVote()

