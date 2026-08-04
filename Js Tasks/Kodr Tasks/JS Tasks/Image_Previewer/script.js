let fileInput = document.getElementById("file");
let preview = document.getElementById("preview");
let message = document.getElementById("message");

fileInput.addEventListener("change", function () {

    let file = fileInput.files[0];

    preview.innerHTML = "";
    message.innerHTML = "";

    if (!file) {
        return;
    }

    // Check image type
    if (file.type !== "image/jpeg" && file.type !== "image/png") {
        message.innerHTML = "Only JPEG and PNG images are allowed.";
        return;
    }

    // Check size (2MB)
    if (file.size > 2 * 1024 * 1024) {
        message.innerHTML = "Image size must be less than 2MB.";
        return;
    }

    let img = document.createElement("img");

    img.src = URL.createObjectURL(file);

    preview.appendChild(img);

});