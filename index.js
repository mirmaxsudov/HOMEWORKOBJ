const arrOfStudents = [];

function checkInputs() {
    const firstNameValue = document.getElementById('firstname').value;
    const surnameValue = document.getElementById('surname').value;
    const birthValue = document.getElementById('birth').value;

    const addButton = document.getElementById('addStudentButton');
    addButton.disabled = !(firstNameValue && surnameValue && birthValue && getGender());
}

document.getElementById('firstname').addEventListener("input", checkInputs);
document.getElementById('surname').addEventListener("input", checkInputs);
document.getElementById('birth').addEventListener("input", checkInputs);
document.getElementById('maleRadio').addEventListener("input", checkInputs);
document.getElementById('femaleRadio').addEventListener("input", checkInputs);

function addNewStudent() {

    const name = document.getElementById('firstname').value;
    const surname = document.getElementById('surname').value;
    const gender = getGender();

    const ieltsScore = document.getElementById('ielts').value;
    const birthDate = new Date(document.getElementById('birth').value);

    let message = "-1";

    if (ieltsScore > 9 || ieltsScore < 0) {
        message = "Please enter a correct IELTS score";
        document.getElementById('ielts').value = '';
    }
    if (name === null) {
        message = "Please enter a correct name";
        document.getElementById('firstname').value = "";
    } else if (surname === null) {
        message = "Please enter a correct surname";
        document.getElementById('surname').value = "";
    } else if (gender === null) {
        message = "Select one of two genders";
        document.getElementById('makeRadio').checked = false;
        document.getElementById('makeRadio').checked = false;
    } else if (birthDate > new Date()) {
        document.getElementById('birth').value = '';
        message = "Please enter a correct birth date";
    }

    if (!message.startsWith("-1")) {
        showMessage(message, false);
        return;
    }

    const newStudent = {
        firstName: name,
        surname: surname,
        birth: birthDate,
        IELTSScore: ieltsScore,
        gender: gender,
    }

    arrOfStudents.push(newStudent);
    changeAllOfThemToEmpty();
    showMessage("Added new Student successfully", true);
}

function changeAllOfThemToEmpty() {
    document.getElementById('firstname').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('birth').value = '';
    document.getElementById('ielts').value = '';
    document.getElementById('maleRadio').checked = false;
    document.getElementById('femaleRadio').checked = false;
    document.getElementById('addStudentButton').disabled = true;
}

function getGender() {
    const inputs = document.getElementsByName('gender');

    for (const input of inputs)
        if (input.checked)
            return input.value;

    return null;
}

function showMessage(message, isError = false) {
    const shownMessage = document.getElementById('main');
    shownMessage.textContent = message;

    if (isError) {
        shownMessage.style.color = 'green';
    } else {
        shownMessage.style.color = 'red';
    }


    setTimeout(function () {
        shownMessage.textContent = "Add new Student";
        shownMessage.style.color = 'black';
    }, 3000);
}