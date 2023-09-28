// Calculate price average
const updateAvgPrice = () => {
    let averagePrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0)/freelancers.length;
    const avgPriceMsg = document.querySelector(".average");
    avgPriceMsg.textContent = `The average starting price is $${averagePrice}.`;
}
// Render freelancers to table using .map to render()
const render = () => {
    // Get a reference to the table body
    const tableBody = document.querySelector("tbody");
    // Create a new table row element
    const newRow = document.createElement("tr");
    // Create new table cell elements for each column in table
    const nameCell = document.createElement("td");
    nameCell.classList.add("name");
    const occupationCell = document.createElement("td");
    occupationCell.classList.add("occupation");
    const priceCell = document.createElement("td");
    priceCell.classList.add("price");
    // Set text content of each cell to freelancer's data
    nameCell.textContent = freelancer.name;
    occupationCell.textContent = freelancer.occupation;
    priceCell.textContent = freelancer.price;
    // Append the new table cell elements to the new table row element
    newRow.appendChild(nameCell);
    newRow.appendChild(occupationCell);
    newRow.appendChild(priceCell);
    // Append new row to table body
    tableBody.appendChild(newRow);
}
// Create an array of freelancer objects 
const freelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        price: 30
    }, {
        name: "Bob",
        occupation: "Teacher",
        price: 50
    }, {
        name: "Carol",
        occupation: "Programmer",
        price: 70
    }
];

// Generate random freelancer at an irregular pace that 
// draws from an array of names, occupations, and prices and pushes into freelancers array

// Everytime a freelancer is added, update the average price

updateAvgPrice();
freelancers.map()