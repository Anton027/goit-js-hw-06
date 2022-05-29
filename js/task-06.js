// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.


const inputText = document.querySelector('#validation-input');
const inputData = document.querySelector('input[data-length]');

const inputLength = inputData.dataset.length;


inputText.addEventListener('blur', (event) => {
    if(event.currentTarget.value.length >= inputLength){
        inputText.classList.remove('invalid');
        inputText.classList.add('valid');
        
    }else{
        inputText.classList.add('invalid');
        inputText.classList.remove('valid');
    }
})

