document.getElementById('add-money-btn').addEventListener('click',function(){
    const bankAccount = getValueFromInput('add-money-bank');
    if(bankAccount == 'select a bank'){
        alert('plesse select a bank account');
        return;
    }
   const accno =getValueFromInput('add-money-number');
   if(accno.length !=11){
    alert('Invaild acc no');
   return;
   }
   const amount =getValueFromInput('add-money-amount');
   const newBalance = getBalance() + Number(amount);
   const pin =getValueFromInput('add-money-pin');
   if(pin =='1234'){
    alert(`Add money success from 
        ${bankAccount}
         at ${new Date()}`);
    setBalance(newBalance);

const history =document.getElementById('history-container');
const newHistory =document.createElement('div');
newHistory.innerHTML=`
  <div class="transaction-card bg-base-100 p-8">
    Add money success from ${bankAccount},acc-no ${accno} at ${new Date()}
   </div>
`
    history.append(newHistory);

   }else{
    alert('Invaild pin');
    return;
   }
})