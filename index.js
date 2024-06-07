const modal = document.getElementById("data-modal");
const modalCloseBtn = document.getElementById("data-modal-close");
const modalCloseOverlay = document.getElementById("data-modal-overlay");
modalCloseBtn.addEventListener("click", () => {
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }
});

function studentsNames() {
  let students = ["vic", "stud"];
  function namesOfStud() {
    return JSON.stringify(students);
  }
  console.log(namesOfStud());
}
studentsNames();
//const let blocked const cannot be redeclared but let can be
//blocked means that you cannot acces thern out of function result to undefined
