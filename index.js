var create = document.getElementById("create");
var dropdown = document.getElementById("dropdown");

create.addEventListener("click",toggleDropdown);

function toggleDropdown(){   
    create.classList.toggle("open");
    dropdown.classList.toggle("open");
}