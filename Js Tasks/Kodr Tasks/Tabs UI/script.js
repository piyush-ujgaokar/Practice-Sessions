let about = document.getElementById("about");
let projects = document.getElementById("projects");
let contact = document.getElementById("contact");
let content = document.getElementById("content");

let buttons = document.querySelectorAll("button");

about.addEventListener("click", function () {
    showContent("about");
});

projects.addEventListener("click", function () {
    showContent("projects");
});

contact.addEventListener("click", function () {
    showContent("contact");
});

function showContent(tab) {

    buttons.forEach(function(btn){
        btn.classList.remove("active");
    });

    switch(tab){

        case "about":
            content.innerHTML = `
                <h3>About</h3>
                <p>I am a Full Stack Web Developer.</p>
            `;
            about.classList.add("active");
            break;

        case "projects":
            content.innerHTML = `
                <h3>Projects</h3>
                <p>Portfolio, E-Commerce, Chat App</p>
            `;
            projects.classList.add("active");
            break;

        case "contact":
            content.innerHTML = `
                <h3>Contact</h3>
                <p>Email: demo@gmail.com</p>
            `;
            contact.classList.add("active");
            break;

    }

}