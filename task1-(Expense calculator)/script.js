
function getPeople() {
    const people = [];

    const totalPeople = Number(prompt("Enter number of people:"));

    for (let i = 1; i <= totalPeople; i++) {
        const name = prompt(`Enter name of Person ${i}:`);
        people.push(name);
    }

    return people;
}

// Function to get items
function getItems() {
    const items = [];

    const totalItems = Number(prompt("Enter number of items:"));

    for (let i = 1; i <= totalItems; i++) {

        const itemName = prompt(`Enter name of Item ${i}:`);

        const itemPrice = Number(
            prompt(`Enter price of ${itemName}:`)
        );

        items.push({
            name: itemName,
            price: itemPrice
        });

    }

    return items;
}

// Calculate total bill
function calculateTotal(items) {

    let total = 0;

    for (let i = 0; i < items.length; i++) {
        total = total + items[i].price;
    }

    return total;
}

// Split bill
function splitBill(total, people) {

    return total / people.length;

}


// Main Function
function main() {

    const people = getPeople();
    const items = getItems();
    const total = calculateTotal(items);
    const amountPerPerson = splitBill(total, people);
    alert(
        `Total Bill = ₹${total}\nEach Person Pays = ₹${amountPerPerson.toFixed(2)}`
    );

}

main();