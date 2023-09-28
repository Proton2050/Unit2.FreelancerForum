// Calculate average starting price and update message
function updateAvgPrice() {
    let averagePrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0)/freelancers.length;
    const avgPriceMsg = document.querySelector(".average");
    avgPriceMsg.textContent = `The average starting price is $${averagePrice}.`;
}

// Render freelancers to table and update price average
function render(freelancer) {
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
    priceCell.textContent = `$${freelancer.price}`;
    // Append the new table cell elements to the new table row element
    newRow.appendChild(nameCell);
    newRow.appendChild(occupationCell);
    newRow.appendChild(priceCell);
    // Append new row to table body
    tableBody.appendChild(newRow);

    updateAvgPrice();
}

// Create Random freelancer generator
function getNewFreelancer() {
    const newName = names[Math.floor(Math.random() * names.length)];
    const newOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const newPrice = Math.floor(Math.random() * 200);
    
    const newFreelancer = {
        name: newName,
        occupation: newOccupation,
        price: newPrice
    };
    
    freelancers.push(newFreelancer);
    freelancers.map((freelancer) => render(freelancer));

    if (freelancers.length > 50) {
        clearInterval(addFreelancerIntervalId);
    }
}

// Create bank of freelancer names and occupations
const names = [
"Alice",
"Bob",
"Carol",
"Dave",
"Eve",
"Frank",
"George",
"Hannah",
"Isaac",
"Jessica",
"Kevin",
"Laura",
"Michael",
"Nicole",
"Oliver",
"Peter",
"Quinn",
"Rachel",
"Samuel",
"Taylor",
"Umair",
"Victoria",
"William",
"Xavi",
"Yusuf",
"Zara",
"Aaron",
"Brandon",
"Chloe",
"Daniel",
"Emily",
"Finn",
"Gabriel",
"Hazel",
"Ian",
"Jack",
"Kate",
"Logan",
"Maya",
"Noah",
"Olivia",
"Patrick",
"Quinn",
"Ryan",
"Sarah",
"Thomas",
"Uchenna",
"Violet",
"William",
"Xander",
"Yasmine",
"Zachary",
];
const occupations = [
"Accountant",
"Actor",
"Architect",
"Artist",
"Astronaut",
"Author",
"Baker",
"Barber",
"Biologist",
"Bricklayer",
"Bus driver",
"Carpenter",
"Chef",
"Cleaner",
"Construction worker",
"Dentist",
"Doctor",
"Electrician",
"Engineer",
"Farmer",
"Firefighter",
"Flight attendant",
"Gardener",
"Graphic designer",
"Hairdresser",
"Health care assistant",
"Journalist",
"Judge",
"Lawyer",
"Librarian",
"Lifeguard",
"Mechanic",
"Model",
"Musician",
"Nurse",
"Optician",
"Painter",
"Pharmacist",
"Photographer",
"Pilot",
"Plumber",
"Police officer",
"Postman",
"Programmer",
"Psychiatrist",
"Receptionist",
"Restaurant manager",
"Sales assistant",
"Scientist",
"Secretary",
"Social worker",
"Software engineer",
"Teacher",
"Taxi driver",
"Veterinarian",
"Web developer",
];

// Seed an array of freelancer objects 
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

// Populate table with freelancers
freelancers.map((freelancer) => render(freelancer));

// Generate random freelancer at an irregular pace
const addFreelancerIntervalId = setInterval(getNewFreelancer, 1000);