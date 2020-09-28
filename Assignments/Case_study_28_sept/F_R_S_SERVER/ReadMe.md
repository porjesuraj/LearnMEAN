
- function


In Faculty routes You have to design following APIS.
This allows the registered faculty to login in order to view their invigilation and payment
details. (Faculty payment depends on student count and batches)
1. Register() : done 
2. Login() : done 
3. CheckPaymentDetails() : done 
4. CheckStudentCount() : done 
5. CheckClassroomDetails() : done 
6. UpdateProfile() : done 
7. Logout() : done 






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







### faculty signup 
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

### student 
```json
"FirstName" : "suraj",
"LastName": "porje",
"Address" : "nasik",
"Contact" : "98765644334",
"Email" : "surajporje69@gmail.com",
"Password" : "9881327553",
"ClassroomId" : 1



```

#### queries 
```sql
select c.FacultyId, COUNT(s.Id) as 'student count' from Classroom c INNER JOIN Student s
    ON c.Id = s.ClassroomId 
    where c.FacultyId = 1


select c.FacultyId as 'faculty id', CONCAT*(f.FirstName,f.LastName) as 'Faculty name',c.Name as 'classroom',c.size as 'class size' from Classroom c INNER JOIN Faculty f ON c.FacultyId = f.Id and c.FacultyId = 1;

select c.FacultyId as 'faculty id', CONCAT(f.FirstName," ",f.LastName) as 'Faculty name',c.Name as 'classroom',c.size as 'class size' from Classroom c INNER JOIN Faculty f ON c.FacultyId = f.Id and c.FacultyId = 1;


select s.Id as "student Id",CONCAT(s.FirstName," ",s.LastName) as 'Student Name',s.ClassroomId,c.Name as 'ClassName' from Student s INNER JOIN Classroom c ON s.ClassroomId = c.Id where s.Id = 1;

select s.Id ,CONCAT(s.FirstName," ",s.LastName) as 'Student Name', s.ClassroomId,c.Name from Student s INNER JOIN Classroom c ON s.ClassroomId = c.Id where s.Id = 6;



select s.Id as "studentId" ,CONCAT(s.FirstName," ",s.LastName) as 'Student Name',f.Id as "facultyId",CONCAT(f.FirstName," ",f.LastName) as 'Faculty name'
from  Classroom c INNER JOIN Student s ON c.Id = s.ClassroomID
                  INNER JOIN Faculty f ON c.FacultyId = f.Id where s.Id = 6;



select Id,FirstName,LastName from Admin where Email = 'surajporje@gmail.com' and Password = '9881327553';



select c.FacultyId,CONCAT(f.FirstName," ",f.LastName) as 'Faculty name', COUNT(s.Id) as 'student count' 
    from Classroom c INNER JOIN Student s
    ON c.Id = s.ClassroomId 
    INNER JOIN Faculty f 
    ON c.FacultyId = f.Id
    where c.FacultyId = 1;



```