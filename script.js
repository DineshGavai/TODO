let add_btn = document.getElementById("add-note-popup");
let add_popup = document.querySelector(".add-popup");
let cancel_btn = document.getElementById("cancel-btn");
let note_input = document.getElementById("note_input");
let get_text_btn = document.getElementById("add-note-btn");
let note_box = document.querySelector(".notes-box");
let show_sidebar = document.getElementById("side-bar-show-btn");
let hide_sidebar = document.getElementById("hide-sidebar");
let sidebar_div = document.querySelector(".sidebar");

add_btn.addEventListener("click", () => {
  add_popup.classList.add("open");
  note_input.focus();
});
cancel_btn.addEventListener("click", () => {
  add_popup.classList.remove("open");
});

const add_note = () => {
  const note_value = note_input.value;
  const newNote = document.createElement("div");
  newNote.classList.add("note");
  const PElement = document.createElement("p");
  PElement.setAttribute("contenteditable", "true");
  PElement.style.outline = "none";
  const delete_icon = document.createElement("div");
  delete_icon.classList.add("delete-icon");
  delete_icon.innerHTML +=
    "<button id='delete-icon'><i class='fa-solid fa-trash-can'></i></button>";
  let delete_note_icon = document.getElementById("delete-icon");
  console.log(delete_note_icon);
  newNote.appendChild(PElement);
  newNote.appendChild(delete_icon);
  note_box.appendChild(newNote);
  note_input.value = "";
  PElement.textContent = note_value;
};

get_text_btn.addEventListener("click", () => {
  add_note();
  add_popup.classList.remove("open");
});

show_sidebar.addEventListener("click", () => {
  console.log("hello world");
  sidebar_div.classList.add("open");
});
hide_sidebar.addEventListener("click", () => {
  sidebar_div.classList.remove("open");
});

note_box.addEventListener("click", (e) => {
  if (e.target.tagName === "I") {
    e.target.parentElement.parentElement.parentElement.remove();
  }
  if (e.target.tagName === "DIV") {
    console.log(e);
    console.log("hell");
  }
});
