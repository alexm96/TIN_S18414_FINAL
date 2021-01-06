
window.onload = function(){
  const selectElement = document.querySelector('#main-form');
 
  const createJson=(inputFormData)=>{
      return {
        "number1":parseFloat(inputFormData.querySelector("#number1").value||0),
        "number2":parseFloat(inputFormData.querySelector("#number2").value||0),
        "operation":inputFormData.querySelector("#operations").value
      }
  }
  const sendRequest=(jsonRequest)=>{
    const xhr=new XMLHttpRequest()
    xhr.open("POST","/operation",true)
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload=function(){
      const responseObject=parseFloat(xhr.response)
      changeResult(responseObject)
    }
    xhr.onprogress=function(){
      changeResult("LOADING")
    }
    xhr.send(JSON.stringify(jsonRequest))
  }
  const changeResult=(responseObject)=>{
      document.querySelector("#result").innerHTML=responseObject
  }
  const manipulateForm=(event)=>{
    const jsonToSend=createJson(event.target.parentNode) // since we need access to parent form to get other values (and listeners are attached to children)
    sendRequest(jsonToSend)

  }

  const addListeners=()=>{
    const elements= selectElement.querySelectorAll("input,select")
    elements.forEach((element)=>{
      const typeOfElement=element.tagName 
      if(typeOfElement==="INPUT"){ // logic here is that the keyup action will fire as soon as a new value is entered, even if we dont lose focus
        element.addEventListener("keyup",manipulateForm)
      }
      else if (typeOfElement==="SELECT")
      {
        element.addEventListener("change",manipulateForm) // simple change is fine for the select
      }
      
    })
  }
  addListeners()
  
};
