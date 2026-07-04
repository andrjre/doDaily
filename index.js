var create = document.getElementById("create");
var top_create = document.getElementById("top_create");
var dropdown = document.getElementById("dropdown");
var submit = document.getElementById("submit");
var todoList = document.getElementById("todoList");
var content = document.getElementById("content");
var firstSubmit = true;
var count = 1;


create.addEventListener("click",toggleDropdown);
top_create.addEventListener("click",toggleRightDropdown);
submit.addEventListener("click",submitTodo);

function toggleDropdown(){   
    create.classList.toggle("open");
    dropdown.classList.toggle("open");
}

function toggleRightDropdown(){
    create.classList.toggle("open");
    dropdown.classList.toggle("open_right");
}

function submitTodo(){
    
    var task_input = document.getElementById("task_input").value;

    var todo = document.createElement("div");
        todo.id = "todo"
        todo.classList.add(`todo.${count}`);
    var todoBox = document.createElement("input");
        todoBox.type = "checkbox";
        todoBox.id = "todoBox";
        todoBox.classList.add(`todoBox.${count}`);
    var todoText = document.createElement("div");
        todoText.id = "todoText";
        todoText.classList.add(`todoText.${count}`);
        count++;

    todoText.textContent = task_input;
    todoList.appendChild(todo);
    todo.appendChild(todoBox)
    todo.appendChild(todoText);

    if(firstSubmit == true){
        toggleRightDropdown();
        toggleDropdown();
        movePlus();
    }
    
    toggleRightDropdown();
    firstSubmit = false;
}

function movePlus(){
    top_create.classList.toggle("open");
    create.classList.toggle("moved");
}