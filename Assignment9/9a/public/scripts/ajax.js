
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
    const jsonToSend=createJson(event.target.parentNode)
    sendRequest(jsonToSend)

  }

  const addListeners=()=>{
    const elements= selectElement.querySelectorAll("input,select")
    elements.forEach((element)=>{
      const typeOfElement=element.tagName 
      if(typeOfElement==="INPUT"){
        element.addEventListener("keyup",manipulateForm)
      }
      else if (typeOfElement==="SELECT")
      {
        element.addEventListener("change",manipulateForm)
      }
      
    })
  }
  addListeners()
  
};
