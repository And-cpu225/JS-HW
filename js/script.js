'use strict';

let num = 50;                 // 'const' напрямую менять не можем, потому запишем 'let'.

// Первый цикл

while (num <= 55) {
    console.log(num);        // Если запустить такой цикл, то он будет работать бесконечно, потому что 'num' всегда будет меньше, чем 55.
    num++;                   // возьмем 'num' и будем увеличивать его на единицу при помощи ИНКРЕМЕНТА.
}                            // while - 'пока' условие выполняется мы будем выполнять какие-то действия.

// Второй цикл (Сначала что-то сделать а затем выйти из цикла)

do {
    console.log(num);
    num++;
}
while (num < 55);

// Трейтий цикл (Самый часто использующийся)

for (let i = 1; i < 8; i++) {                    // i - итератор
    console.log(num);
    num++
}

// Четвертый цикл

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }

    console.log(i);
}

// Пятый цикл

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue; // Позволяет пропустить тот шаг. который нам не нужен, но при этом не прерывает полностью цикл.
    }

    console.log(i);
}