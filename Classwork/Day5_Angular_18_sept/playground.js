function fun1() {
    var employees = [
        {
            id: 1,
            name: 'emp1',
            department: 'computers',
            job: 'developer',
            salary: 10.5
        },
        {
            id: 2,
            name: 'emp2',
            department: 'computers',
            job: 'tester',
            salary: 10.5
        },
        {
            id: 3,
            name: 'emp2',
            department: 'computers',
            job: 'architect',
            salary: 14
        }
    ];
    employees.forEach(function (emp) {
        console.log(emp);
    });
    for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
        var employee = employees_1[_i];
        console.log(employee);
    }
}
fun1();
