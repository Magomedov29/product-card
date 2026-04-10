// 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.filter(number => number > 4)

console.log(newNumbers);


// 3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.


const furniture = ['диван', 'кресло', 'кровать', 'шкаф', 'тумба']

const hasSpecificItem = furniture.includes ('тумба')

console.log(hasSpecificItem);


// 4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.


numbers.reverse()

console.log(numbers);

furniture.reverse()

console.log(furniture);


//5. Добавить файл comments.js, в нём создать константу и в него поместить первые 10 объектов этого массива. Данный массив представляет собой пример комментариев в соц. сетях, поэтому переменная должна быть названа по смыслу. Не забудьте удалить квадратные кавычки у ключей объектов (можно использовать Chat GPT, что бы не делать это вручную)


import { comments } from './comments.js';

console.log(comments);


// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"


const comEmailComments = comments.filter( comment => {
  return comment.email.includes('.com');
})

console.log(comEmailComments);


// 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1


const updatedComments = comments.map(comment => {
  comment.postId = comment.id <= 5 ? 2 : 1;
  return comment;
});

console.log(updatedComments);


// 9. Перебрать массив, что бы объекты состояли только из айди и имени


const simplifiedComments = comments.map(comment => {
  return {
    id : comment.id,
    name : comment.name,
  };
});

console.log(simplifiedComments);


// 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.


const validatedComments = comments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

console.log(validatedComments);


// 11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map


const emailsReduce = comments.reduce((emailList, comment) => {
  emailList.push(comment.email);
  return emailList;
}, []);

console.log(emailsReduce);


const emailsMap = comments.map(comment => comment.email);

console.log(emailsMap);


// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.


const emailList = comments.map(comment => comment.email);

console.log(emailList.join(', '));