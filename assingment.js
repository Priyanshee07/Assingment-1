// The fetch()is used to get data over network.
// This  method returns a Promise that resolves to a Response object.
// It is a 2 stage process 
// 1. An object of response which contains the desired data and other meta such as the status 
// 2. After that we need to call another method to access the body here i have used response.json()




const table =document.getElementById('data-table').getElementsByTagName("tbody")[0];// here we access the body tag where the rows will be inserted 

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response =>response.json()) // this is a promise which will resolve in json response 
    .then(data=>{
     console.log(data) // now we have the data which we need 
    data.forEach(line=> {// this loops sround the entire data 
        const row =table.insertRow(-1);// Creates a new row (tr) in the table 
        row.insertCell(0).innerHTML=line.userId;//Creates a new cell in the table row
        row.insertCell(1).innerHTML=line.id;
        row.insertCell(2).innerHTML=line.title;
        row.insertCell(3).innerHTML=line.body;
        const incrementCell=row.insertCell(4);// new cell is created for the button 
        const incrementButton =document.createElement('button');// button is dynamically created
        incrementButton.innerHTML ='Increment'; 
        incrementButton.onclick=()=>{ // code when we click on the button 
            const value=row.cells[5]; // here it retrieves the value at cell 
            let incval=parseInt(value.innerHTML)// value is converted to integer 
            value.innerHTML=++incval;// increases the value by 1 and stores the new value 
        };
        incrementCell.appendChild(incrementButton); // to display the button 
        row.insertCell(5).innerHTML='0'; // initially value is set to 0 
    });
   
    

}).catch((err)=>{// handling the error 
    console.log(err);
});
