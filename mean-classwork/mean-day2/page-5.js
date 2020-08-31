function Mobile(model,company,price)
{
    this.model = model
    this.company = company
    this.price = price
}
// MObile is overriding the toString function 
Mobile.prototype.toString = function()
{
    return `Mobile[model : ${this.model}, company: ${this.company}, price = ${this.price}]` 
}

Mobile.prototype.canAfford = function () {
    if(this.price >= 30000)
    {
        console.log(`cannot afford ${this.model},price : ${this.price}`)
    }
    else
    {
        console.log(`can afford ${this.model}, price : ${this.price}`)
    }
  }
const m1 = new Mobile('iphone','apple',40000)

const m2 = new Mobile('sphone','apple',20000)
const m3 = new Mobile('zphone','apple',60000)

console.log('' + m1)
console.log('' + m2)
console.log('' + m3)

m1.canAfford()
m2.canAfford()
m3.canAfford()