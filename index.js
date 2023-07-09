const validation = new JustValidate('#form')
var element = document.getElementById('tel');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};

var mask = IMask(element, maskOptions);
validation.addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Введите имя' 

    },
    {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Минимимум 2 символа' 
    },
])
.addField('#tel', [
    {
        rule: 'required',
        errorMessage: 'Введите Телефон' 
    },
    {
        rule: 'minLength',
        value: 16,
        errorMessage: 'Введите Телефон' 
    },
  
])
.addField('#checkbox', [
    {
        rule: 'required',
        errorMessage: 'Это обязательное поле' 
    },
 
  
])
const submitButton = document.querySelector('.submit__button');
const formNum = document.querySelector('.form')







  
   
  function disableButton(buttonElement, config) { 
    buttonElement.disabled = true; 
    buttonElement.classList.add(config.inactiveButtonClass);
    
  } 
  
  function enableButton(buttonElement, config) { 
    buttonElement.disabled = false; 
    buttonElement.classList.remove(config.inactiveButtonClass);
  } 
  
   
  
  function toggleButtonState(buttonElement, isActive, config) { 
  
    if (!isActive) { 
      disableButton(buttonElement, config); 
    } else { 
      enableButton(buttonElement, config); 
    } 
  
  } 
  
   
  function setEventListener(formElement, config) { 
    const inputsList = formElement.querySelectorAll(config.inputSelector); 
    const submitButtonElement = formElement.querySelector(config.submitButtonSelector); 
  
  
    toggleButtonState(submitButtonElement, formElement.checkValidity(), config); 
  
    formElement.addEventListener("submit", (event) => { 
      event.preventDefault(); 
    }); 

    formElement.addEventListener("reset", () => { 
      disableButton(submitButtonElement, config) 
     }); 
  
    inputsList.forEach((inputItem) => { 
      inputItem.addEventListener("input", () => { 
        toggleButtonState(submitButtonElement, formElement.checkValidity(), config); 
      }); 
    }); 
  
  } 
  
   
  
  function enableValidation(config) { 
    const forms = document.querySelectorAll(config.formSelector); 
   
  
    forms.forEach((formItem) => { 
      setEventListener(formItem, config);
    }); 
  
  } 
  
   
  
   
  
  const validationConfig = { 
    formSelector: ".form", 
    inputSelector: ".input", 
    submitButtonSelector: ".submit__button",
    inactiveButtonClass: 'disable',
   
  }; 
  
   
  
  enableValidation(validationConfig); 