// 3 задание. Создал функцию temperature, которая принимает два параметра.

function temperature(degrees, sity) {
  console.log(`В городе ${sity} сейчас температура ${degrees} градусов по цельсию`);
}

temperature(-17, "Санкт-Петербург");

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

let price = 1200;

function buyProduct(budget) {
  if (budget > price) {
    console.log("iPhone 16 pro приобретен. Спасибо за покупку!");
  } else {
    console.log("Вам не хватает 200$, пополните баланс.");
  }
}

buyProduct(1300);

// 6 задание. Создал функцию проверки цены продукта.

function checkPrice(price) {

}

// 7 задание. Создал 3 переменные для хранения веса тела, гравитации луны и размера обуви.

const bodyWeight = 77;


let moonGravity = 0.165;


let shoeSize = 44;


