const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')
const router = express.Router()

//GET all get here-----------------------------------------

router.get('/', (request, response) => {
    const statement = `select p.id,p.title, p.description, 
    c.id as categoryId,c.title as categoryTitle,
    b.id as brandId,b.title as brandTitle, p.price,p.image from product p 
    INNER JOIN category c ON c.id = p.category
    INNER JOIN brand b ON b.id = p.brand ;`
    db.query(statement, (error, data) => {

        if(error)
        {
           response.send(utils.createError(error))
        }
        else
        {
             // empty products collection
        const products = []
    
        // iterate over the collection and modify the structure
        for (let index = 0; index < data.length; index++) {
          const tmpProduct = data[index];
          const product = {
            id: tmpProduct['id'],
            title: tmpProduct['title'],
            description: tmpProduct['description'],
            price: tmpProduct['price'],
            brand: {
              id: tmpProduct['brandId'],
              title: tmpProduct['brandTitle']
            },
            category: {
              id: tmpProduct['categoryId'],
              title: tmpProduct['categoryTitle']
            }
          }
          products.push(product)
        }
    
        response.send(utils.createSuccess(products))

        }
       
      })
  })
    //--------------------------------------------------------
//POST----------------------------------------------------------
router.post('/create',(request,response) => {
    const {title,description,category,price,brand} = request.body
    const statement = `insert into product (title,description,category,price,brand)
    values('${title}','${description}','${category}','${price}','${brand}')`
   db.query(statement,(error,data) => {
       response.send(utils.createResult(error,data))
   })
})
//----------------------------------------------------------------------------
//PUT---------------------------------------------------------------------------
router.put('/:id',(request,response) => {
    const {id} = request.params
    const {title,description,category,price,brand} = request.body
    const statement = `update product 
    set title = '${title}',
    description = '${description}',
    category = '${category}',
    price = '${price}',
    brand = '${brand}'
     where id = ${id}`;
   db.query(statement,(error,data) => {
       response.send(utils.createResult(error,data))
   })
    

})
//------------------------------------------------------------------------
//DELETE--------------------------------------------------------
router.delete('/:id',(request,response) => {
    const {id} = request.params
    
    const statement = `delete from product where id = ${id}`;
   db.query(statement,(error,data) => {
       response.send(utils.createResult(error,data))
})
})
//----------------------------------------------------------------------------
module.exports = router



