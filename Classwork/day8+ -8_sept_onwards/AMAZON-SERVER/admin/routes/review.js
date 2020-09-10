const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')
const { request, response } = require('express')
const router = express.Router()

//GET all get here-----------------------------------------

    router.get('',(request,response) => {

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
router.delete('',(request,response) => {
    response.send()
})
//----------------------------------------------------------------------------
module.exports = router