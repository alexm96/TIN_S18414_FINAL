

    

document.getElementById("convert-button").addEventListener("click", (event)=>{
    event.preventDefault()
    
        const checked_box=document.querySelector('input[name=temps]:checked')
        if(checked_box.id==="celcius"){
            document.getElementById("result-enter").innerText=document.getElementById("temp-input").value * (9/5)+32;
        }
        
        else if(checked_box.id==="fahrenheit") {
            document.getElementById("result-enter").innerText=(document.getElementById("temp-input").value-32)*(5/9);
        }
        else{
            document.getElementById("result-enter").innerText="Please enter a value?"
        }
        
    }
  );
