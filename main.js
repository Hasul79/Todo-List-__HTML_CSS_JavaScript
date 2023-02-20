const inputField = document.querySelector('.input-field textarea'),
todoLists = document.querySelector('.todoLists'),
pendingNum = document.querySelector('.pending-num'),
clearButton = document.querySelector('.clear-button');

// console.log(inputField,todoLists,pendingNum,clearButton)
function allTasks(){
    let tasks = document.querySelectorAll(".pending");
    // console.log(tasks);
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length; 

    let allLists = document.querySelectorAll(".list");
    if(allLists.length > 0){
        todoLists.style.marginTop = "20px";
        clearButton.style.pointerEvents = "auto";
        return;
    }
     todoLists.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
}



inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim();

    if(e.key === "Enter" && inputVal.length > 0) {
        //  console.log("valid");
         let liTag = `<li class="list pending" onclick="handleStatus(this)">
                      <input type="checkbox" />
                      <span class="task"> ${inputVal} </span>
                      <i class="uil uil-trash" onclick="deleteTask(this)"></i>
                      </li>`

    todoLists.insertAdjacentHTML("beforeend", liTag);
    inputField.value = "";
    allTasks()
    }
});

function handleStatus(e){
    const checkbox = e.querySelector("input");
    // console.log(checkbox);
    checkbox.checked = checkbox.checked ? false : true ;
    e.classList.toggle("pending");
    allTasks();
}

function deleteTask(e) {
    e.parentElement.remove() ;
    // console.log(e.parentElement);
    allTasks();
  
}

clearButton.addEventListener("click", () => {
    todoLists.innerHTML = ""
    allTasks()
})