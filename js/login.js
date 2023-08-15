document.getElementById("btn-submit").addEventListener('click', function () {

    const inputField = document.getElementById("input-email")
    const email = inputField.value;
    const inputPassword = document.getElementById("input-pass");
    const passWord = inputPassword.value;
    if (email === 'shamim@gmail.com' && passWord === 'shamim') {
        window.location.href="bank.html"
    }
    else {
       alert("pagol barar bal right input laga")
    }
})