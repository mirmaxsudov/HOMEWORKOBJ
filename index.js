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

function addNewStudent() {
    const firstName = document.getElementById('firstName').value;
    const surname = document.getElementById('surname').value;
    const birth = document.getElementById('dab').value;
    const ielts = document.getElementById('ielts').value;

    const newStudent = {
        firstName: firstName,
        surname: surname,
        birth: birth,
        ielts: ielts
    };

    arrOfStudents.push(newStudent);

    console.log(arrOfStudents);

    document.getElementById('firstName').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('dab').value = '';
    document.getElementById('ielts').value = '';

    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.querySelector('h1');
    displayElement.textContent = "List of students: " + JSON.stringify(arrOfStudents);
}