const express = require('express')
const { request, response } = require('express')
const db = require('./../db')
const utils = require('./../utils')
const config = require('./../config')
const jwt = require('jsonwebtoken')
const router = express.Router()




//___________________________________________________________________
// GET 

router.get('/facultyDetail',(request,response) => {


    const statement = `select s.Id as "studentId" ,CONCAT(s.FirstName," ",s.LastName) as 'Student Name',f.Id as "facultyId",CONCAT(f.FirstName," ",f.LastName) as 'Faculty name'
    from  Classroom c INNER JOIN Student s ON c.Id = s.ClassroomID
     INNER JOIN Faculty f ON c.FacultyId = f.Id where s.Id =  '${request.userId}'`
    console.log(statement)
    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })
})

router.get('/classroomDetails',(request,response) => {


    const statement = `select s.Id ,CONCAT(s.FirstName," ",s.LastName) as 'Student Name',
     s.ClassroomId,c.Name from Student s INNER JOIN Classroom c
      ON s.ClassroomId = c.Id where s.Id = ${request.userId}`
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
    const {FirstName,LastName,Address,Contact,Email,Password,ClassroomId} = request.body

    const statement = `insert into Student (FirstName,LastName,Address,Contact,Email,Password,ClassroomId)
    values('${FirstName}','${LastName}','${Address}','${Contact}','${Email}','${Password}','${ClassroomId}')`;
       
    console.log(statement)
    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })

})



//-----------------
router.post('/signin', (request, response) => {
    const {Email,Password} =request.body
      
    const statement = `select Id,FirstName,LastName from Student
                       where Email = '${Email}' and Password = '${Password}'`;

    db.query(statement, (error, users) => {
      if (error) {
        response.send({status: 'error', error: error})
      } else {
        if (users.length == 0) {
          response.send({status: 'error', error: 'user does not exist'})
        } else {
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
    const {FirstName,LastName,Address,Contact,Email,Password} =request.body

    const statement = `update Student
     set FirstName = '${FirstName}',
     LastName = '${LastName}',
     Address = '${Address}',
     Contact = '${Contact}',
     Email = '${Email}',
     Password = '${Password}'
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



 /* Register()
Login()
CheckClassroomDetails()
CheckFacultyDetails()
UpdateProfile()
Logout() */