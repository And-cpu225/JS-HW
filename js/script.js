"use strict";

console.log('arr' + " - object");
console.log(4 + +"5");

// Операторы инкремента

let incr = 10,
    decr = 10;

incr++;
// оператор инкремента постфиксный
decr--;
// оператор декремента

++incr;
// оператор инкремента префиксный
--decr;

console.log(incr++);
console.log(decr--);

console.log(++incr);
console.log(--decr);


console.log(5 % 2);
// 5 разделили на 2 столько раз, сколько это возможно и в результате получили остаток 1


console.log(2 * 4 == 8);
// Результат: True
console.log(2 * 4 == '8');
// Результат: True
console.log(2 * 4 === '8');
// Результат: false
console.log(2 * 4 === 8);
// Результат: true
//  == знак сравнения
//  === знак сравнения (число строго должно равняться числу)



//  &&    оператор "И" записывается как 2 амперсанта
//  ||    оператор "ИЛИ" записывается как 2 вертикальные черты

const isChecked = true,
    isClose = true;

console.log(isChecked && isClose);
// в результате получим    true

// const isChecked = true,
//       isClose = false;

// console.log(isChecked && isClose);
// в результате получим    false

// const isChecked = true,
//       isClose = false;

// console.log(isChecked || isClose);
// в результате получим    true

// const isChecked = false,
//       isClose = false;

// console.log(isChecked || isClose);
// в результате получим    false

//  !    оператор отрицания

// const isChecked = false,
//       isClose = false;

// console.log(isChecked || !isClose);
// в результате получим    true


// ПОРЯДОК ВЫПОЛНЕНИЯ ОПЕРАТОРОВ

console.log(2 + 2 * 2 == 8);
// Результат: False

console.log(2 + 2 * 2 != 8);
// Результат: True

console.log(2 + 2 * 2 != '6');
// Результат: False

console.log(2 + 2 * 2 !== '6');
// Результат: True