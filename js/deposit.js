document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newdepositamountString = depositField.value;
    const newdepositamount = parseFloat(newdepositamountString);
    //
    depositField.value = '';
    //
    const deposittotalElement = document.getElementById('deposit-total');
    const previousdeposittotalstring = deposittotalElement.innerText;
    const previousdeposittotal = parseFloat(previousdeposittotalstring);
    //
    const newdeposittotal = previousdeposittotal + newdepositamount;
    deposittotalElement.innerText = newdeposittotal;
    //
    const balancetotalElement = document.getElementById('balance-total');
    const previousbalancetotalString = balancetotalElement.innerText;
    const previousTotalAmount = parseFloat(previousbalancetotalString);
    //
    const newbalanceTotal =previousTotalAmount + newdepositamount;
    balancetotalElement.innerText = newbalanceTotal;

})