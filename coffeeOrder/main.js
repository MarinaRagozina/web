btnElement = document.querySelector(".btn"); 
resultElement = document.querySelector(".result");
productContainerElement = document.querySelectorAll('.product_container');

btnElement.addEventListener("click", function(){
    alert(`Заказ на сумму: ${resultElement.textContent}`);
});

productContainerElement.forEach(element => {
    element.addEventListener("change", function(){
        total = 0;             
        for (let product of productContainerElement){
            let checkbox = product.querySelector(".checkbox");
            let price = parseInt(checkbox.value);
            if (checkbox.checked) {
                if (product.querySelector(".counter").value === "0") {
                    product.querySelector(".counter").value = 1;
                }
            } else {
                product.querySelector(".counter").value = "0";
            }
            let amount = parseInt(product.querySelector(".counter").value);
            checkbox.checked = amount > 0 ? true : false;
            total += amount * price;
        }
        resultElement.textContent = "" + total;

    });
});