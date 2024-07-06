function getRandomColour() {
  const colours = ["#FAFACE", "#D4D0F5", "#FDF9E0", "#CCF3F1", "#D1E9CF"];
  const randomIndex = Math.floor(Math.random() * colours.length);
  return colours[randomIndex];
}

let stickyNotes = document.querySelector(".sticky-notes");
let addNote = document.querySelector(".add-note");
let newNote = document.querySelector("#new-note");
let addButton = document.querySelector(".add-button");
let deleteButton = document.querySelector(".delete-button");

const createStickyNote = (noteToStick) => {
  let newCard = document.createElement("div");
  newCard.classList.add("sticky-note");
  newCard.style.backgroundColor = getRandomColour();

  let newCardContent = document.createElement("p");
  newCardContent.textContent = noteToStick;
  newCard.append(newCardContent);

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-button");
  newCard.append(deleteButton);
  stickyNotes.append(newCard);

  deleteButton.onclick = () => {
    newCard.remove();
  };
};

addButton.addEventListener("click", () => {
  if (newNote.value != "") {
    createStickyNote(newNote.value);
    newNote.value = "";
  }
});
