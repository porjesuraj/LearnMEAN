const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')
const router = express.Router()
/*  - Order management
      - list all orders
      - update order
        - update delivery status
        - update prodcuts
        - delete orders  */




//GET all get here-----------------------------------------

    router.get('/',(request,response) => {
       
        const statement = `select userId,sum(totalAmount) as 'user_total' from userOrder 
        GROUP BY userId`

        db.query(statement,(error,data) => {

            response.send(utils.createResult(error,data))
        })
    })
    //--------------------------------------------------------
//POST----------------------------------------------------------
router.post('',(request,response) => {
    response.send()
})
//----------------------------------------------------------------------------
//PUT---------------------------------------------------------------------------
router.put('/:deliveryStatus',(request,response) => {
    const {deliveryStatus} = request.params
    const statement = `update userOrder set deliveryStatus = '${deliveryStatus}' where userId = '${request.userId}'`

    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })

})
router.put('/',(request,response) => {
    const {productId,price,quantity} = request.body
    const statement = `update orderDetails set price = '${price}',totalAmount = ${price*quantity} 
    where productId = '${productId}'`

    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })

})

//------------------------------------------------------------------------
//DELETE--------------------------------------------------------
router.delete('/:id',(request,response) => {
    const {id} = request.params
    const statement = `delete userOrder ,orderDetails  from userOrder  INNER JOIN orderDetails 
    ON userOrder.id = orderDetails.id  where userOrder.id = ${id}`;

    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })
})
//----------------------------------------------------------------------------
module.exports = router