const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')
const router = express.Router()

//GET all get here-----------------------------------------

    router.get('',(request,response) => {
        response.send()
    })
    //--------------------------------------------------------
//POST----------------------------------------------------------
router.post('/',(request,response) => {
    
    const {totalAmount,tax,paymentType,paymentStatus,products} = request.body

const orderStatement = `insert into userOrder (totalAmount,tax,paymentType,paymentStatus,deliveryStatus,userId)
values('${totalAmount}','${tax}','${paymentType}','${paymentStatus}','pending','${request.userId}')`

db.query(orderStatement,(error,data) => {

    const orderId = request.userId
    console.log(`order id = ${orderId}`)
   let statementOrderDetails = `insert into orderDetails (orderId,productId,price,
    quantity,totalAmount) values`
    for(let index = 0; index < products.length;index++)
    {
        const product = products[index]

       if(index > 0)
       {
           statementOrderDetails += ','
       } 
       statementOrderDetails += `('${orderId}','${product['productId']}','${product['price']}','${product['quantity']}','${product['totalAmount']}')`

    }

    console.log(`statement order detial = ${statementOrderDetails}`)
    db.query(statementOrderDetails,(error,data) => {
        response.send(utils.createSuccess('placed order'))
    })
    
    
    
})


})
//----------------------------------------------------------------------------
//PUT---------------------------------------------------------------------------
router.put('',(request,response) => {
    response.send()
})
//------------------------------------------------------------------------
//DELETE--------------------------------------------------------
router.delete('',(request,response) => {
    response.send()
})
//----------------------------------------------------------------------------
module.exports = router