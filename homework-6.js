//задание 3: создал объект с данными о себе


const userInfo = {
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

car.owner = userInfo;


//задание 5: написал функцию, которая принимает объект аргументом


function addMaxSpeed(vehicle) {
  if (!(vehicle.maxSpeed)) {
    vehicle.maxSpeed = 300;
  }
}

addMaxSpeed(car);
console.log(car);


//задание 6: написал функцию, которая получает первым аргументом объект, а вторым - свойство объекта, и возвращает значение этого свойства


function showObjectValue(obj, key) {
  console.log(obj[key]);
}

showObjectValue(userInfo, "name");
showObjectValue(car, "make");

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


const marvelBooks = [
  {
    title: "Удивительный Человек-паук",
    author: "Стэн Ли",
    year: 1962,
    genre: "комикс",
    coverColor: "красно-синий"
  },
  {
    title: "Железный человек",
    author: "Стэн Ли",
    year: 1963,
    genre: "комикс",
    coverColor: "красно-желтый"
  },
  {
    title: "Капитан Америка",
    author: "Стэн Ли",
    year: 1941,
    genre: "комикс",
    coverColor: "красно-синий"
  },
];

const allBooks = [...books, ...marvelBooks];
console.log(allBooks);

allBooks.pop();

console.log(allBooks);


//задание 10: написал функцию, которая принимает массив сущностей с задния 9 


function getBooksWithStatus(entities) {
  return entities.map(function(book) {
    const isRare = book.year < 2000 ? true : false;
    return { ...book, isRare: isRare };
  });
}

const result = getBooksWithStatus(allBooks);
console.log(result);
