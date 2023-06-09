const express = require('express')
const db = require('../db')
const utility = require('../utils')
const config = require('../config')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const { request, response } = require('express')


const router = express.Router()

//__GET___________________________________

router.get('/all',(request,response) => {

const statement = `select * from books`;

db.query(statement,(error,books) => {

    response.send(utility.createResult(error,books))
} )


})
router.get('/byid/:bookId',(request,response) => {

    const {bookId} = request.params
    const statement = `select * from books where id = ${bookId}`;
    
    db.query(statement,(error,books) => {
    
        response.send(utility.createResult(error,books))
    } )
    
    
    })

    router.get('/bysubject/:sname',(request,response) => {

        const {sname} = request.params
        const statement = `select * from books where subject = ${sname}`;
        
        db.query(statement,(error,data) => {
        
            response.send(utility.createResult(error,data))
        } )
        
        
        })   

        router.get('/subjects',(request,response) => {

        
            const statement = `select DISTINCT subject from books`;
            
            db.query(statement,(error,data) => {
            
                response.send(utility.createResult(error,data))
            } )
            
            
            })   




//==============================================


//__POST___________________________________

router.post('/add',(request,response) => {

    const {id,name,author,subject, price} = request.body
   const statement = `insert into books (id,name,author,subject,price)
   values('${id}','${name}','${author}','${subject}','${price}')`

   db.query(statement,(error,book) => {
       response.send(utility.createResult(error,book))
   })

})


//==============================================


//__PUT___________________________________

router.put('/edit/:bookId',(request,response) => {
     const{bookId} = request.params   

    const {name,author,subject, price} = request.body
   const statement = `update books
    set name = '${name}',
    author = '${author}',
    subject = '${subject}',
    price = '${price}'
    where id = '${bookId}'`;

   db.query(statement,(error,book) => {
       response.send(utility.createResult(error,book))
   })

})



//==============================================

//__DELETE___________________________________
router.delete('/delete/:bookId',(request,response) => {
    const{bookId} = request.params   

   
  const statement = `delete from books
   where id = '${bookId}'`;

  db.query(statement,(error,book) => {
      response.send(utility.createResult(error,book))
  })

})


//==============================================

module.exports = router