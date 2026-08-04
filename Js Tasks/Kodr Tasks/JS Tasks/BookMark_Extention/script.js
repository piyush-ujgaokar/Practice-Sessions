let titleInput = document.getElementById("title");
let urlInput = document.getElementById("url");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

showBookmarks();

btn.addEventListener("click", function () {

    let title = titleInput.value;
    let url = urlInput.value;

    if (title === "" || url === "") {
        alert("Please fill all fields");
        return;
    }

    if (!url.startsWith("http")) {
        alert("URL should start with http or https");
        return;
    }

    let bookmark = {
        title: title,
        url: url
    };

    bookmarks.push(bookmark);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    showBookmarks();

    titleInput.value = "";
    urlInput.value = "";
});

function showBookmarks() {

    list.innerHTML = "";

    for (let i = 0; i < bookmarks.length; i++) {

        let li = document.createElement("li");

        li.innerHTML =
            `<a href="${bookmarks[i].url}" target="_blank">
                ${bookmarks[i].title}
            </a>`;

        list.appendChild(li);
    }

}