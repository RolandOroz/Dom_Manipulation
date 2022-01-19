function showForm() {
    let elem = document.getElementById('userFormWrapper');
    if (elem.style.display === 'none') {
        elem.style.display = 'block';
    }
    else {
        elem.style.display = 'none';
    }
}