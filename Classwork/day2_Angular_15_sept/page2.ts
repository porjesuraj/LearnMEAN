class Mobile{

   private model:string
   private company:string
   private price:number
   //getter 
    public getModel()
    {
        return this.model
    }
    public getCompany()
    {
        return this.company
    }
    public getPrice()
    {
        return this.price
    }



   //setter
   public setModel(model:string)
   {
       this.model = model
   }
   public setCompany(company:string)
   {
       this.company = company
   }
   public setPrice(price:number)
   {
       this.price = price
   }
}

//const m1 = new Mobile()
//m1.model = 'iphone'
//m1.company = 'apple'
//m1.price = 297329
//console.log(m1)

const m2 = new Mobile()
m2.setCompany('samsung')
m2.setModel('M5')
m2.setPrice(12000)

console.log(m2)