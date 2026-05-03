// Вам нужно описать полностью объект и продублировать его для всех карточек и после импортировать в homework-8 для дальнейшей работы с ним.


import { products } from './product-data.js';

console.log(products);


// 3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.  (Посмотрите сразу задание 5)


const productCardsTemplate = document.getElementById('product-cards-template');
const productCardList = document.getElementById('product-card-list');

function createProductCard(cardsArray) {
  productCardList.innerHTML = '';
  cardsArray.forEach(product => {
    const productClone = productCardsTemplate.content.cloneNode(true);

    const imgElement = productClone.querySelector('.product-img');
    imgElement.src = `./images/${product.image}.png`; 
    imgElement.alt = product.name;

    productClone.querySelector('.product-category').textContent = product.category;
    productClone.querySelector('.product-name').textContent = product.name;
    productClone.querySelector('.product-description').textContent = product.description;
    productClone.querySelector('.product-price').textContent = `${product.price} ₽`;
    const compoundContainer = productClone.querySelector('.product-compound');
    compoundContainer.innerHTML = '';

    product.compound.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('product-compound-item');
      li.textContent = item;
      compoundContainer.append(li);
    });
    productCardList.append(productClone);
  });
}


const productDescriptions = products.reduce((acc, item) => {
  const newObject = { [item.name]: item.description };
  acc.push(newObject);
  return acc;
}, []);

console.log(productDescriptions)


function getQuantity() {
  const result = prompt('Сколько карточек отобразить? От 1 до 5');
  if (!result) {
    alert('Вы отменили ввод');
    return 5;
  }

  const num = parseInt(result);
  if (isNaN(num) || num < 1 || num > 5) {
    alert('Ошибка! Введите число от 1 до 5');
    return 5;
  }
  return num;
}

const count = getQuantity();

const shortList = products.slice(0, count);

createProductCard(shortList);

