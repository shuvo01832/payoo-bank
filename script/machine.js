console.log('added the machine file')
//machine id>input value
function getElementById(id){
    const input = document.getElementById(id);
    const value=input.value;
    console.log(id,value);
}
//
function getBalance(){
    const balanceElement=document.getElementById('balance');
    const balance=balanceElement.innerText;
    console.log("current balance",Number(balance);)
    return Number(balance);
}

