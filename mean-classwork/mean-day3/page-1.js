function add(p1,p2)
{
    const result = p1 + p2
    console.log(`result add = ${result}`)
}
function sub(p1,p2)
{
    const result = p1 - p2
    console.log(`result sub  = ${result}`)
}
function mult(p1,p2)
{
    const result = p1 * p2
    console.log(`result mult = ${result}`)
}
function div(p1,p2)
{
    const result = p1 / p2
    console.log(`result div = ${result}`)
}

//add(10,20)
//sub(10,20)
//mult(10,20)
//div(10,20)


//module.exports = add 
//console.log(module)

//module.exports = sub
//const pi = 3.14
//module.exports = pi
module.exports = {
    add : add,
    div : div,
    sub : sub,
    mult : mult
}