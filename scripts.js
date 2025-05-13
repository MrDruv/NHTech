const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

function addtask() {
        const task = inputBox.value;
        if (!task){
            alert("please write down task");
            return;
        }
            
    const li =document.createElement("li");
    li.innerHTML = `
        <label>
        <input type="checkbox">
        <span>${task}</span>
        </label>
        <span class="edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>
        `;
    listContainer.appendChild(li);
    inputBox.value = ""

    const checkbox = li.querySelector("input");
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector("Span");
    const deleteBtn = li.querySelector(".delete-btn");

    checkbox.addEventListener("click", function (){
    li.classList.toggle("completed", checkbox.checked);
    updateCounters();
    
    });
    editBtn.addEventListener("click", function () {
    const update = prompt("Edit task: ", taskSpan.textContent);
    if (update !== null) {
        taskSpan.textContent = update;
        li.classList.remove("completed");
    }
    });
    deleteBtn.addEventListener("click", function() {
        if (confirm("Are you sure you want to delete this task?")){
            li.remove();
            updateCounters();
        }
    });
}




