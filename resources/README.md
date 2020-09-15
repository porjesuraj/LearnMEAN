### What is typescript?
1. TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.TypeScript is a language that is a superset of JavaScript. JS syntax is therefore legal TS. The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.
2. TypeScript code is written in a file with .ts extension and then compiled into JavaScript using the compiler. You can write the file in any code editor and the compiler needs to be installed on your platform,
3.the command tsc <filename>.ts compiles the TypeScript code into a plain JavaScript file.




### What are Types(Data types) in TypeScript?

1. Boolean
   -The most basic datatype is the simple true/false    value, which JavaScript and TypeScript call a boolean    value.
   -let isDone: boolean = false;Try
2. Number
-As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating point numbers get the type number, while BigIntegers get the type bigint. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
```ts
- let decimal: number = 6;
- let hex: number = 0xf00d;
- let binary: number = 0b1010;
- let octal: number = 0o744;
- let big: bigint = 100n;Try
```
3. String
- Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.
```ts
let color: string = "blue";
color = "red";Try
You can also use template strings, which can span multiple lines and have embedded expressions. These strings are surrounded by the backtick/backquote (`) character, and embedded expressions are of the form ${ expr }.
```

4 .Array
- TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. 
1.use the type of the elements followed by [] to denote an array of that element type:
```ts
let list: number[] = [1, 2, 3];Try
The second way uses a generic array type, Array<elemType>:

let list: Array<number> = [1, 2, 3];
```

5 .Tuple
- Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same.
 For example, you may want to represent a value as a pair of a string and a number:
```ts
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
When accessing an element with a known index, the correct type is retrieved:
```

6. Enum
 - addition to the standard set of datatypes from JavaScript is the enum. 
As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.
```ts
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;Try
By default, enums begin numbering their members starting at 0.
```
7. Unknown
- We may need to describe the type of variables that we do not know when we are writing an application. 
These values may come from dynamic content – e.g. from the user – or we may want to intentionally accept all values in our API. In these cases, we want to provide a type that tells the compiler and future readers that this variable could be anything, so we give it the unknown type.
```ts
let notSure: unknown = 4;
notSure = "maybe a string instead";
notSure = false;
```

8. Any
- In some situations, not all type information is available or its declaration would take an inappropriate amount of effort. These may occur for values from code that has been written without TypeScript or a 3rd party library. In these cases, we might want to opt-out of type checking. To do so, we label these values with the any type:
```ts
declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const str: string = getValue("myString");

The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation.
```

9.Void
- void is a little like the opposite of any: the absence of having any type at all. 
You may commonly see this as the return type of functions that do not return a value:
```ts
function warnUser(): void {
  console.log("This is my warning message");
}
```

10.Never
- The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns. 

- The never type is a subtype of, and assignable to, every type; 
- however, no type is a subtype of, or assignable to, never (except never itself).
Even any isn’t assignable to never.

Some examples of functions returning never:
```ts
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}
```


Type assertions

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but it performs no special checking or restructuring of data.
Type assertions have two forms.
One is the as-syntax:
```ts
let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;
The other version is the “angle-bracket” syntax:

let someValue: unknown = "this is a string";

let strLength: number = (<string>someValue).length;Try
The two samples are equivalent. Using one over the other is mostly a choice of preference
```

### What are the Differences between TypeScript and JavaScript?

- TypeScript stands in an unusual relationship to JavaScript. 
1. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.

2. For example, JavaScript provides language primitives like string, number, and object, but it doesn’t check that you’ve consistently assigned these. TypeScript does.

3. This means that your existing working JavaScript code is also TypeScript code.
4.  The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs, which javascript cant do
- difference between ts and js: 

1. TS-TypeScript is an Object-Oriented language

JS-JavaScript is a Scripting language

2. TS-It has a feature known as Static typing

JS-It does not have static typing

3. TS-TypeScript gives support for modules

JS-JavaScript does not support modules

4. TS-It supports optional parameter function

 - JS-It does not support optional parameter function

### How do you compile TypeScript files?
```ts
    tsc <filename>.ts; and to run the output file , node <filename>.js
```
### How to install TypeScript?
```ts
    sudo npm install -g typescript
```
### Who developed Typescript and what is the current stable version available?
- TypeScript
- Developer	Microsoft
- First appeared	1 October 2012
- Stable release	4.0.2 / 20 August 2020

### How to write a function in typescript?
- TypeScript functions can be created both as a named function or as an anonymous function. 
- 1 .
 function add(x:number,y:number) :number{ return x + y;}
2 .
let add = function(x:number,y:number)  :number{return x + y;} 

### additional features in typescript in comparison to javascript?
-  new features in TS are: 
- A. .data types
- B. compilation of code
- C. introduced  class as an OOP concept
- D. it is statically typed language
- E. All of the above
- ans : E, 
  - as TypeScript is a language that is a superset of JavaScript,TypeScript offers all of JavaScript’s features,
 and an additional layer on top of these: TypeScript’s type system.


### What are the Benefits of using TypeScript?
- Typescript is a strict, typed superset of Javascript developed by Microsoft. 
- the major benefits of using Typescript in applications.
1. Static Typing
The main benefit of Typescript is that it offers the ability to add static types to your Javascript code. 
Javascript is a dynamically typed language, 
Static typing allows you to catch errors earlier in the debugging process. 

2.  Typescript Error Catching the error instantly allows me to save time and check why my input is not the type I think it is, rather than having to trace my steps back much later in the process without being sure where the error is occurring.

3. static typing Optional
 - it’s worth emphasizing that the static typing available in Typescript is optional, which is a nice benefit.
 with Typescript you only have to use the static typing where you think it will be beneficial.


4. New Features + Browser Compatibility
- Typescript mixes the old with the new in the best way possibility. 
- You can use newer features from ES6, ES7, and beyond, and the compiler will convert them to ES5 (or whatever you specify).
This allows you to make use of newer features that will be the future of Javascript without having to worry about compatibility. 
The finished code produced by the compiler will be backwards compatible with ES5 and will work just fine with older browsers.

5. Enhanced IDE Experience
- Due to the static types, several IDEs are able to offer even more predictive assistance than usual (with an instance of a class and its attributes, for example).
 -e.g.  Atom is one of the IDEs that has a great Typescript package worth checking out.


### What are the different ways of declaring a Variable?
- The type syntax for declaring a variable in TypeScript is to include a colon (:) after the variable name, followed by its type. 
Just as in JavaScript, we use the var keyword to declare a variable.
- fundamentally there are two ways,
-   implicit and
-  explicit 
- based on which ,
 while declaring a variable, you have four options −
1. Declare its type and value in one statement.

```ts
 var name:string = ”mary”

//The variable stores a value of type string
```
2. Declare its type but no value. In this case, the variable will be set to undefined.
```ts
var name:string;

//The variable is a string variable. The variable’s value is set to undefined by default

```
3. Declare its value but no type. The variable type will be set to the data type of the assigned value.
```ts
var name = ”mary”

//The variable’s type is inferred from the data type of the value. Here, the variable is of the type string

```

4. Declare neither value not type. In this case, the data type of the variable will be any and will be initialized to undefined.

```ts
var name;

//The variable’s data type is any. Its value is set to undefined by default.

```
### Does TypeScript support function overloading?
- TypeScript provides the concept of function overloading. You can have multiple functions with the same name but different parameter types and return type. However, the number of parameters should be the same.
```ts
function add(a:string,b:string) :string;

function add(a:number,b:number) :number;

function add(a:any, b:any) :any{
    return a + b 
};

console.log(add("suraj","porje"));// surajporje
console.log(add(30,20)) //50
```
- Function overloading with different number of parameters and types with same name is not supported.
- Thus, in order to achieve function overloading, we must declare all the functions with possible signatures. 
- Also, function implementation should have compatible types for all declarations.



