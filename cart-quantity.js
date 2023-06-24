const show = document.getElementById('show');
const addOne = document.getElementById('addOne');
const addTwo = document.getElementById('addTwo');
const addThree = document.getElementById('addThree');
const reset = document.getElementById('reset');


let cartQuantity = 0;

show.addEventListener("click", q => {
    console.log(`Cart Quantity : ${cartQuantity}`)
});

addOne.addEventListener("click", addOne => {
    cartQuantity ++;
    console.log(`Cart Quantity : ${cartQuantity}`)
});

addTwo.addEventListener('click', addTwo => {
    cartQuantity += 2;
    console.log(`Cart Quantity : ${cartQuantity}`)
});

addThree.addEventListener('click', addThree => {
    cartQuantity += 3;
    console.log(`Cart Quantity : ${cartQuantity}`)
});

reset.addEventListener('click', reset => {
    cartQuantity = 0;
    console.log('Cart was reset.');
    console.log(`Cart Quantity : ${cartQuantity}`)
});