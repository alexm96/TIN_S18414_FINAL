document.getElementById("check-values").addEventListener("click", (event)=>{
    event.preventDefault()
    const numberInput=document.getElementById("number-to-check");
    const emailInput=document.getElementById("email");
    const numberRegex=/^\d{1,}(.\d{0,2})?$/;
    
    const otherEmailRegex=/[\w||\d]*@|\d*.\d*/
    if(!numberInput.value.match(numberRegex)){
        console.log("failed regex")
        numberInput.style.background="red"
    }
    if(!emailInput.value.match(otherEmailRegex)){
        console.log(emailInput.value)
        emailInput.style.background="red"
    }
    else{
    numberInput.style.background="white"
    emailInput.style.background="white"}
});
