var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//base class or superclass // use access specifier as protected to be accesible ain derived class
var Person = /** @class */ (function () {
    function Person(name, address, age) {
        this.name = '';
        this.address = '';
        this.age = 0;
        this.name = name;
        this.address = address;
        this.age = age;
    }
    return Person;
}());
// derived or  subclass  
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    //solution for base class parameterized constructor, declare cons here, 
    //use super keyword to get any or all base class data member
    function Player(name, address, age, team) {
        var _this = _super.call(this, name, address, age) || this;
        _this.team = '';
        _this.team = team;
        return _this;
    }
    Player.prototype.printInfo = function () {
        console.log("name = " + this.name);
        console.log("age = " + this.age);
        console.log("address = " + this.address);
        console.log("team = " + this.team);
    };
    return Player;
}(Person));
var person1 = new Person("suraj", "nasik", 26);
var player1 = new Player("suraj", "nasik", 26, "mumbai Indians");
console.log(person1);
console.log(player1);
player1.printInfo();
