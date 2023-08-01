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
        message = "Please enter a correct birth date";
    }

    if (!message.startsWith("-1")) {
        showErrorMessage(message);
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

}

function changeAllOfThemToEmpty() {
    document.getElementById('firstname').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('birth').value = '';
    document.getElementById('ielts').value = '';
    document.getElementById('maleRadio').value = '';
    document.getElementById('femaleRadio').value = '';
}

function getGender() {
    const inputs = document.getElementsByName('gender');

    for (const input of inputs)
        if (input.checked)
            return input.value;

    return null;
}

function showErrorMessage(message) {
    const errorMessage = document.getElementById('main');
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';

    setTimeout(function () {
        errorMessage.textContent = "Add new Student";
        errorMessage.style.color = 'black';
    }, 3000);
}

function isValidDate(dateString) {
    const dateObject = new Date(dateString);
    return !isNaN(dateObject.getTime());
}
