btnElement = document.querySelector(".btn"); 
resultElement = document.querySelector(".result");
productElements = document.querySelectorAll('[name="product"]');

btnElement.addEventListener("click", function(){
    total = 0;             
    for (const product of productElements){
        if (product.checked){        
            total += parseInt(product.value);
        }
    }
    resultElement.textContent = "" + total;
});

