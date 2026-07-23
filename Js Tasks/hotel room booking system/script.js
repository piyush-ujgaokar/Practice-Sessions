
const MAX_AC = 3;
const MAX_NON_AC = 2;

// Arrays to store bookings
let acRooms = [];
let nonAcRooms = [];

while (true) {

    let name = prompt("Enter Customer Name:");

    if (name === null) {
        break; // Exit if user presses Cancel
    }

    let roomType = prompt("Entereer Room Prefnce (AC / NON-AC)");

    if (roomType === null) {
        break;
    }

    roomType = roomType.toUpperCase();

    if (roomType === "AC") {

        if (acRooms.length < MAX_AC) {

            let customer = {
                name: name
            };

            acRooms.push(customer);

            alert("✅ AC Room Booked Successfully");

        } else {

            alert("❌ Sorry! AC Rooms are Full.");

        }

    } else if (roomType === "NON-AC") {

        if (nonAcRooms.length < MAX_NON_AC) {

            let customer = {
                name: name
            };

            nonAcRooms.push(customer);

            alert("✅ NON-AC Room Booked Successfully");

        } else {

            alert("❌ Sorry! NON-AC Rooms are Full.");

        }

    } else {

        alert("Invalid Room Type!");

    }

    // Display all bookings
    let message = "===== HOTEL BOOKINGS =====\n\n";

    message += "AC Rooms:\n";

    if (acRooms.length === 0) {
        message += "No Bookings\n";
    } else {
        for (let i = 0; i < acRooms.length; i++) {
            message += (i + 1) + ". " + acRooms[i].name + "\n";
        }
    }

    message += "\nNON-AC Rooms:\n";

    if (nonAcRooms.length === 0) {
        message += "No Bookings\n";
    } else {
        for (let i = 0; i < nonAcRooms.length; i++) {
            message += (i + 1) + ". " + nonAcRooms[i].name + "\n";
        }
    }

    alert(message);

    let choice = prompt("Do you want to book another room? (YES / NO)");

    if (choice === null || choice.toUpperCase() === "NO") {
        break;
    }
}

alert("Thank you for using Hotel Booking System!");