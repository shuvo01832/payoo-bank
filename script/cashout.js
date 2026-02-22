document.getElementById('Cashout-btn').addEventListener('click',function(){
    
    const cashoutNumber =getValueFromInput('Cashout-number');
if(cashoutNumber.lenght != 11){
   alert('Invaild number');
   return;
}
    const cashoutAmount =getValueFromInput('Cashout-amount');

    const currentBalance=getBalance();
//4 calculate balance
const newBalance =currentBalance - Number(cashoutAmount);
console.log(newBalance);
if(newBalance<0){
   alert('Invalid Amount');
   return;
}
const pin = getValueFromInput('Cashout-pin');
if(pin === '1234'){
   alert('cashout success');
 setBalance(newBalance);
}else{
   alert('Invaild pin')
   return;
}
})

// document.getElementById('Cashout-btn').addEventListener('click',function(){
//     // get the agent number & validate
// const cashoutNumberInput =document.getElementById('Cashout-number');
// const cashoutNumber = cashoutNumberInput.value;
// if(cashoutNumber.length !=11){
//     alert('Invaild number');
//     return
// }
// console.log( cashoutNumber);
//     //get the amount,validate,convert to number
// const cashoutAmountInput=document.getElementById('Cashout-amount');
// const cashoutAmount= cashoutAmountInput.value;
// console.log(cashoutAmount)
//     //get the current balance,validate,convert to number
// const balanceElement=document.getElementById('balance');
// const balance=balanceElement.innerText;
// console.log(balance)
//     //calculate new balance
// const newBalance=Number(balance)-Number(cashoutAmount);
// if(newBalance < 0){
//     alert('Invaild Amount');
//     return;
// }
// //get the pin and varify
// const cashoutPinInput=document.getElementById('Cashout-pin');
// const pin= cashoutPinInput.value;
// if(pin === '1234'){
//     alert('cashout success');
//     console.log('newbalance, newBalance');
// balanceElement.innerText=newBalance;
//     }else{
//         alert('Invaild pin');
//         return;
//     }
//     //true::show an alert>set balance
//     //true::show an error  alert> return
// });