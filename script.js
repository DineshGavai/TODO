let add_btn = document.getElementById("add-note-popup");
let add_popup = document.querySelector(".add-popup");
let cancel_btn = document.getElementById("cancel-btn");
let note_input = document.getElementById("note_input");
let get_text_btn = document.getElementById("add-note-btn");
let notes_div = document.querySelector(".notes");
let bin_div = document.querySelector(".bin");
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
  delete_icon.classList.add("icons");
  delete_icon.innerHTML += "<i class='fa-solid fa-xmark not-completed '></i>";
  delete_icon.innerHTML += "<i class='fa-solid fa-check completed'></i>";
  delete_icon.innerHTML += "<i class='fa-solid fa-trash-can delete-icon'></i>";
  newNote.appendChild(PElement);
  newNote.appendChild(delete_icon);
  note_box.appendChild(newNote);
  PElement.textContent = note_value;
  note_input.value = "";
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

sidebar_div.addEventListener("click", (e) => {
  if (e.target.className === "bin-btn") {
    notes_div.style.display = "none";
    bin_div.style.display = "block";
  } else if (e.target.className === "home-btn") {
    notes_div.style.display = "block";
    bin_div.style.display = "none";
  }
});

note_box.addEventListener("click", (e) => {
  const target = e.target;
  const notCompletedBtn = target.closest(".not-completed");
  const completedBtn = target.closest(".completed");
  const deleteIconBtn = target.closest(".delete-icon");
  const note = target.closest(".note");

  if (notCompletedBtn) {
    note.style.backgroundColor = "rgb(248, 65, 65)";
    console.log("Not completed button clicked");
  } else if (completedBtn) {
    note.style.backgroundColor = "#42db7a";
    console.log("Completed button clicked");
  } else if (deleteIconBtn) {
    console.log("Delete button clicked");
    note.remove();
  }
});
