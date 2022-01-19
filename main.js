//sets the table
function setUpEventTable() {

    //table head names
    let tableHeadersNamesArray = ['First Name', 'Last Name', 'Address', 'DOB', ' '];

    //creating btn to append to body
    let buttonEl = document.createElement('button');
    buttonEl.id = 'add_btn_dynamic_table';
    buttonEl.setAttribute('onclick', 'divEl_showForm()');
    buttonEl.innerText= "Add";


    let divEl_btn_add = document.createElement('div');
    divEl_btn_add.id = 'div_btn_add';
    document.getElementsByTagName('body')[0].append(divEl_btn_add);
    divEl_btn_add.append(buttonEl);

    //creating div element to append the table
    let divEl = document.createElement('div');
    divEl.id = 'div_dynamic_table';
    document.getElementsByTagName('body')[0].append(divEl);


    function divEl_showForm() {
        divEl_show_form = document.createElement('div');

    }

    divEl_showForm.id = 'div_show_Form';
    // dynamic table creation (table header & table body)
    const createTable = () => {

        //creating table
        let tableEl = document.createElement('table');
        tableEl.className = 'table_dynamic';

        //creates table header
        let tableHeadEl = document.createElement('thead');
        tableHeadEl.id = 'thead_dynamic';

        //creates headers row
        let tableRowEl = document.createElement('tr');
        tableRowEl.className = 'tr_header_dynamic';

        //iterates over all strings in the tableHeadersNamesArray
        tableHeadersNamesArray.forEach(item => {
            let tableHeader = document.createElement('th');
            tableHeader.className = 'th_header_dynamic'
            tableHeader.innerText = item;
            tableRowEl.append(tableHeader);
        })
        //appends header row to table header
        tableHeadEl.append(tableRowEl);
        tableEl.append(tableHeadEl);

        //creates table body
        let tableBodyEl = document.createElement('tbody');
        tableBodyEl.className = "tbody_dynamic";
        tableEl.append(tableBodyEl);

        //appends table to div
        divEl.append(tableEl);


    }
    createTable();
//************************* end of dynamic table creation ************************
    let divEl_show_form = document.createElement('div');
    divEl_show_form.id = 'userFormWrapper';
    divEl_show_form.innerHTML = 'hi'  //todo --------------------------------------------- TEST
    document.getElementsByTagName('body')[0].append(divEl_show_form);
}

window.addEventListener('load', function () {
    setUpEventTable();
})



//**************************** ideas/ bin ***********************************

// function createTableHeadRow(arrOfHeaderNames, classTh, tr) {
//     arrOfHeaderNames.forEach((item) => {
//     let tableHeaderEl = document.createElement('th');
//         tableHeaderEl.className= classTh;
//         tableHeaderEl.innerText = item;
//         tr.append(tableHeaderEl);
//     })
// }

// let bodyEl = document.querySelector('body');
// let divEl = document.createElement('div');
// let tableEl = document.createElement('table');
// let thEl = document.createElement('th');
// let tdEl = document.createElement('td');
// let trEl = document.createElement('tr');
//
// divEl.className = 'table_container';
// thEl.className = 'table_Header';
//
//
// bodyEl.appendChild(divEl);
// divEl.appendChild(tableEl);
// tableEl.appendChild(thEl);
// thEl.innerHTML='adsad'
//


// class userInput {
//     constructor(id, firstName, lastName, address, dob) {
//
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.address = address;
//         this.dob = new Date(setDateFormat(1977,8,13)) ;
//
//     }
//
// }
// console.log(x= new table(1,'rolly', 'polly', 'Kletna 6'))
//
// //random date generator
// function setDateFormat(year, month, day) {
//     const date = new Date();
//     date.setFullYear(year);
//     date.setMonth(month);
//     date.setDate(day);
//     date.setUTCHours(0, 0, 0, 0);  //sets T all to 0
//     return date;
// }

//document.head.innerHTML('<script defer src = "main.js" >< /script>')

//creating table header names in an Array




















