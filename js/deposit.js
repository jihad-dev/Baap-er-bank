// step 1 //
document.getElementById('btn-deposit').addEventListener('click',function(){

// step 2 //
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountstring = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountstring);
     // step 3 //
     const depositTotalElement = document.getElementById('deposit-total');
     const previousDepositTotalstring = depositTotalElement.innerText;
     const previousDepositTotal = parseFloat(previousDepositTotalstring);
     const currentDepositTotal = previousDepositTotal + newDepositAmount;
     depositTotalElement.innerText = currentDepositTotal;

    //  

    const balanceTotalElement = document.getElementById('balance-total');
    const previousbalanceTotalString = balanceTotalElement.innerText;
    const previousbalanceTotal = parseFloat(previousbalanceTotalString);
    // 
    const currentbalanceTotal = previousbalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentbalanceTotal;
     // step 7 //
     depositField.value = '';
})