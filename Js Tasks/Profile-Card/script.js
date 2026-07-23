const createBtn = document.querySelector("#create-btn");
let form = document.querySelector(".form");
const closeBtn = document.querySelector("#close-btn");
const input = document.querySelector("input");
let formMain = document.querySelector("form");
let deleteBtn = document.querySelector(".delete");

let usersContainer = document.querySelector(".users-container");

let allusers = JSON.parse(localStorage.getItem("users")) || [];

const renderUi = () => {
  usersContainer.innerHTML = "";

  allusers.forEach((user, idx) => {
    usersContainer.innerHTML += `
        <div class="card">
                <div class="img">
                    <img    
                        src=${user.image}
                        alt="Profile Img"
                    />
                </div>

                <div class="content">
                    <h4>${user.name}</h4>
                    <p>${user.email}</p>
                    <p>${user.company}</p>
                </div>
            <button onclick="updateUser('${user.email}')" class="update">Update</button>
          <button onclick="deleteId('${user.email}')" class="delete">Delete</button>
        </div>`;
  });
};


let editEmail = null;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = e.target[0].value;
  let email = e.target[1].value;
  let company = e.target[2].value;
  let image = e.target[3].value;

  let user = {
    name,
    email,
    company,
    image,
  };

  if (editEmail === null) {
    allusers.push(user);
  } else {
    let index = allusers.findIndex((val) => {
      return val.email === editEmail;
    });

    allusers[index] = user;
    editEmail = null;
  }

  localStorage.setItem("users", JSON.stringify(allusers));
  renderUi();
 formMain.reset();
  form.style.display = "none";
});

createBtn.addEventListener("click", () => {
  form.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  form.style.display = "none";
});


const updateUser = (email) => {
  form.style.display = "flex";

  let user = allusers.find((val) => {
    return val.email === email;
  });

  formMain[0].value = user.name;
  formMain[1].value = user.email;
  formMain[2].value = user.company;
  formMain[3].value = user.image;

  editEmail = email;
};

const deleteId = (email) => {
  console.log("clicked delete.....", email);

  let filteredData = allusers.filter((val) => {
    return val.email !== email;
  });

  allusers = filteredData;

  localStorage.setItem("users", JSON.stringify(filteredData));

  renderUi();
};

renderUi();
