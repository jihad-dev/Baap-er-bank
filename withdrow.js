document.getElementById('btn-withdrow').addEventListener('click',function(){
    const withdrowField = document.getElementById('withdrow-field');
    const newwithdrowstring = withdrowField.value;
    const newwithdrowAmount = parseFloat(newwithdrowstring);
   //
   withdrowField.value = '';
   //
   const withdrowTotalElement = document.getElementById('total-withdrow');
   const previouswithdrowtotalString = withdrowTotalElement.innerText;
   const previouswithdrowtotal = parseFloat(previouswithdrowtotalString);
   //
   const newwithdrowTotal = previouswithdrowtotal + newwithdrowAmount;
   withdrowTotalElement.innerText = newwithdrowTotal;
   //
   const balanceTotalElement = document.getElementById('balance-total');
   const previousbalancetotalstrings = balanceTotalElement.innerText;
   const previousbalancetotal = parseFloat(previousbalancetotalstrings);
   //
   const newbalanceTotal = previousbalancetotal - newwithdrowAmount;
    balanceTotalElement.innerText = newbalanceTotal;
})