document.getElementById("btn-submit").addEventListener('click', function () {
    const inputDeposit = document.getElementById("input-deposit");
    const deposit = inputDeposit.value;
    inputDeposit.value = "";
    const depositTotal = document.getElementById("input-amout");
    const depositTotalAmount =depositTotal.innerText;
    depositTotal.innerText=deposit;
})