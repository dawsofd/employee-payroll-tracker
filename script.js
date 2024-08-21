// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employeesArray = [];
  let addAnother = true;

  while(addAnother) {
    const firstName = prompt("Enter first name:");
    const lastName = prompt("Enter last name:");
    let salary = prompt("Enter Salary:");
    
    salary = isNaN(Number(salary)) ? 0 : Number(salary);

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };

    employeesArray.push(employee);

    const confirmAdding = confirm("Do you want to add another employee?")
    if (!confirmAdding) {
      addAnother = false;
    }
  }
return employeesArray;

}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const sumSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);
  const averageSalary = sumSalary / employeesArray.length;
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary}`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomEmployeeIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomEmployeeIndex];
  console.log(`Congratulatons to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
