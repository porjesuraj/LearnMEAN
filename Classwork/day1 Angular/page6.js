function fun1() {
    var numbers = [10, 20, 30, 40, 50];
    numbers.push(60);
    numbers.reverse();
    console.log(numbers);
    console.log(typeof (numbers));
}
//fun1()
function fun2() {
    // const numbers:number[] = [1,2,3,4,5]
    var numbers = [1, 2, 3, 4, 5];
    for (var index = 0; index < numbers.length; index++) {
        var number = numbers[index];
        console.log("square of " + number + " = " + number * number);
    }
    console.log(numbers);
    console.log(typeof (numbers));
}
//fun2()
function fun3() {
    //const strings:string[] = ["india","USA","japan"]
    var strings = ["india", "USA", "japan"];
    console.log(strings);
}
fun3();
