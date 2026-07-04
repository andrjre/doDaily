var create = document.getElementById("create");
var top_create = document.getElementById("top_create");
var dropdown = document.getElementById("dropdown");
var submit = document.getElementById("submit");
var todoList = document.getElementById("todoList");
var content = document.getElementById("content");
var firstSubmit = true;


create.addEventListener("click",toggleDropdown);
top_create.addEventListener("click",toggleDropdown);
submit.addEventListener("click",submitTodo);

function toggleDropdown(){   
    create.classList.toggle("open");
    dropdown.classList.toggle("open");
}

function submitTodo(){
    
    var task_input = document.getElementById("task_input").value;
    var todo = document.createElement("div");
        todo.id = "todo"
        todo.class = "todo";
    var todoBox = document.createElement("input");
        todoBox.type = "checkbox";
    var todoText = document.createElement("div");
    todoText.textContent = task_input;
    todoList.appendChild(todo);
    todo.appendChild(todoBox)
    todo.appendChild(todoText);
    toggleDropdown();
    if(firstSubmit == true){
        movePlus();
    }
    firstSubmit = false;
}



function movePlus(){
    top_create.classList.toggle("open");
    create.classList.toggle("moved");
}