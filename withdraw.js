document.getElementById("withdraw-button").addEventListener('click', function(){
    const withdrawElement = document.getElementById("input-withdraw");
    const withdrawElementTotalString = withdrawElement.value;
    const newWithdrawAmount = parseFloat(withdrawElementTotalString);
    withdrawElement.value = "";

    if(isNaN(newWithdrawAmount)){
        alert("please provide a valid number")
        return;
    }
    
    const previousAmount = document.getElementById("span-balance");
    const previousWithdrawString = previousAmount.innerText;
    const previousAmountTotal = parseFloat(previousWithdrawString);

    const balanceTotalElement = document.getElementById("span-total");
    const balanceTotalElementString = balanceTotalElement.innerText;
    const balanceNewElement = parseFloat(balanceTotalElementString);

    if(newWithdrawAmount > balanceNewElement){
        alert("bank a tk nai");
        return;
    }else{

    }
    const totalAmount = previousAmountTotal + newWithdrawAmount;
    previousAmount.innerText = totalAmount;

    const finalTotalBalance = balanceNewElement - newWithdrawAmount;
    balanceTotalElement.innerText = finalTotalBalance;
    
})