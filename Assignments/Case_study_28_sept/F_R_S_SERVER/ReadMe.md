
- function


In Faculty routes You have to design following APIS.
This allows the registered faculty to login in order to view their invigilation and payment
details. (Faculty payment depends on student count and batches)
1. Register()
2. Login()
3. CheckPaymentDetails()
4. CheckStudentCount()
5. CheckClassroomDetails()
6. UpdateProfile()
7. Logout()






• In Student routes You have to design following APIS.
This allows the student to check in which room they are allotted.
1. Register()
2. Login()
3. CheckClassroomDetails()
4. CheckFacultyDetails()
5. UpdateProfile()
6. Logout()





• In **Admin routes** You have to design following APIS.
The admin assigns the invigilation to the faculty and add the required rooms and allocate the
students according to them.
1. Register()
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























-- faculty signup 
```json

"FirstName" : "suraj",
"LastName": "porje",
"Address" : "nasik",
"Contact" : "98765644334",
"Email" : "surajporje69@gmail.com",
"Password" : "9881327553",
"Experience" : 1,
"Age" : 26

```

- student 
```json
"FirstName" : "suraj",
"LastName": "porje",
"Address" : "nasik",
"Contact" : "98765644334",
"Email" : "surajporje69@gmail.com",
"Password" : "9881327553",
"ClassroomId" : 1



```