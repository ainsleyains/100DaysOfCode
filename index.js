//1 use classList method
const testBtn = document.querySelector('.test-btn');

if(testBtn.classList.contains('test-btn')) {
    console.log('Yes')
}

//2 add/remove classList
const gamingBtn = document.querySelector('.gaming-btn')

gamingBtn.addEventListener('click', display => {
    if(!gamingBtn.classList.contains('gaming')) {
        gamingBtn.classList.add('gaming');
        
    }else {
        gamingBtn.classList.remove('gaming')
    }
})

//3 only one button can be on at a time

const game = document.querySelector('.game');
const tech = document.querySelector('.tech');
const music = document.querySelector('.music');

game.addEventListener('click', run => {
    toggleButton(game)
  })

  music.addEventListener('click', run => {
    toggleButton(music)
  })

  tech.addEventListener('click', run => {
    toggleButton(tech)
  })


const toggleButton = (selector) => {
    
    if (!selector.classList.contains('is-toggled')) {
  
        turnOffBtn();
  
      selector.classList.add('is-toggled');
    } else {
      selector.classList.remove('is-toggled');
    }
  }
  
  const turnOffBtn = () => {
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
      previousButton.classList.remove('is-toggled');
    }
  }



//4 display a red error message
const subtotal = document.querySelector('.subtotal');
const submit = document.querySelector('.calculate')
const msg = document.querySelector('.msg')

submit.addEventListener('click', cal => {
    if(subtotal.value < 0) {
        msg.innerHTML = 'Error'
    }
})
