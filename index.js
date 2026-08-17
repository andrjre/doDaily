var top_create = document.getElementById("top_create");
var dropdown = document.getElementById("dropdown");
var submit = document.getElementById("submit");
var todoList = document.getElementById("todoList");
var count = 1;
var todos = [];

top_create.addEventListener("click", toggleRightDropdown);
submit.addEventListener("click", submitTodo);

function toggleRightDropdown() {
    dropdown.classList.toggle("open_right");
}

function closeDropdown() {
    dropdown.classList.remove("open");
    dropdown.classList.remove("open_right");
}

function renderTodo(item) {
    var todoEl = document.createElement("div");
    todoEl.classList.add("todo", `todo-${item.id}`);
    var todoBox = document.createElement("input");
    todoBox.type = "checkbox";
    todoBox.classList.add("todoBox", `todoBox-${item.id}`);
    todoBox.checked = item.completed;
    var todoText = document.createElement("div");
    todoText.classList.add("todoText", `todoText-${item.id}`);
    todoText.textContent = item.text;
    todoText.addEventListener("click", todoRemove);
    todoList.appendChild(todoEl);
    todoEl.appendChild(todoBox);
    todoEl.appendChild(todoText);

    todoBox.addEventListener("change", function(){
        var todo = todos.find(function(t){ return t.id === item.id; });
        todo.completed = this.checked;
        saveTodos();
    });

    todoBox.addEventListener("click", function(e){
        e.stopPropagation();
    });
}

function todoRemove() {
    this.parentElement.remove();
    todos = todos.filter(function(t) { return t.text !== this.textContent; }.bind(this));
    saveTodos();
}

function submitTodo() {
    var task_input = document.getElementById("task_input").value;
    if (!task_input) return;
    var item = { id: count++, text: task_input, completed: false };
    todos.push(item);
    renderTodo(item);
    closeDropdown();
    saveTodos();
    document.getElementById("task_input").value = "";
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);
}

function loadTodos() {
    var stored = localStorage.getItem("todos");
    if (stored) {
        todos = JSON.parse(stored);
        count = Math.max(...todos.map(t => t.id)) + 1;
        todos.forEach(renderTodo);
    } else {
    }
}

loadTodos();