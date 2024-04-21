function btnShow() {
  let modalShow = document.querySelector(".modal-show");
  modalShow.style.display = "flex";
}
function changeMode() {
  let colorX = document.querySelectorAll(".colorX");
  let colorBtn = document.querySelectorAll(".colorBtn");
  let colorInput = document.querySelectorAll(".colorInput");
  let modalShow = document.querySelectorAll(".box-modal");
  let iconMode = document.querySelector("#icon-mode");
  let body = document.querySelector("body");
  let navbar = document.querySelector(".navbar");
  let iconTodoList = document.querySelector(".logoname");
  let btnContainer = document.querySelector(".btn-mode-container");
  let listAdd = document.querySelector(".semuaList");
  if (iconMode.classList.contains("fa-sun")) {
    //MODE TERANG
    iconMode.classList.remove("fa-sun");
    iconMode.classList.add("fa-moon");
    iconMode.style.color = "#1871C1";
    listAdd.style.color = "#000";
    btnContainer.style.borderColor = "#1871C1";
    body.style.backgroundColor = "#F8F9FB";
    iconTodoList.style.color = "#0C1E22";
    navbar.style.backgroundColor = "#FFFFFF";
    colorX.forEach(function(element) {
    element.style.color = "#000";
    });
    modalShow.forEach(function(box) {
      box.style.backgroundColor = "#faf9f9ee";
      box.style.color = "#000";
    });
    colorInput.forEach(function(wInput){
      wInput.style.backgroundColor = "#e4e4e4e9";
      wInput.style.color ="#000";
    });
    colorBtn.forEach(function(colorBtn){
      colorBtn.style.color = "#00c13fbf";
    });
   /// listAdd.forEach(function(element) {
     // element.style.color = "#000";
  //  });
  } else {
    ///MODE GELAP
    iconMode.classList.remove("fa-moon");
    iconMode.classList.add("fa-sun");
    iconMode.style.color = "rgb(243,251,58)";
    listAdd.style.color = "#fff";
    btnContainer.style.borderColor = "rgb(243,251,58)";
    body.style.backgroundColor = "#0C1E22";
    iconTodoList.style.color = "#fff";
    navbar.style.backgroundColor = "#122D34";
    colorX.forEach(function(element) {
    element.style.color = "#fff";
    });
    modalShow.forEach(function(box){
      box.style.backgroundColor = "#1A1B1F";
      box.style.color = "#fff";
    });
    colorInput.forEach(function(wInput){
      wInput.style.backgroundColor = "#25262B";
    wInput.style.color ="#fff";
    });
    colorBtn.forEach(function(colorBtn){
      colorBtn.style.color = "#fff";
    });
  }
 
}
function deleteTask(button) {
  let listItem = button.parentElement.parentElement;
  listItem.remove();
}
function editTask(button) {
  
  let listItem = button.parentElement.parentElement;
  let listText = listItem.querySelector("#list-text");
  originalListItemText = listText.innerText;
  let inputEditText = document.querySelector("#input-Edit-Task");
  inputEditText.value = originalListItemText;
  let modalEditShow = document.querySelector(".modal-edit");
  modalEditShow.style.display = "flex";
  listItem.remove();
  
}

function changeIcon(button) {
  let listItem = button.closest(".listAdd");
  let icon = button.querySelector("#ceklis-icon");
  let listText = listItem.querySelector("#list-text");
  if (icon.classList.contains("fa-circle-check")) {
    icon.classList.remove("fa-circle-check");
    icon.classList.add("fa-o");
    listText.style.textDecoration = "none";
    listText.style.fontStyle = "normal";
    icon.style.color = " #5b5b5b";
  } else {
    icon.classList.remove("fa-o");
    icon.classList.add("fa-circle-check");
    listText.style.textDecoration = "line-through";
    icon.style.color = "#1871C1";
    listText.style.fontStyle = "italic";
  }
}
function simpan() {
  let inputText = document.querySelector("#inputTask");

  if (inputText.value === "") {
    alert("error");
  } else {
    // Sanitize user input
    let sanitizedInput = inputText.value.replace(/[<>&]/g, '');
    let listContainer = document.querySelector("ul");
    let newListItem = document.createElement("li");
    let listText = document.createElement("p");
    listText.textContent = sanitizedInput;

    let listActions = document.createElement("div");
    listActions.classList.add("listAdd");
    listActions.innerHTML = `
      <button class="ceklis-btn" onclick="changeIcon(this)">
        <i id="ceklis-icon" class="ceklis fa-solid fa-o fa-2x"></i>
      </button>
      <p id="list-text">${sanitizedInput}</p>
      <button class="edit-btn" onclick="editTask(this)">
        <i class="edit fa fa-pencil fa-xl" aria-hidden="true"></i>
      </button>
      <button class="delete-btn" onclick="deleteTask(this)">
        <i class="delete fa fa-trash fa-xl" aria-hidden="true"></i>
      </button>
    `;

    newListItem.appendChild(listActions);
    listContainer.appendChild(newListItem);
    inputText.value = "";
    batal();
  }
}

function saveEditTask(button) {
  let modalEditShow = document.querySelector(".modal-edit");
  let inputText = document.querySelector("#input-Edit-Task");

  // Sanitize user input
  let sanitizedInput = inputText.value.replace(/[<>&]/g, '');

  let listContainer = document.querySelector("ul");
  let newListItem = document.createElement("li");
  let listText = document.createElement("p");
  listText.textContent = sanitizedInput;

  let listActions = document.createElement("div");
  listActions.classList.add("listAdd");
  modalEditShow.style.display = "none";
  listActions.innerHTML = `
    <button class="ceklis-btn" onclick="changeIcon(this)">
      <i id="ceklis-icon" class="ceklis fa-solid fa-o fa-2x"></i>
    </button>
    <p id="list-text">${sanitizedInput}</p>
    <button class="edit-btn" onclick="editTask(this)">
      <i class="edit fa fa-pencil fa-xl" aria-hidden="true"></i>
    </button>
    <button class="delete-btn" onclick="deleteTask(this)">
      <i class="delete fa fa-trash fa-xl" aria-hidden="true"></i>
    </button>
  `;

  newListItem.appendChild(listActions);
  listContainer.appendChild(newListItem);
  inputText.value = "";
  batal();
}

function batal() {
  let modalShow = document.querySelector(".modal-show");
  modalShow.style.display = "none";
  originalListItemText = "";
}

function cancelEdit() {
  let inputEditText = document.querySelector("#input-Edit-Task");
  let modalEditShow = document.querySelector(".modal-edit");

  // Kosongkan input dan sembunyikan modal
  inputEditText.value = "";
  modalEditShow.style.display = "none";

  // Buat kembali list item dan tambahkan ke dalam list
  let listContainer = document.querySelector("ul");
  let newListItem = document.createElement("li");
  let listText = document.createElement("p");
  listText.id = "list-text";

  // Sanitize originalListItemText before setting
  let sanitizedOriginal = originalListItemText.replace(/[<>&]/g, '');
  
  listText.innerText = sanitizedOriginal;

  // Tambahkan tombol ceklis, edit, dan delete
  let listActions = document.createElement("div");
  listActions.classList.add("listAdd");
  listActions.innerHTML = `
    <button class="ceklis-btn" onclick="changeIcon()">
      <i id="ceklis-icon" class="ceklis fa-solid fa-o fa-2x"></i>
    </button>
    <p id="list-text">${sanitizedOriginal}</p>
    <button class="edit-btn" onclick="editTask(this)">
      <i class="edit fa fa-pencil fa-xl" aria-hidden="true"></i>
    </button>
    <button class="delete-btn" onclick="deleteTask(this)">
      <i class="delete fa fa-trash fa-xl" aria-hidden="true"></i>
    </button>
  `;
  // Gabungkan elemen ke dalam list item
  newListItem.appendChild(listActions);

  // Tambahkan list item ke dalam container
  listContainer.appendChild(newListItem);
}

