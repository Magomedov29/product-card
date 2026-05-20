//5. Создать кнопку "Регистрация". Создать модальное окно, используя классы
//Важные правила создания модалки:
//Задний фон должен быть затемнён, но не полностью черный (Создаем класс overlay, который будет затемнять всю страницу)
//Модальное окно находиться ровно по центру страницы, независимо от масштаба

//6. Создать форму для регистрации внутри модального окна. Она должна содержать поля: имя, фамилия, дата рождения, логин, пароль, повторение пароля.


document.addEventListener('DOMContentLoaded', function() {

  let user = null;

  const openBtn = document.getElementById('open-modal-btn');
  const closeBtn = document.querySelector('.modal-close-btn');
  const modal = document.getElementById('registration-modal');
  const registerForm = document.getElementById('register-form');


  if (openBtn && modal) {
    openBtn.addEventListener('click', function() {
      modal.classList.add('modal-showed'); 
    });
  }

  // Логика закрытия модального окна при клике на крестик
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', function() {
      modal.classList.remove('modal-showed');
    });
  }

  // ЛОГИКА ОТПРАВКИ ФОРМЫ РЕГИСТРАЦИИ
  if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
      // Блокируем стандартную перезагрузку страницы браузером
      event.preventDefault();

      // Проверяем валидность формы
      if (!registerForm.checkValidity()) {
        alert('Регистрация отклонена: Пожалуйста, заполните все поля корректно.');
        return;
      }

      // Забираем пароли для ручной проверки на совпадение
      const password = document.getElementById('reg-password').value;
      const confirmPassword = document.getElementById('reg-confirm-password').value;

      if (password !== confirmPassword) {
        alert('Регистрация отклонена: Пароли не совпадают!');
        return;
      }


      const dataFromForm = new FormData(registerForm);

      const userData = Object.fromEntries(dataFromForm.entries());

      userData.createdOn = new Date();

      user = userData;


      console.log('Регистрация успешна! Создан объект user:', user);

      registerForm.reset();
      modal.classList.remove('modal-showed');
      
      alert('Вы успешно зарегистрировались!');
    });
  }

  const subscribeForm = document.querySelector('.footer-subscribe form');
  const emailInput = document.getElementById('email');

  if (subscribeForm && emailInput) {
    subscribeForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const emailValue = emailInput.value.trim();
      if (emailValue === '') {
        alert('Пожалуйста, заполните поле Email');
        return;
      }
      const formData = { email: emailValue };
      console.log('Данные подписки:', formData);
      subscribeForm.reset();
    });
  }

});