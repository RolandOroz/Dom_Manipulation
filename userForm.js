
class userForm{
    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.address = '';
        this.dob = new Date(setDateFormat(2021,11,1).getTime());
    }
}

function setDateFormat(year, month, day) {
    const date = new Date();
    date.setUTCFullYear(year);
    date.setUTCMonth(month);
    date.setUTCDate(day);
    date.setUTCHours(0, 0, 0, 0);  //sets T all to 0
    return date;
}