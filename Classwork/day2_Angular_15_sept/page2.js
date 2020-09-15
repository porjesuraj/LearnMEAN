var Mobile = /** @class */ (function () {
    function Mobile() {
    }
    //getter 
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getCompany = function () {
        return this.company;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    //setter
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.setCompany = function (company) {
        this.company = company;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    return Mobile;
}());
//const m1 = new Mobile()
//m1.model = 'iphone'
//m1.company = 'apple'
//m1.price = 297329
//console.log(m1)
var m2 = new Mobile();
m2.setCompany('samsung');
m2.setModel('M5');
m2.setPrice(12000);
console.log(m2.getPrice);
