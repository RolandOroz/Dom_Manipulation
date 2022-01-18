
let tableHeadersNamesArray =[];

function createTableHeaderNames(arr, typeAllNamesDividedByCommaAsString) {
    let string;
        string = typeAllNamesDividedByCommaAsString;

    let xArr =string.split(',')
    xArr.forEach((item) => {
        arr.push(item);
    })
}
createTableHeaderNames(tableHeadersNamesArray, "First Name,Last Name,Address,DOB, ");

//creating div element
let divEl = document.createElement('div');
divEl.id = 'div_dynamic_table';
document.getElementsByTagName('body')[0].append(divEl);

// dynamic table creation
const createTable = () => {

    let tableEl = document.createElement('table');
    tableEl.className='table_dynamic';

    let tableHeadEl = document.createElement('thead');
    tableHeadEl.id = 'thead_dynamic';

    let tableRowEl = document.createElement('tr');
    tableRowEl.className='tr_header_dynamic';

    tableHeadersNamesArray.forEach(item => {
         let tableHeader = document.createElement('th');
         tableHeader.innerText = item;
         tableRowEl.append(tableHeader);
     })

    tableHeadEl.append(tableRowEl);
    tableEl.append(tableHeadEl);

    divEl.append(tableEl);
}
createTable()




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




















