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

    if (ielts < 0 || ielts > 9) {
        document.querySelector('h1').innerHTML = "Please enter a valid IELTS score";
        document.getElementById('ielts').value = '';
        return;
    } else if (firstName == null || surname == null) {
        document.querySelector('h1').innerHTML = "Please enter a correctly";
        document.getElementById('firstName').value = '';
        document.getElementById('surname').value = '';
        return;
    } else {
        const bd = new Date(birth);
        const ld = new Date();

        if (bd > ld) {
            document.querySelector('h1').innerHTML = "Please enter a correct birth date";
            document.getElementById('dab').value = '';
            return;
        }
    }

    const newStudent = {
        firstName: firstName,
        surname: surname,
        birth: birth,
        ielts: ielts
    };

    arrOfStudents.push(newStudent);

    changeAllToEmpty();
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.querySelector('h1');
    displayElement.textContent = "List of students: " + JSON.stringify(arrOfStudents);
}

function changeAllToEmpty() {
    document.getElementById('firstName').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('dab').value = '';
    document.getElementById('ielts').value = '';
}