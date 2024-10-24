const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You Must Write Something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = ''; // to make the field empty;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // to add the mark of delete (X) beside the task;
        li.appendChild(span);
        saveData();
    }
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") { // to target the parent of 'span' it's <li> tag and remove it;
        e.target.parentElement.remove(); // remove li;
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
