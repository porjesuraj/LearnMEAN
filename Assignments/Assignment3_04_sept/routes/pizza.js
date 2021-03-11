const express = require('express')
const { request, response } = require('express')

const db = require('../db')

const utility = require('../response')
const router = express.Router()

router.get('/',(request,response) =>
 {
       
        const ID = request.body.ID
    const statement = `select * from PIZZA_ITEMS where ID = ${ID}`;

    db.query(statement,(error,dbResult) => {
        response.send(utility.createResult(error,dbResult))
    
    })
  
   
})

router.post('/',(request,response) => {
    
    
    const Name = request.body.Name
    const Type = request.body.Type
    const Category = request.body.Category
    const Description = request.body.Description
    

    const statement = `insert into PIZZA_ITEMS ( Name,Type,Category,Description)
    values ('${Name}','${Type}','${Category}','${Description}')`;

    db.query(statement,(error,dbResult) => {
         response.send(utility.createResult(error,dbResult))

    })
})


router.put('/',(request,response) => {
    
    const ID = request.body.ID
    const Name = request.body.Name
    const Type = request.body.Type
    const Category = request.body.Category
    const Description = request.body.Description
    

    const statement = `update PIZZA_ITEMS set  Name = '${Name}',Type = '${Type}',
    Category = '${Category}',Description = '${Description}' where ID = ${ID}`;

    db.query(statement,(error,dbResult) => {
         response.send(utility.createResult(error,dbResult))

    })
})


router.delete('/',(request,response) => {
    
    const ID = request.body.ID
   
    

    const statement = `delete from PIZZA_ITEMS  where ID = ${ID}`;

    db.query(statement,(error,dbResult) => {
         response.send(utility.createResult(error,dbResult))

    })
})




module.exports = router