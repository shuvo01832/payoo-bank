// console.log('connected the login file')
document.getElementById('login-btn').addEventListener('click',function(){
    // console.log('login button clicked')
    // get the mobile number input
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    //get the pin input
    const inputPin = document.getElementById('input-pin');
    const pin= inputPin.value;
    console.log(pin);
    //match pin & mobile number
    if(contactNumber =='01935498739' && pin =='1234'){
        alert('login success');
        //true::>>alert>homepage
        // replace ব্যবহার করলে index.html এ থাকবে কিন্তু assign ব্যবহার করলে home page  নিয়ে যাবে
        // window.location.replace('/home.html');
        window.location.assign('/Home.html');
    }
    else{
        alert('login failed');
        return;
    }
    
    //false::>>alert>return

});