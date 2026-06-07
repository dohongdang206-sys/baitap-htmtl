const form = document.getElementById("todoform");
const input = document.getElementById("todoinput");
const list = document.getElementById("todolist");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const task = input.value.trim();
    if (task) {
        const li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
        input.value = "";
    }
});
const deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach(button => {
    button.addEventListener("click", function() {
        const li = this.parentElement;
        li.remove();
    });
});
li.appendChild(textSpan);
