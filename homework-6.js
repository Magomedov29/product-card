//задание 3: создал объект с данными о себе


const myInfo = {
  name: "Рамазан",
  surname: "Магомедов",
  age: 28,
  city: "Махачкала",
  country: "Россия",
  profession: "программист",
  hobbies: ["путешествия", "спорт",],
  email: "magomedovr13@gmail.ru",
  relationshipStatus: "женат",
  favoriteFood: ["плов", "шашлык", "хинкал"],
}


//задание 4: создал объект с данными автомобиля


const car = {
  make: "BMW",
  model: "M5",
  year: 2026,
  color: "cерый",
  engineType: "бензиновый",
  transmission: "автоматическая",
}

car.owner = myInfo;


//задание 5: написал функцию, которая принимает объект аргументом


function addMaxSpeed(vehicle) {
  if (!(vehicle.maxSpeed)) {
    vehicle.maxSpeed = 300;
  }
  return vehicle;
}

console.log(addMaxSpeed(car));


//задание 6: написал функцию, которая получает первым аргументом объект, а вторым - свойство объекта, и возвращает значение этого свойства


function showValue(obj, key) {
  console.log(obj[key]);
}

showValue(myInfo, "name");
showValue(car, "make");

//задание 7: создал массив котрый содержит названия продуктов


const products = ["хлеб", "молоко", "сыр", "яйца", "масло"];


//задание 8: создал массив объектов, который содержит информацию о книге


const books = [
  {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    genre: "роман",
    coverColor: "красный",
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    genre: "роман",
    coverColor: "синий",
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    genre: "роман",
    coverColor: "зеленый",
  }
];

books.push({
  title: "Анна Каренина",
  author: "Лев Толстой",
  year: 1877,
  genre: "роман",
  coverColor: "черный",
});

console.log(books);


//задание 9: создал массив, состоящий из книг, и с помощью оператора объединнил эти два масива в один


const moreBooks = [
  {
    title: "Идиот",
    author: "Фёдор Достоевский",
    year: 1869,
    genre: "роман",
    coverColor: "желтый",
  }
];

const allBooks = [...books, ...moreBooks];
console.log(allBooks);

allBooks.pop();

console.log(allBooks);


//задание 10: написал функцию, которая принимает массив сущностей с задния 9 


function addRareStatus(entities) {
  return entities.map(function(book) {
    let isRare;
    if (book.year < 2000) {
      isRare = true;
    } else {
      isRare = false;
    }
    return { ...book, isRare };
  });
}

const result = addRareStatus(allBooks);
console.log(result);
