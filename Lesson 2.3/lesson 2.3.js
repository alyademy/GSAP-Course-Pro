const titleProject = prompt("Название проекта?");
console.log('Название проекта:', titleProject, typeof titleProject);

const screensValue = prompt("Какие типы экранов нужны: шаблонные, с уникальным дизайном, с анимациями?");
console.log('Типы экранов:', screensValue, typeof screensValue);

const screenPrice = 1000;
console.log('Цена реализации одного экрана:', screenPrice, typeof screenPrice);
const percentage = 15; // 15%
console.log('Процент отката подрядчику:', percentage, typeof percentage);

const responsive = confirm("Нужен ли респонсивный сайт?");
console.log('Респонсивный сайт:', responsive, typeof responsive);

const service1 = prompt("Какой сервис нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?"); 

const service2 = prompt("Какой еще сервис тебе нужен?");
const servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?");

console.log('Сервис 1:', service1, 'Цена:', servicePrice1);
console.log('Сервис 2:', service2, 'Цена:', servicePrice2);

const fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log('Общая стоимость проекта:', fullPrice);

const servicePercentPrice = Math.round(fullPrice - (fullPrice * percentage / 100));
console.log('Итоговая сумма за вычетом процента подрядчику:', servicePercentPrice);

if (fullPrice > 50000) {
    console.log("Сделаем скидку в 10%");
} else if (fullPrice === 50000) {
    console.log("Цена ровно 50000 — скидка на усмотрение");
} else if (fullPrice > 20000 && fullPrice < 50000) {
    console.log("Сделаем скидку 5%");
} else if (fullPrice === 20000) {
    console.log("Цена ровно 20000 — скидка на усмотрение");
} else if (fullPrice > 0 && fullPrice < 20000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice === 0) {
    console.log("Цена равна 0 — проверьте данные");
} else {
    console.log("Что-то пошло не так");
}