
const createForm = () => {

    let formEl = document.createElement('form');
    formEl.className = 'form_dynamic';
    formEl.id = 'user_form'
    document.getElementById('userFormWrapper').append(formEl);

    let firstNameEl = document.createElement('input');
    firstNameEl.placeholder = 'First Name';
    firstNameEl.className = 'input_form_dynamic';
    firstNameEl.setAttribute('type', 'text');
    firstNameEl.setAttribute('name', 'firstName');
    formEl.append(firstNameEl);

    let lastNameEl = document.createElement('input');
    lastNameEl.placeholder = 'Last Name';
    lastNameEl.className = 'input_form_dynamic';
    lastNameEl.setAttribute('type', 'text');
    lastNameEl.setAttribute('name', 'lastName');
    formEl.append(lastNameEl);

    let addEl = document.createElement('input');
    addEl.placeholder = 'Address';
    addEl.className = 'input_form_dynamic';
    lastNameEl.setAttribute('type', 'text');
    lastNameEl.setAttribute('name', 'address');
    formEl.append(addEl);

    let dobEl = document.createElement('input');
    dobEl.placeholder = 'DOB';
    dobEl.className = 'input_form_dynamic';
    dobEl.setAttribute('type', 'text');
    dobEl.setAttribute('name', 'dob');
    formEl.append(dobEl);


}

function setDateFormat(year, month, day) {
    const date = new Date();
    date.setUTCFullYear(year);
    date.setUTCMonth(month);
    date.setUTCDate(day);
    date.setUTCHours(0, 0, 0, 0);  //sets T all to 0
    return date;
}

window.addEventListener('load', function () {
    createForm();
})