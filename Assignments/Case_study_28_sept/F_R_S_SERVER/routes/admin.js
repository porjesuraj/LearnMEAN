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

router.get('/AllFaculty',(request,response) => {


  const statement = `select Id,FirstName,LastName,Address,Contact,Email,Password,Experience,Age from Faculty`
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
    const {FirstName,LastName,Address,Contact,Email,Password} = request.body

    const statement = `insert into Admin (FirstName,LastName,Address,Contact,Email,Password)
    values('${FirstName}','${LastName}','${Address}','${Contact}','${Email}','${Password}')`;
       
    console.log(statement)
    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })

})



//-----------------
router.post('/signin', (request, response) => {
    const {Email,Password} =request.body
      
  const statement = `select Id,FirstName,LastName from Admin where Email = '${Email}' and Password = '${Password}'`;

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

    const statement = `update Admin
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

router.delete('/faculty/:Id',(request,response) => {
    const{Id} = request.params
    const statement = `delete from Faculty where Id = ${Id}`
    db.query(statement,(error,data) => {
      response.send(utils.createResult(error,data))
  })
})


//______________________________________________________________


module.exports = router



/* 1. Register()
2. Login()
3. AllFacutly()
4. AllStudent()
5. GetStudentByRoom()
6. GetStudentByFaulty()
7. DeleteFaculty()
8. DeleteStudent()
9. AddClassroom()
10. EditClassroom()
11. DeleteClassroom()
12. AllocateFacultyToClassroom()
13. AllocateStudentToClassroom()
14. CalculateFacultyPayment() --- depends on student count and batches
15. UpdateProfile()
16. Logout()
 */