# Кто ты?

Это репозиторий для проекта чата под названием "Кто ты?". 

## Уже реализовано:

- Нарисованы страницы: ошибка 404, ошибка 500, входная страница, авторизация, регистрация, лента чатов, окно настроек.
- Страница со списком чатов и лентой пока находится в виде заглушки.
- Настроен Express-сервер, который раздаёт статику на порту 3000.

## Сборка проекта

Сборка проекта осуществляется через Vite. В качестве препроцессора используется Sass с именованием по БЭМ. Шаблонизатором является Pug.

## Установка и запуск проекта

Чтобы установить проект, выполните следующие команды:

```
npm install
```

Для запуска проекта в режиме разработки используйте команду:

```
npm run dev
```

Для сборки и запуска проекта используйте команду:

```
npm run start
```

## Ссылки

Вы можете посмотреть сайт на Netlify по следующей ссылке: [https://deploy--ubiquitous-semifreddo-ddd596.netlify.app/](https://deploy--ubiquitous-semifreddo-ddd596.netlify.app/)

## Макет

Макет проекта доступен по ссылке: [https://www.figma.com/file/2P1GtB5QBKd1nvkbwoMkx4/Untitled?type=design&mode=design&t=tkuDlyMW5h9es0h7-1](https://www.figma.com/file/2P1GtB5QBKd1nvkbwoMkx4/Untitled?type=design&mode=design&t=tkuDlyMW5h9es0h7-1)

Или можно посмотреть его в папке проекта UI

## Локальные адреса

После локального запуска сервера вы можете просмотреть все страницы по следующим адресам:

- Основная страница: [http://localhost:3000/](http://localhost:3000/)
- Страница входа: [http://localhost:3000/src/pages/login.html](http://localhost:3000/src/pages/login.html)
- Страница регистрации: [http://localhost:3000/src/pages/registration.html](http://localhost:3000/src/pages/registration.html)
- Страница ошибки 404: [http://localhost:3000/src/pages/errors/error_404.html](http://localhost:3000/src/pages/errors/error_404.html)
- Страница ошибки 500: [http://localhost:3000/src/pages/errors/error_500.html](http://localhost:3000/src/pages/errors/error_500.html)
- Страница настроек: [http://localhost:3000/src/pages/settings.html](http://localhost:3000/src/pages/settings.html)

Пожалуйста, обратите внимание, что страницы могут быть недоступны, если сервер не запущен.
