function add(a:string,b:string) :string;

function add(a:number,b:number) :number;

function add(a:any, b:any) :any{
    return a + b 
};

console.log(add("suraj","porje"));// surajporje
console.log(add(30,20)) //50
