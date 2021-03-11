const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')
//_________________________________________________
//multer : to upload anytype of document by request object to a given path 

const multer = require('multer')
const { request } = require('express')
const upload = multer({dest : 'images/'})
//___________________________________________________

const router = express.Router()



//GET all get here-----------------------------------------

/**
 * @swagger
 *
 * /product/:
 *   get:
 *     description: product management
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: product title
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         description: product description
 *         in: formData
 *         required: true
 *         type: string
 *       - name: category
 *         description: category id
 *         in: formData
 *         required: true
 *         type: string
 *       - name: price
 *         description: product price
 *         in: formData
 *         required: true
 *         type: string
  *       - name: brand
 *         description: brand id
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: category info message
 */




router.get('/', (request, response) => {
    const statement = `select p.id,p.title, p.description, 
    c.id as categoryId,c.title as categoryTitle,
    b.id as brandId,b.title as brandTitle, p.price,p.image,p.isActive from product p 
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
            image : tmpProduct['image'],
            isActive : tmpProduct['isActive'],
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


router.post('/upload-image/:productId',upload.single('image'),(request,response) => {

  const {productId} = request.params
  const fileName = request.file.filename
  console.log(request.file.filename)

  const statement = `update product set image = '${fileName}'
  where id = ${productId}`

  db.query(statement,(error,data) => {

    response.send(utils.createResult(error,data))
  })


})




/**
 * @swagger
 *
 * /product/create:
 *   post:
 *     description: product management
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: product title
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         description: product description
 *         in: formData
 *         required: true
 *         type: string
 *       - name: category
 *         description: category id
 *         in: formData
 *         required: true
 *         type: string
 *       - name: price
 *         description: product price
 *         in: formData
 *         required: true
 *         type: string
  *       - name: brand
 *         description: brand id
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: category info message
 */





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

/**
 * @swagger
 *
 * /product/:id:
 *   put:
 *     description: product management
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: product title
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         description: product description
 *         in: formData
 *         required: true
 *         type: string
 *       - name: category
 *         description: category id
 *         in: formData
 *         required: true
 *         type: string
 *       - name: price
 *         description: product price
 *         in: formData
 *         required: true
 *         type: string
  *       - name: brand
 *         description: brand id
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: category info message
 */




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

/**
 * @swagger
 *
 * /product/:id:
 *   delete:
 *     description: product management
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: product title
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         description: product description
 *         in: formData
 *         required: true
 *         type: string
 *       - name: category
 *         description: category id
 *         in: formData
 *         required: true
 *         type: string
 *       - name: price
 *         description: product price
 *         in: formData
 *         required: true
 *         type: string
  *       - name: brand
 *         description: brand id
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: category info message
 */



router.delete('/:id',(request,response) => {
    const {id} = request.params
    
    const statement = `delete from product where id = ${id}`;
   db.query(statement,(error,data) => {
       response.send(utils.createResult(error,data))
})
})
//----------------------------------------------------------------------------
module.exports = router



