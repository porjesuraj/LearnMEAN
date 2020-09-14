//empty class
//let firstName:string = "person1"
//let age = 40
// 
//function printInfo()
//{
//
//}
//here datatype and method ,does not need a keyword like, let,const, or function 
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.printInfo = function () {
        console.log(this.firstName);
        console.log(this.age);
        console.log(this.address);
    };
    return Person;
}());
var p1 = new Person();
p1.firstName = "suraj";
p1.age = 26;
p1.address = "nasik\nmaharashtra\nindia\nearth";
console.log(p1);
console.log(typeof (p1));
p1.printInfo();
function Person1(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}
var person1 = new Person1("suraj", 26, "nasik");
//console.log(person1)
