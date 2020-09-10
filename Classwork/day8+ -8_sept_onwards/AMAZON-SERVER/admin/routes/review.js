const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')
const { request, response } = require('express')
const router = express.Router()

//GET all get here-----------------------------------------

//_______swagger

/**
 * @swagger
 *
 * /review:
 *   get:
 *     description: category management
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: review
 *         description: product review
 *         in: formData
 *         required: true
 *         type: string
 *       - name: productId
 *         description: product info
 *         in: formData
 *         required: true
 *         type: string
 *       - name: rating
 *         description: rating product
 *         in: formData
 *         required: true
 *         type: string
 *       - name: userId
 *         description: user info
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: category info message
 */


//__________



    router.get('/',(request,response) => {

       const statement = `select review,userId,productId,rating from productReviews`;
       db.query(statement,(error,data) => {
           response.send(utils.createResult(error,data))
       })
    })
    //--------------------------------------------------------
//POST----------------------------------------------------------

// no post method  as user post reviews 
//router.post('/',(request,response) => {})
//----------------------------------------------------------------------------
//PUT---------------------------------------------------------------------------
//router.put('/:id',(request,response) =>
// {
//      const {id} = request.params
//      
//      //const { review, userId,productId,rating} = request.body
//     
//     // const statement = `update productReviews
//     //  set review = '${review}',
//     //  userId = ${userId},
//     //  productId = ${productId},
//     //  rating = ${rating} 
//     //  where id = ${id}`
//     const {id} = request.params
//     const {title, description, category, price, brand} = request.body
//     const statement = `update product set 
//         title = '${title}',
//         description = '${description}',
//         category = '${category}',
//         price = '${price}',
//         brand = '${brand}'
//     where id = ${id}`
//
//       db.query(statement,(error,data) => {
//           response.send(utils.createResult(error,data))
//       })
//
//}) as product edit is available no need here 
//------------------------------------------------------------------------------
//PUT
//_______swagger

/**
 * @swagger
 *
 * /review/update-state/:id/:isActive:
 *   put:
 *     description: category management
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: review
 *         description: product review
 *         in: formData
 *         required: true
 *         type: string
 *       - name: productId
 *         description: product info
 *         in: formData
 *         required: true
 *         type: string
 *       - name: rating
 *         description: rating product
 *         in: formData
 *         required: true
 *         type: string
 *       - name: userId
 *         description: user info
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: category info message
 */


//__________





router.put('/update-state/:id/:isActive', (request,response) => {

    const {id,isActive} = request.params
    const statement = `update product set
    isActive = ${isActive} 
    where id = ${id}`
    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })
})

//------------------------------------------------------------------------
//DELETE--------------------------------------------------------

//_______swagger

/**
 * @swagger
 *
 * /review/:id:
 *   delete:
 *     description: category management
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: review
 *         description: product review
 *         in: formData
 *         required: true
 *         type: string
 *       - name: productId
 *         description: product info
 *         in: formData
 *         required: true
 *         type: string
 *       - name: rating
 *         description: rating product
 *         in: formData
 *         required: true
 *         type: string
 *       - name: userId
 *         description: user info
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: category info message
 */


//__________




router.delete('/:id',(request,response) => {
   const{id} = request.params
   const statement = `delete from productReviews 
   where id = ${id}`;
   db.query(statement,(error,data) => {
       response.send(utils.createResult(error,data))
   })
})
//----------------------------------------------------------------------------
module.exports = router