"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, address, age) {
        if (age === void 0) { age = 0; }
        this._name = name;
        this._address = address;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () { return this._name; },
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
    Object.defineProperty(Person.prototype, "address", {
        get: function () { return this._address; },
        set: function (address) { this._address = address; },
        enumerable: false,
        configurable: true
    });
    Person.prototype.printInfo = function () {
        console.log(" name = " + this._name);
        console.log("age  = " + this._age);
        console.log(" address = " + this._address);
    };
    Person.prototype.canVote = function () {
        if (this._age >= 18) {
            console.log(this._name + " is eligible for voting");
        }
        else {
            console.log(this._name + " is NOT eligible for voting");
        }
    };
    return Person;
}());
exports.Person = Person;
