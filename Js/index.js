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

    const ieltsScore = +document.getElementById('ielts').value;
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

    displayArray();
    arrOfStudents.push(newStudent);
    displayArray();
    changeAllOfThemToEmpty();
    showMessage("Added new Student successfully", true);
}

function displayArray() {
    const parentDiv = document.getElementById('parentDiv');
    parentDiv.innerHTML = "";

    arrOfStudents.forEach((student) => {
        const imgSrc = student.gender === 'male' ? 'Photos/Boy.png' : 'Photos/Girl.jpg';

        parentDiv.innerHTML += `
    <div id="carouselExampleControls" class="carousel" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="card">
                    <div class="img-wrapper">
                        <img src="${imgSrc}" alt="404">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${student.firstName + "  " + student.surname}</h5>
                        <h5 class="card-title">${calculateAge(new Date(student.birth))} age</h5>
                        <p class="card-text">This student's IELTS score is ${student.IELTSScore}</p>
                        <p>${student.gender}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    });
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

function calculateAge(birthDate) {
    const currentDate = new Date();
  
    let age = currentDate.getFullYear() - birthDate.getFullYear();
  
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      age--;
    }
  
    return age;
  }
  
  