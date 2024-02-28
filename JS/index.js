const name = document.getElementById('name');
const age = document.getElementById('age');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const button = document.getElementById('button');
const form = document.getElementById('form');

function validate(item) {
    if (!name.value) {
        alert("Name bo'sh")
        name.focus();
        return false;
    }

    if (Number(name.value)) {
        alert('Name raqam bolishi mumkin emas');
        name.focus()
        return false
    }

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    let arr_name = Array.from(name.value);
    let res = arr_name.some((v) => {
        return v =! numbers
        console.log(v);
    });

    if (res == 'false') {
        alert(`Name orasida raqam ishtirok etmasligi kerak`);
    }

    

    return true
};

button && button.addEventListener('click', function(e) {
    e.preventDefault();

    if (validate()) {
        alert('Hammasi joyida');
    }
} )