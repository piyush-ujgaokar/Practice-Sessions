let task = document.getElementById("task");
let date = document.getElementById("date");
let status = document.getElementById("status");

let addBtn = document.getElementById("addBtn");

let filter = document.getElementById("filter");

let list = document.getElementById("list");

let tasks = [];

showTasks(tasks);

addBtn.addEventListener("click", function () {

    let obj = {
        task: task.value,
        date: date.value,
        status: status.value
    };

    tasks.push(obj);

    showTasks(tasks);

    task.value = "";
    date.value = "";
    status.value = "Pending";

});

filter.addEventListener("change", function () {

    let value = filter.value;

    list.innerHTML = "";

    let today = new Date();

    for(let i = 0; i < tasks.length; i++){

        let taskDate = new Date(tasks[i].date);

        if(value == "all"){

            addCard(tasks[i]);

        }

        else if(value == "upcoming"){

            if(taskDate >= today){

                addCard(tasks[i]);

            }

        }

        else if(value == "past"){

            if(taskDate < today){

                addCard(tasks[i]);

            }

        }

    }

});

function showTasks(arr){

    list.innerHTML = "";

    for(let i = 0; i < arr.length; i++){

        addCard(arr[i]);

    }

}

function addCard(item){

    let div = document.createElement("div");

    div.className = "card";

    div.innerHTML = `
        <h3>${item.task}</h3>
        <p>Date : ${item.date}</p>
        <p>Status : ${item.status}</p>
    `;

    list.appendChild(div);

}