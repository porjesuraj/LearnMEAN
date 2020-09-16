var Person = /** @class */ (function () {
    //trying ato implement a constructor , use keyword constructor
    function Person(name, age) {
        if (name === void 0) { name = ''; }
        if (age === void 0) { age = 0; }
        console.log("inside constructor");
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        //getter
        get: function () { return this._name; },
        //setter
        set: function (name) { this._name = name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () { return this._age; },
        set: function (age) { this._age = age; },
        enumerable: false,
        configurable: true
    });
    // facilitator or utility 
    Person.prototype.canVote = function () {
        if (this._age >= 18) {
            console.log(this._name + " is eligiable");
        }
        else {
            console.log(this._name + " is not eligiable");
        }
    };
    return Person;
}());
//using parameterless constructor 
//const p1 = new Person()
//p1.name = "suraj"
//p1.age = 26
//console.log(`name = ${p1.name}`)
//console.log(`age = ${p1.age}`)
// by parameterized constructor 
var p1 = new Person("suraj", 26);
console.log(p1);
var p2 = new Person();
console.log(p2);
p1.canVote();
p2.canVote();
