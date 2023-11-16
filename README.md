# Кто ты?

Это репозиторий для проекта чата под названием "Кто ты?".

## Уже реализовано:

- Нарисованы страницы: ошибка 404, ошибка 500, входная страница, авторизация, регистрация, лента чатов, окно настроек.
- Добавлен компонентный подход в проект, используется реализация блока (Block) и Event Bus. Проект разделен на папки с компонентами и страницами.
- Добавлена сборка данных из формы. В console.log выводится объект со всеми заполненными полями формы.
- Добавлена валидация на все формы. Валидация работает по blur-событиям и второй раз проверяется при нажатии на submit.
- Генерация страниц происходит на стороне клиента.
- Структура проекта разбита на папки единым образом, настроены правильные экспорты и импорты, декомпозиция и уменьшение связности.
- Проверено, что приложение соответствует шаблону MVC.

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

Для проверки на ESLint:

```
npm run lint
```

Для проверки на StyleLint:

```
npm run stylelint
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

## Используемые инструменты

- TypeScript
- ESLint
- Pug
- Sass
- Stylelint
- Express
- Vite
- Nanoid
- Terser
