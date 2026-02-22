console.log('addded the machine file')
// machine id>input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value=input.value;
    console.log(id,value);
    return value;
}
// 
function getBalance(){
    const balanceElement=document.getElementById('balance');
    const balance=balanceElement.innerText;
    console.log("current balance",Number(balance))
    return Number(balance);
}

function setBalance(value){
    const balanceElement=document.getElementById('balance');
    balanceElement.innerText=value; 
}
//
function showOnly(id){
    const addmoney = document.getElementById('add-money');
    const cashout = document.getElementById('Cashout');
    const Transfer = document.getElementById('Transfer');
    const getbonus = document.getElementById('getbonus');
    const paybill = document.getElementById('Pay-Bill');
    // console.log(`add money-${addmoney}, cashout- ${cashout}`);
    addmoney.classList.add('hidden');
    cashout.classList.add('hidden');
    Transfer.classList.add('hidden');
    getbonus.classList.add('hidden');
    paybill.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden')
}