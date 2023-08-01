const arrOfStudents = [];

function checkInputs() {
    const firstNameValue = document.getElementById('firstName').value;
    const surnameValue = document.getElementById('surname').value;
    const dabValue = document.getElementById('dab').value;

    const addButton = document.getElementById('addStudentButton');
    addButton.disabled = !(firstNameValue && surnameValue && dabValue);
}

document.getElementById('firstName').addEventListener("input", checkInputs);
document.getElementById('surname').addEventListener("input", checkInputs);
document.getElementById('dab').addEventListener("input", checkInputs);