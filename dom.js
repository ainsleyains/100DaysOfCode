//1 change the text in the button
document.querySelector('.btn-9b').innerHTML = '9b Btn';

//2 create 2 buttons and a paragraph underneath. When clicking the a button, display 'You chose : a'. when clikcing the b button, display 'You chose b'.

const heads = document.querySelector('.heads');
const tails = document.querySelector('.tails');
const result = document.querySelector('.result');

heads.addEventListener('click', play => {
    result.innerHTML += 'heads';
})

tails.addEventListener('click', play => {
    result.innerHTML += 'tails';
})



//3 create a text box and a submit button. When clicking 'submit', display 'Your name is 'text' on the page

const input = document.querySelector('.name');
const btn = document.querySelector('.submit');

input.addEventListener('keydown', event =>{
    if(event.key === 'Enter') {
        document.querySelector('.show').innerHTML = `Your name is ${input.value}`;
    }
})
btn.addEventListener('click', display =>{
    document.querySelector('.show').innerHTML = `Your name is ${input.value}`;
})


//4 create a text box that will update the text on the page whenever typing
const textInput = document.querySelector('.text');

textInput.addEventListener('keyup', run =>{
    document.querySelector('.display').innerHTML = textInput.value;
})

