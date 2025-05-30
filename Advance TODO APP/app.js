var parentCard = document.getElementById("parent-of-card");


function addItem() {
 var inputBox1 = document.getElementById("inputBox1");
 var inputBox2 = document.getElementById("inputBox2");   

 if (!inputBox1.value || !inputBox2.value){
    alert("Required field are missing");
    return;
 }

 var cardAdd = ` <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">
      ${inputBox1.value} 
      <!-- Title Edit Icon -->
      <i class="fas fa-edit" onclick="editTitle(this)" style="cursor: pointer; margin-left: 10px;"></i>
    </h5>
    <p class="card-text">${inputBox2.value}</p>

    <div style="display: flex; justify-content: space-between; margin-top: 10px;">
      <!-- Edit Button Icon -->
      <button class="btn btn-success" onclick="editBtn(this)">
        <i class="fas fa-pencil-alt"></i> Edit
      </button>
      <!-- Delete Button Icon -->
      <button class="btn btn-danger" onclick="deleteBtn(this)">
        <i class="fas fa-trash-alt"></i> Delete
      </button>
    </div>
  </div>
</div>`
   
      console.log(cardAdd);
      parentCard.innerHTML += cardAdd

}


function editTitle(editThis){
   var editBtnStorage = editThis.closest('.card-body');
   var getParentTitle = editBtnStorage.querySelector('.card-title')

   var editBtnValue = prompt("Enter Your Title" , getParentTitle.innerHTML )
   getParentTitle.innerHTML = editBtnValue;
   return;
}


function editBtn(titleThis){
   var titleBtnStorage = titleThis.closest('.card-body');
   var titleParentTitle = titleBtnStorage.querySelector('.card-text')

   var editBtnValue = prompt("Enter Your Title" , titleParentTitle.innerHTML )
   titleParentTitle.innerHTML = editBtnValue;
   return;
}

function deleteBtn(deletThis){
   var deletingStart = deletThis.closest('.card');
   deletingStart.remove()
}

function deleteAll() {
   parentCard.innerHTML = "";
}