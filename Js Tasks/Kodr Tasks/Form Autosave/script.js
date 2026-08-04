let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let bioInput = document.getElementById("bio");
let message = document.getElementById("message");

// Restore data when page loads
let data = JSON.parse(localStorage.getItem("formData"));

if(data){

    nameInput.value = data.name;
    emailInput.value = data.email;
    bioInput.value = data.bio;

}

let timer;

function saveData(){

    clearTimeout(timer);

    timer = setTimeout(function(){

        let formData = {
            name: nameInput.value,
            email: emailInput.value,
            bio: bioInput.value
        };

        localStorage.setItem("formData", JSON.stringify(formData));

        message.innerHTML = "Saved Successfully";

        setTimeout(function(){
            message.innerHTML = "";
        },1000);

    },500);

}

nameInput.addEventListener("input", saveData);
emailInput.addEventListener("input", saveData);
bioInput.addEventListener("input", saveData);