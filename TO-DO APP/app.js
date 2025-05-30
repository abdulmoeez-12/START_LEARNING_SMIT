var listItem = document.getElementById("listItem");

function addNote() {
    var input = document.getElementById("input");

    if (!input.value) {
        alert("Input field is required!");
        return;
    }

    // Ek naya <li> banao
    var liElement = document.createElement("li");
    liElement.className = "list"
    liElement.innerHTML = input.value;
    liElement.classList.add("my-text-style");

    // Edit button banao
    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.setAttribute("onClick", "editTodo(this)");
    editButton.classList.add("editbtn");

    // Delete button banao
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("onClick", "deleteTodo(this)");
    deleteBtn.classList.add("deletebtn");

    // Complete button banao
    var completeBtn = document.createElement("button");
    completeBtn.innerHTML = "Completed";
    completeBtn.setAttribute("onClick", "completeTodo(this)");
    completeBtn.classList.add("completeBtn");

    // Sab buttons ko li ke andar daalo

    liElement.appendChild(editButton);
    liElement.appendChild(deleteBtn);
    liElement.appendChild(completeBtn);

    // console.log("liElement", liElement);

    // Ab liElement ko listItem (yaani ul) ke andar daalo

    listItem.appendChild(liElement);

    // Input ko khaali karo
    input.value = "";

}


// mene ab edit btn per program dala

function editTodo(editbtn) {
    var editValue = prompt(
        "Edit your Value",
        editbtn.previousSibling.textContent
    );

    if (!editValue) {
        alert("Enter edit value");
        return;
    }

    editbtn.previousSibling.textContent = editValue

}

// mene ab delete btn per program dala

function deleteTodo(deletBtn) {

    // console.log("deleteTodo()" , deletBtn.parentNode);
    deletBtn.parentNode.remove();
}

// ab delete all per program dall dia

function deleteNote() {
    listItem.innerHTML = "";
}

// ab complete kar diya

function completeTodo(complete){
complete.parentNode.className = "inline"

}












