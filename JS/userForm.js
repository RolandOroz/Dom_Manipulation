function setUpEventForm() {

    const createForm = () => {

        let formEl = document.createElement('form');
        formEl.className = 'form_dynamic';
        formEl.id = 'user_form'
        document.getElementById('userFormWrapper').append(formEl);


        let firstNameEl = document.createElement('input');
        firstNameEl.placeholder = 'First Name';
        firstNameEl.className = 'input_form_dynamic';
        firstNameEl.id = 'input_form_dynamic_firstName';
        firstNameEl.setAttribute('type', 'text');
        firstNameEl.setAttribute('name', 'firstName');
        //firstNameEl.setAttribute('onchange', 'onCh(this)');
        formEl.append(firstNameEl);

        let lastNameEl = document.createElement('input');
        lastNameEl.placeholder = 'Last Name';
        lastNameEl.className = 'input_form_dynamic';
        lastNameEl.id = 'input_form_dynamic_lastName';
        lastNameEl.setAttribute('type', 'text');
        lastNameEl.setAttribute('name', 'lastName');
        formEl.append(lastNameEl);

        let addressEl = document.createElement('input');
        addressEl.placeholder = 'Address';
        addressEl.className = 'input_form_dynamic';
        addressEl.id = 'input_form_dynamic_address';
        addressEl.setAttribute('type', 'text');
        addressEl.setAttribute('name', 'address');
        formEl.append(addressEl);

        let dobEl = document.createElement('input');
        dobEl.placeholder = 'DOB';
        dobEl.className = 'input_form_dynamic';
        dobEl.id = 'input_form_dynamic_dob';
        dobEl.setAttribute('type', 'text');
        dobEl.setAttribute('name', 'dob');
        formEl.append(dobEl);

        let btnCloseInputEl = document.createElement('button');
        btnCloseInputEl.className = 'close_btn_form';
        btnCloseInputEl.id = 'closes_btn_form';
        btnCloseInputEl.innerText = 'Close';
        formEl.append(btnCloseInputEl);

        let btnAddInputEl = document.createElement('button');
        btnAddInputEl.className = 'add_btn_form';
        btnAddInputEl.id = 'add_user_form';
        btnAddInputEl.innerText = 'Add';
        //btnCloseInputEl.setAttribute('onclick', 'addUser');

        formEl.append(btnAddInputEl);

        //event that closes the form display
        const divClose = document.querySelector('#closes_btn_form');
        divClose.addEventListener('click', e => {
            let remDiv = document.querySelector('#userFormWrapper');
            remDiv.setAttribute('style', 'display: none');
            //document.querySelector('#user_form').reset();
        })


        let inputArr;

        let addInput = document.querySelector('#add_user_form');
        addInput.addEventListener('click', e => {
            e.preventDefault();

            validateInputs();
        })


        const validateInputs = () => {

            let fName_input = document.querySelector('#input_form_dynamic_firstName');
            let lName_input = document.querySelector('#input_form_dynamic_lastName');
            let address_Input = document.querySelector('#input_form_dynamic_address');
            let dob_Input = document.querySelector('#input_form_dynamic_dob');
            // alert(fName_input + "\n"+ lName_input+  "\n"+address_Input+ "\n"+dob_Input)
            if (fName_input.value === '' || lName_input.value === '' || address_Input.value === '' || dob_Input.value === '') {

                fName_input.style.border = '1px solid red';
                lName_input.style.border = '1px solid red';
                address_Input.style.border = '1px solid red';
                dob_Input.style.border = '1px solid red';

                fName_input.placeholder = 'Required Field';
                lName_input.placeholder = 'Required Field';
                address_Input.placeholder = 'Required Field';
                dob_Input.placeholder = 'Required Field';
            } else {

                let table = document.querySelector('#tbody')
                let tr = document.createElement('tr');
                let td_1 = document.createElement('td');
                let td_2 = document.createElement('td');
                let td_3 = document.createElement('td');
                let td_4 = document.createElement('td');

                td_1.innerText = document.querySelector('#input_form_dynamic_firstName').value;
                td_2.innerHTML = document.querySelector('#input_form_dynamic_lastName').value;
                td_3.innerHTML = document.querySelector('#input_form_dynamic_address').value;
                td_4.innerHTML = document.querySelector('#input_form_dynamic_dob').value;

                tr.appendChild(td_1);
                tr.appendChild(td_2);
                tr.appendChild(td_3);
                tr.appendChild(td_4);

                table.appendChild(tr);
                formEl.reset();

            }
        }


    }
    createForm();
}


// function addInputToTable() {
//     let table = document.querySelector('#tbody')
//
//     let firstname = document.querySelector('#input_form_dynamic_firstName').value;
//     let tr = document.createElement('tr');
//     let td_1 = document.createElement('td');
//     let td_2 = document.createElement('td');
//     let td_3 = document.createElement('td');
//     let td_4 = document.createElement('td');
//
//     td_1.innerText = document.querySelector('#input_form_dynamic_firstName').input.value;
//     td_2.innerHTML = document.querySelector('#input_form_dynamic_lastName').value;
//     td_3.innerHTML = document.querySelector('#input_form_dynamic_address').value;
//     td_4.innerHTML = document.querySelector('#input_form_dynamic_dob').value;
//
//     tr.appendChild(td_1);
//     tr.appendChild(td_2);
//     tr.appendChild(td_3);
//     tr.appendChild(td_4);
//
//     table.appendChild(tr);
// }

function setDateFormat(year, month, day) {
    const date = new Date();
    date.setUTCFullYear(year);
    date.setUTCMonth(month);
    date.setUTCDate(day);
    date.setUTCHours(0, 0, 0, 0);  //sets T all to 0
    return date;
}


function onCh(val) {
    let x = document.querySelector('#input_form_dynamic_firstName');
    alert(val.value)
}

window.addEventListener('load', function () {
    setUpEventForm();
})