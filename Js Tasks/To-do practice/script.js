let inp=document.querySelector('#inp')
let addBtn=document.querySelector('#add')
let container=document.querySelector('.container')


addBtn.addEventListener('click',()=>{
    let task=inp.value

    if(task.trim() === ""){
        alert("please add input")
        return;
    }

    container.innerHTML +=`<div class="list">
          <h4>${task}</h4>
          <button id="del">Delete</button>
        </div>`

        inp.value=""
})