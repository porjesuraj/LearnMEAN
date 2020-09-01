function add(p1,p2)
{
    console.log(`addition = ${p1 + p2}`)
}

function sub(p1,p2)
{
    console.log(`substraction = ${p1 - p2}`)
}

function mod(p1,p2)
{
    console.log(`module = ${p1 % p2}`)
}
add(100,20)
sub(100,20)
mod(100,20)
console.log(module)

module.exports = {
    add : add,
    sub: sub,
    mod : mod
}