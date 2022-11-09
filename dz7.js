/* Задание 1

Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:

Math.round(x)

Math.ceil(x)
Math.floor(x)

В комментариях к каждой строке напишите, как работают эти округления.*/

let numberArr = [5.4, 5.5, 5.6]; 

numberArr.map(item =>    Math.round(item) ); // [5, 6, 6] округляет от к большему, когда дробная часть >= 5, к меньшему, когда <= 4

numberArr.map(item =>    Math.ceil(item) ); // [5, 5, 5] "отбрасывает" дробную часть

numberArr.map(item =>    Math.floor(item) ); // [6, 6, 6] всегда к большему 

/*
Задание 2

Выведите в консоль фразы в 2 строки:

Сегодня 27.10.2022 (здесь будет ваша дата)

19 часов 20 минут (здесь будет ваше время)
*/


let newDate = new Date(),
    hour = newDate.getHours(),
    minute = newDate.getMinutes();    
console.log(`${hour} hours ${minute} minutes`);
