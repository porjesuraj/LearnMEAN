//to use unterface in derived class, use keyword (implements)
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.run = function () {
        console.log("animal is running ");
    };
    return Animal;
}());
// service provider
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.draw = function () {
        console.log('drawing rectange');
    };
    Rectangle.prototype.erase = function () {
        console.log("erasing a rectangle");
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log('drawing CIRCLE');
    };
    Circle.prototype.erase = function () {
        console.log("erasing a CIRCLE");
    };
    return Circle;
}());
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.draw = function () {
        console.log('drawing square');
    };
    Square.prototype.erase = function () {
        console.log("erasing a squaRE");
    };
    return Square;
}());
//      object:type of reference = type of object 
function fun1(drawable) {
    drawable.draw();
    drawable.erase();
}
var drawable1 = new Rectangle();
//service consumer, using interface method
fun1(drawable1);
var drawable2 = new Circle();
fun1(drawable2);
var drawable3 = new Square();
fun1(drawable3);
