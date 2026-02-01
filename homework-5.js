// 3 задание. Создал функцию temperature, которая принимает два параметра.

function showTemperature(degrees, city) {
  console.log(`В городе ${city} сейчас температура ${degrees} градусов по Цельсию`);
}

showTemperature(-17, "Санкт-Петербург");

// 4 задание. Создал переменную которая хранит скорость света и сделал функцию проверки скорости ракеты.

const SPEED_LIGHT = 299792458;

function checkSpeed(rocketSpeed) {
  if (rocketSpeed > SPEED_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (rocketSpeed === SPEED_LIGHT) {
    console.log("Скорость света");
  } else {
    console.log("Субсветовая скорость");
  }
}

checkSpeed(11200);

// 5 задание. Создал переменные для покупки продукта и функцию покупки, которая проверяет хватает ли бюджета для покупки.

let productName = 'iphone 16 pro';

let productPrice = 1200;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log("iPhone 16 pro приобретен. Спасибо за покупку!");
  } else {
    const missingMoney = productPrice - budget;
    console.log(`Вам не хватает ${missingMoney}$, пополните баланс.`);
  }
}

buyProduct(1100);


// 6 задание. Создал функцию проверки цены продукта.

function checkPrice(price) {
  if (price < 100) {
    console.log("Дешево");
  } else {
    console.log("Дорого");
  }
}

checkPrice(150);


// 7 задание. Создал 3 переменные для хранения веса тела, гравитации луны и размера обуви.

const bodyWeight = 77;


let moonGravity = 0.165;


let shoeSize = 44;


