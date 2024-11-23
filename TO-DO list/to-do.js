const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;

        // Add delete button
        let span = document.createElement("span");
        span.innerHTML = '\u00D7'; // Unicode for ×
        span.setAttribute("title", "Delete task");
        li.appendChild(span);

        listContainer.appendChild(li);
        saveData();
    }
    inputBox.value = "";
}

// Event listener for task actions
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

// Save data to localStorage
function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

// Retrieve and display saved tasks
function showTask() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        listContainer.innerHTML = storedTasks;
    }
}

// Initialize tasks on page load
showTask();
