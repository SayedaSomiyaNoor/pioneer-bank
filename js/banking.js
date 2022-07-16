function getInputValue(inputId){
    const inputField=document.getElementById(inputId);
    const inputAmountText=inputField.value;
    const amountValue=parseFloat(inputAmountText);
    inputField.value='';
    return amountValue;
}
function updateTotalField(totalFieldId,amount){
  
    const totalElement=document.getElementById(totalFieldId);
     const totalText=totalElement.innerText;
     const previousTotal=parseFloat(totalText);
     
     totalElement.innerText= previousTotal + amount;
}

function getCurrentBalance(){
    const balanceTotal= document.getElementById("balance-total");
    const balanceTotalText=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(amount,isAdd){
     const balanceTotal= document.getElementById("balance-total");
    /*const balanceTotalText=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotalText); */
    const previousBalanceTotal=getCurrentBalance();
   if(isAdd==true){
    balanceTotal.innerText=previousBalanceTotal+amount;
   }
   else{
    balanceTotal.innerText=previousBalanceTotal-amount;
   }
}



document.getElementById("deposit-button").addEventListener('click',function(){
   
     //get current deposit
     /*  const depositTotal=document.getElementById("deposit-total");
      const depositTotalText=depositTotal.innerText;
      const previousDepositTotal=parseFloat(depositTotalText);

      depositTotal.innerText= previousDepositTotal +depositAmount; */
    const depositAmount=getInputValue('deposit-input');
    if(depositAmount>0){
        updateTotalField('deposit-total',depositAmount);
        updateBalance(depositAmount,true);
    }
    
     //update balance
     /* const blanceTotal= document.getElementById("balance-total");
     const balanceTotalText=blanceTotal.innerText;
     const previousBalanceTotal=parseFloat(balanceTotalText);
     blanceTotal.innerText=previousBalanceTotal+depositAmount; */
    
})
//handle withdraw button
document.getElementById("withdraw-button").addEventListener('click',function(){
     /* const withdrawInput=document.getElementById("withdraw-input");
     const withdrawAmountText=withdrawInput.value;
     const withdrawAmount=parseFloat(withdrawAmountText); */
     
    //update withdraw total
   /*  const withdrawTotal=document.getElementById("Withdraw-total");
    const prevoiuswithdrawTotalText=withdrawTotal.innerText;
    const prevoiuswithdrawTotal=parseFloat(prevoiuswithdrawTotalText); 
    withdrawTotal.innerText=prevoiuswithdrawTotal+withdrawAmount; */  

    //update balance after withdrae
    /* const blanceTotal=document.getElementById('balance-total');
    const balanceTotalText=blanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotalText);
    blanceTotal.innerText=previousBalanceTotal-withdrawAmount; */
    const withdrawAmount=getInputValue('withdraw-input');
    const currentBalance=getCurrentBalance();
   if(withdrawAmount>0 && withdrawAmount<currentBalance){
    updateTotalField('Withdraw-total',withdrawAmount);
    updateBalance(withdrawAmount,false);
   }
   if(withdrawAmount>currentBalance){
       console.log("You can't withdraw more than you have in your account")
   }
})