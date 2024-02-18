const express = require('express');
const app = express();
const port = 5000;

// Middleware для проверки заголовков Origin или Referer
// const checkOrigin = (req, res, next) => {
//   const allowedOrigins = ['http://yourdomain.com', 'https://yourdomain.com']; // Замените на адрес вашего сайта
//   const origin = req.get('Origin') || req.get('Referer');
//   if (allowedOrigins.includes(origin)) {
//     res.setHeader('Access-Control-Allow-Origin', origin);
//     next();
//   } else {
//     res.status(403).send('Доступ запрещен');
//   }
// };

// Применяем middleware для всех маршрутов
// app.use(checkOrigin);

// Обработчик GET запроса на корневой URL
app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

// Обработчик POST запроса на корневой URL
app.post('/', (req, res) => {
  res.send('Получен POST запрос');
});

// Слушаем указанный порт и выводим сообщение об успешном запуске
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});