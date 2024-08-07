document.getElementById('employeeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;

    fetch('/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, position: position, salary: 0 }), // Assuming salary is not needed
    })
    .then(response => response.json())
    .then(data => {
        // Code to update the employee list
        const employeeList = document.getElementById('employeeList');
        const listItem = document.createElement('li');
        listItem.textContent = `${data.name} - ${data.position}`;
        employeeList.appendChild(listItem);
    })
    .catch(error => console.error('Error:', error));
});
