document.addEventListener('DOMContentLoaded', function ()  {
    const buyButtons = document.querySelectorAll('.product-item button');

    buyButtons.forEach(button => {
        button.addEventListener ('click', function () {
            alert('Produto adicionado ao carrinho!') ; 
        
        });
       });
});