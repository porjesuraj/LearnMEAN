//abstract class Run{
//    public abstract run()
//}
// interface is a colleciton of abstract method, i.e all method are abstract
interface Run{
    run()
}
//to use unterface in derived class, use keyword (implements)
class Animal implements Run{
    run()
    {
        console.log(`animal is running `)
    }

}

// USE TO mandate ,  method in interface , in every derived class
//interface is a  contract between service provider(Rectangle) and service consumer(object),
// as it is in interface, consumer can always use it by service provider
interface IDrawable
{  
    //mandetory to implement this methods, in derived class of this interface class
    draw()
    erase()
}

// service provider
class Rectangle implements IDrawable{

draw()
{
    console.log('drawing rectange')
}
erase()
{
    console.log(`erasing a rectangle`)
}

}
class Circle implements IDrawable{

    draw()
    {
        console.log('drawing CIRCLE')
    }
    erase()
    {
        console.log(`erasing a CIRCLE`)
    }
}

    class Square implements IDrawable{

        draw()
        {
            console.log('drawing square')
        }
        erase()
        {
            console.log(`erasing a squaRE`)
        }
        
        }
//      object:type of reference = type of object 

function fun1(drawable:IDrawable)
{
    drawable.draw()
drawable.erase()

}

const drawable1:IDrawable = new Rectangle()
//service consumer, using interface method
fun1(drawable1)

const drawable2:IDrawable = new Circle()
fun1(drawable2)

const drawable3:IDrawable = new Square()
fun1(drawable3)
//typescript  support multi-level inheritence  A ---->B---->C
// typescript doesnt support multiple inheritence  A--->C , B--->C