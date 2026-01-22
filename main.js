// Покраска всех карточек 

const productCards = document.querySelectorAll('.card-container');
const changeColorCardAllButton = document.querySelector('#change-color-all-card');
const grayColorHash = '#a4a4a4ff';
const purpleColorHash = '#8800b2ff'

changeColorCardAllButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = grayColorHash)
})


// Покраска первой карточки

const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = purpleColorHash;
})

// Открыть google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

// Вывод консоль лог

const outputlogButton = document.querySelector('#output-console-log');

outputlogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

// Вывод консоль лог при наведении

const title = document.querySelector('.main-title');

title.addEventListener('mouseover', function() {
  console.log(title.textContent)
})

// Изменение цвета кнопни

const button = document.querySelector('#change-color-button')

button.addEventListener('click', function() {
  button.classList.toggle('active')
});







