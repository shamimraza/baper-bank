document.getElementById("withdraw-button").addEventListener('click', function(){
    const withdrawElement = document.getElementById("input-withdraw");
    const withdrawElementTotalString = withdrawElement.value;
    const newWithdrawAmount = parseFloat(withdrawElementTotalString);


    const previousAmount = document.getElementById("span-balance");
    const previousWithdrawString = previousAmount.innerText;
    const previousAmountTotal = parseFloat(previousWithdrawString);

    const totalAmount = previousAmountTotal + newWithdrawAmount;
    previousAmount.innerText = totalAmount;

    const balanceTotalElement = document.getElementById("span-total");
    const balanceTotalElementString = balanceTotalElement.innerText;
    const balanceNewElement = parseFloat(balanceTotalElementString);

    const finalTotalBalance = balanceNewElement - newWithdrawAmount;
    balanceTotalElement.innerText = finalTotalBalance;
    withdrawElement.value = "";
})