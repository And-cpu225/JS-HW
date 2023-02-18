'use strict';

// Задача 1.

if (4 == 9) { // if - если 4=9
    console.log('Ok!'); // на консоли появляется ответ "Ok!"
} else { // else - иначе
    console.log('Error'); // на консоли появляется ответ "Error"
}

// Задача 2.

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!')
}

// Задача 3. Синтаксис записи условий при помощи тернарного оператора.

(num === 50) ? console.log('Ok!') : console.log('Error'); // Если num=50 - то OK!, если нет - Error
// 4 + 4 - плюс является бинарным аргументом
// +'4'; - плюс является унарным аргументом

// Задача 4. Switch

switch (num) {
    case 49: // Если num=49 - то консоль выдаст "Неверно"
        console.log('Неверно');
        break;
    case 100: // Если num=100 - то консоль выдаст "Неверно"
        console.log('Неверно');
        break;
    case 50: // Если num=50 - то консоль выдаст "В точку!"
        console.log('В точку!');
        break;
    default: // Есди ничего не подошло
        console.log('Не в этот раз');
        break;
}