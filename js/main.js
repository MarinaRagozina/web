btnElement = document.querySelector(".btn"); 
resultElement = document.querySelector(".result");
nameElement = document.querySelector('[name="name"]');
surnameElement = document.querySelector('[name="surname"]');

btnElement.addEventListener("click", function(){
    resultElement.textContent = `Здравствуйте, ${nameElement.value} ${surnameElement.value}!`;
});