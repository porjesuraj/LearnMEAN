var Person = /** @class */ (function () {
    function Person() {
    }
    //setter
    Person.prototype.setName = function (name) {
        this._name = name;
    };
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        //setter method can be accessed as a property
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Address", {
        get: function () {
            return this._address;
        },
        set: function (address) {
            this._address = address;
        },
        enumerable: false,
        configurable: true
    });
    //getter
    Person.prototype.getName = function () {
        return this._name;
    };
    return Person;
}());
var p1 = new Person();
p1.setName('suraj');
console.log("namee = " + p1.getName);
p1.age = 34;
console.log("age = " + p1.age);
p1.Address = "pune";
console.log(p1.Address);
