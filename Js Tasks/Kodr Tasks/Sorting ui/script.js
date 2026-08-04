let list = document.getElementById("list");

let nameBtn = document.getElementById("nameBtn");
let ageBtn = document.getElementById("ageBtn");
let marksBtn = document.getElementById("marksBtn");

let students = [
    {
        name: "Rahul",
        age: 22,
        marks: 75
    },
    {
        name: "Aman",
        age: 20,
        marks: 90
    },
    {
        name: "Priya",
        age: 21,
        marks: 85
    },
    {
        name: "Sneha",
        age: 19,
        marks: 70
    }
];

showStudents();

function showStudents(){

    list.innerHTML = "";

    students.forEach(function(student){

        list.innerHTML += `
            <div class="student">
                <p>Name : ${student.name}</p>
                <p>Age : ${student.age}</p>
                <p>Marks : ${student.marks}</p>
            </div>
        `;

    });

}

nameBtn.addEventListener("click", function(){

    students.sort(function(a,b){
        return a.name.localeCompare(b.name);
    });

    showStudents();

});

ageBtn.addEventListener("click", function(){

    students.sort(function(a,b){
        return a.age - b.age;
    });

    showStudents();

});

marksBtn.addEventListener("click", function(){

    students.sort(function(a,b){
        return b.marks - a.marks;
    });

    showStudents();

});