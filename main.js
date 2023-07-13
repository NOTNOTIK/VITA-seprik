const validation = new JustValidate('#form')
var element = document.getElementById('phone');
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
validation.addField('#phone', [
    {
        rule: 'required',
        errorMessage: 'Введите Телефон' 
    },
 
  
])
validation.addField('#checkbox', [
    {
        rule: 'required',
        errorMessage: 'Это обязательное поле' 
    },
 
  
])
const submitButton = document.querySelector('.submit__button');
const formNum = document.querySelector('.form')
const page = document.querySelector('.page')


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







const TOKEN = "6117877930:AAGU3wQfwMhwpyZ5odUn-ojJAFijG-VOJjc";
const CHAT_ID = "-1001909445927 ";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;


document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  let message = `<b>Заявка с сайта!</b>\n`
  message += `<b>Имя</b> ${ this.name.value}\n`
  message += `<b>Телефон</b> ${ this.phone.value}\n`
  message += `<b>согласие</b> ${ this.checkbox.value}`

  axios.post(URI_API, {
    chat_id : CHAT_ID,
    parse_mode : 'html',
    text : message
  } )
  .then((res) => {
  this.name.value = ''
  this.phone.value = ''
  this.checkbox.value =''
  confirm('Ожидайте звонка специалиста')
  window.location.reload();
  })
.catch((err) =>{
   console.warn(err)
})
.finally(() =>{
})

})
















