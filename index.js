document.addEventListener("DOMContentLoaded", function () {
    let addBtn = document.getElementById("addBtn");
    let sortBtn = document.getElementById("sortBtn");
    let inputBox = document.getElementById("input-box");
    let taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", function () {
        let taskText = inputBox.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            inputBox.value = "";
        }
    });

    sortBtn.addEventListener("click", function () {
        sortTasks();
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("deleteBtn")) {
            deleteTask(event.target.parentNode);
        }
    });

    function addTask(taskText) {
       let li = document.createElement("li");
        li.textContent = taskText;

let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteBtn");

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }

    function sortTasks() {
       let tasks = Array.from(taskList.children);
        tasks.sort((a, b) => a.textContent.localeCompare(b.textContent));
        tasks.forEach(task => taskList.appendChild(task));
    }

    function deleteTask(task) {
        taskList.removeChild(task);
    }

});
// i did funtion for add and sort calling them by their id 
//when i added my list i did a  delete button where it  will appear with with the list that i added and delete when you no longer needing it   