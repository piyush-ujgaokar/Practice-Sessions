let search = document.getElementById("search");
let products = document.getElementById("products");

let data = [
    {
        name: "Books",
        category: "Sheryians"
    },
    {
        name: "Piyush",
        category: "Man"
    },
    {
        name: "Vedant",
        category: "Cartoon"
    },
    {
        name: "Doomsday",
        category: "Movie"
    },
    {
        name: "DOremon",
        category: "Dooe"
    }
];

showProducts(data);

search.addEventListener("input", function () {

    let text = search.value.toLowerCase();

    products.innerHTML = "";

    for(let i = 0; i < data.length; i++){

        if(
            data[i].name.toLowerCase().includes(text) ||
            data[i].category.toLowerCase().includes(text)
        ){

            let card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <h3>${data[i].name}</h3>
                <p>${data[i].category}</p>
            `;

            products.appendChild(card);

        }

    }

});

function showProducts(arr){

    products.innerHTML = "";

    for(let i = 0; i < arr.length; i++){

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${arr[i].name}</h3>
            <p>${arr[i].category}</p>
        `;

        products.appendChild(card);

    }

}