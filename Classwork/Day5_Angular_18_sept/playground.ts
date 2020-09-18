function fun1()
{
  const employees = [
    {
    id: 1,
    name : 'emp1',
    department : 'computers',
    job : 'developer',
    salary : 10.5
  },
  {
    id: 2,
    name : 'emp2',
    department : 'computers',
    job : 'tester',
    salary : 10.5
  },
  {
    id: 3,
    name : 'emp2',
    department : 'computers',
    job : 'architect',
    salary : 14
  }
  ]  

  employees.forEach(emp => {
      console.log(emp)cd app1
      
  })

  for(let employee  of employees)
  {
      console.log(employee)
  }

}

fun1()




