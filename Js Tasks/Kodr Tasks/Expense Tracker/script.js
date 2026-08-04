let nameInput = document.getElementById("name");
let amountInput = document.getElementById("amount");
let dateInput = document.getElementById("date");
let addBtn = document.getElementById("addBtn");

let month = document.getElementById("month");
let list = document.getElementById("list");
let total = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

showExpenses();

addBtn.addEventListener("click", function(){

    if(nameInput.value=="" || amountInput.value=="" || dateInput.value==""){
        return;
    }

    let expense={
        name:nameInput.value,
        amount:Number(amountInput.value),
        date:dateInput.value
    };

    expenses.push(expense);

    localStorage.setItem("expenses",JSON.stringify(expenses));

    nameInput.value="";
    amountInput.value="";
    dateInput.value="";

    showExpenses();

});

month.addEventListener("change",function(){
    showExpenses();
});

function showExpenses(){

    list.innerHTML="";

    let sum=0;

    let selectedMonth=month.value;

    expenses.forEach(function(expense){

        let expenseMonth=expense.date.slice(5,7);

        if(selectedMonth=="all" || selectedMonth==expenseMonth){

            list.innerHTML+=`
                <div class="item">
                    <p><b>${expense.name}</b></p>
                    <p>₹${expense.amount}</p>
                    <p>${expense.date}</p>
                </div>
            `;

            sum+=expense.amount;

        }

    });

    total.innerHTML="Total : ₹"+sum;

}