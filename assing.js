let promises = fetch('https://jsonplaceholder.typicode.com/posts');

const tableContainer = document.getElementById("table-container");
const table = document.createElement("table");
const headerRow = table.insertRow();
const headers = ["User ID", "ID", "Title", "Body", "Increment", "Incremented Value"]
headers.forEach((header) => {
    const th = document.createElement("th");
    const text = document.createTextNode(header);
    th.appendChild(text);
    headerRow.appendChild(th);
});
promises.then(response => response.json())
    .then(completedata => {
        console.log(completedata)
        completedata.map((values) => {
            const valueFinal = [values.userId, values.id, values.title, values.body];
            const row =table.insertRow();// Creates a new row (tr) in the table 
            row.insertCell(0).innerHTML = valueFinal[0];//Creates a new cell in the table row
            row.insertCell(1).innerHTML = valueFinal[1];
            row.insertCell(2).innerHTML = valueFinal[2];
            row.insertCell(3).innerHTML = valueFinal[3];
            const incrementCell = row.insertCell(4);// new cell is created for the button 
            const incrementButton = document.createElement('button');// button is dynamically created
            incrementButton.innerHTML = 'Increment';
            incrementButton.onclick = () => { // code when we click on the button 
                const value = row.cells[5]; // here it retrieves the value at cell 
                let incval = parseInt(value.innerHTML)// value is converted to integer 
                value.innerHTML = ++incval;// increases the value by 1 and stores the new value 
            };
            incrementCell.appendChild(incrementButton); // to display the button 
            row.insertCell(5).innerHTML = '0'; // initially value is set to 0 

    });
tableContainer.appendChild(table);
})