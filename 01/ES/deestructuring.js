// destructuring

const company = {
    name: "Google",
    location: "Mountain View",
    employees: [
        "Juan",
        "Pedro",
        "Maria"
    ]
}       

const { name, location, employees } = company;

employees.forEach(employee => console.log(employee));