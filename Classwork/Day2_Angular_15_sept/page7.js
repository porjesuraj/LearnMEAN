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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(name, age, team) {
        var _this = _super.call(this, name, age) || this;
        _this.team = team;
        return _this;
    }
    Player.prototype.printProfession = function () {
        console.log(' procession = player');
    };
    return Player;
}(Person));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, company) {
        var _this = _super.call(this, name, age) || this;
        _this.company = company;
        return _this;
    }
    Developer.prototype.printProfession = function () {
        console.log("profession : developer");
    };
    return Developer;
}(Person));
//const person1 = new Person('person1', 26)
//console.log(person1)
var player1 = new Player('player1', 26, 'team india');
console.log(player1);
player1.printProfession();
var d1 = new Developer('suraj', 26, 'google');
console.log(d1);
d1.printProfession();
