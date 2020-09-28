const express = require('express')
const { request, response } = require('express')
const db = require('./../db')
const utils = require('./../utils')
const config = require('./../config')
const jwt = require('jsonwebtoken')
const router = express.Router()




//___________________________________________________________________
// GET 

router.get('/studentCount',(request,response) => {


    const statement = `select c.FacultyId,CONCAT(f.FirstName," ",f.LastName) as 'Faculty name', COUNT(s.Id) as 'student count' 
    from Classroom c INNER JOIN Student s
    ON c.Id = s.ClassroomId 
    INNER JOIN Faculty f 
    ON c.FacultyId = f.Id
    where c.FacultyId = '${request.userId}'`
    console.log(statement)
    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })
})

router.get('/classroomDetails',(request,response) => {


    const statement = `select c.FacultyId as 'faculty id', CONCAT(f.FirstName," ",f.LastName)
     as 'Faculty name',c.Name as 'classroom',c.size as 'class size'
      from Classroom c INNER JOIN Faculty f ON c.FacultyId = f.Id 
      and c.FacultyId =  ${request.userId}`
    console.log(statement)
    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })
})
//______________________________________________________________


//___________________________________________________________________
// POST

router.post('/signup',(request,response) => {
    console.log(`inside post`)
    const {FirstName,LastName,Address,Contact,Email,Password,Experience,Age} =request.body

    const statement = `insert into Faculty (FirstName,LastName,Address,Contact,Email,Password,Experience,Age)
    values('${FirstName}','${LastName}','${Address}','${Contact}','${Email}','${Password}','${Experience}','${Age}')`;
       
    console.log(statement)
    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })

})



//-----------------
router.post('/signin', (request, response) => {
    const {Email,Password} =request.body
      
    const statement = `select Id,FirstName,LastName from Faculty 
                       where Email = '${Email}' and Password = '${Password}'`;

    db.query(statement, (error, users) => {
      if (error) {
        response.send({status: 'error', error: error})
      } else {
        if (users.length <= 0) {
          response.send({status: 'error', error: 'user does not exist'})
        } 
        else {
          const user = users[0]
          const token = jwt.sign({id: user['Id']}, config.secret)
          response.send(utils.createResult(error, {
            firstName: user['FirstName'],
            lastName: user['LastName'],
            token: token
          }))
        }
      }
    })
  })
//______________________________________________________________

//___________________________________________________________________
// PUT 
router.put('/',(request,response) => {
    console.log(`inside put`)
    const {FirstName,LastName,Address,Contact,Email,Password,Experience,Age} =request.body

    const statement = `update Faculty
     set FirstName = '${FirstName}',
     LastName = '${LastName}',
     Address = '${Address}',
     Contact = '${Contact}',
     Email = '${Email}',
     Password = '${Password}',
     Experience = ${Experience},
     Age = ${Age}
     where Id = ${request.userId}`;
       
    console.log(statement)
    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })

})

//______________________________________________________________

//___________________________________________________________________
// GET 

router.delete('/',(request,response) => {
    response.send()
})


//______________________________________________________________


module.exports = router






/* 1. Register()
2. Login()
3. CheckPaymentDetails()
4. CheckStudentCount()
5. CheckClassroomDetails()
6. UpdateProfile()
7. Logout()
 */