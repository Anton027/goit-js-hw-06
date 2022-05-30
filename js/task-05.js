// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, 
// у спані повинен відображатися рядок "Anonymous".



const inputForm = document.querySelector('#name-input');
const outputText = document.getElementById('name-output');

inputForm.addEventListener('input', () => {
   if(inputForm.value === '') {
      outputText.textContent = "Anonymous";
   }
   else(outputText.textContent = inputForm.value)
   
});

