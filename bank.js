document.getElementById("btn-submit").addEventListener('click', function () {
    const inputDeposit = document.getElementById("input-deposit");
    const newDepositString = inputDeposit.value;
    const newDeposit = parseFloat(newDepositString)
    inputDeposit.value = "";

    const depositTotal = document.getElementById("input-amout");
    const previousDepositTotalAmountString =depositTotal.innerText;
    const previousDepositTotalAmount = parseFloat(previousDepositTotalAmountString);

    const currentAmount =  previousDepositTotalAmount + newDeposit;
    depositTotal.innerText=currentAmount;

    const balanceTotalElement = document.getElementById("span-total");
    const previousBalanceTotalAmountString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalAmountString);

    const currentBalanceTotal = previousBalanceTotalAmount + newDeposit;
    balanceTotalElement.innerText = currentBalanceTotal;   
});
