// js basics, varibales

// task 1 
// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

'use strict';
let admin;
let useName  = 'Джон';
// admin = useName;
console.log(admin=useName);

// homework-2
// task 1
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90
//  включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

let age = 14;
if (age>=14 && age<=90) {
    console.log('true');
}
else {
console.log('false');
}
// task 2
// Напишите условие if для проверки, что значение переменной age НЕ находится в 
// диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без 
// этого оператора.

let age2 = 10;
if (!(age2>=14 && age2<=90)){
    console.log('true');
}
else {
    console.log('false');
}

// без !
let age3 = 91;
if (age3<14 || age3>90){
    console.log('true');
}
else {
    console.log('false');
}

// Homework 3
// Перепишите этот код используя операторы нулевого слияния и присваивания.

// let num1 = 10,
//     num2 = 20,
//     result;

// if (result === null || result === undefined) {
//   if (num1 !== null && num1 !== undefined) {
//     result = num1;
//   } else {
//     result = num2;
//   }
// }

let num1 = 10,
    num2 = 20,
    result;
console.log(result ??= num1 ?? num2);

// Homework 4
// task 1
// При помощи цикла for выведите чётные числа от 2 до 10.
for (let num = 1; num <= 10; num++){
    if(num % 2 == 0){
        console.log(num);
    }
}

//task 2
// Перепишите код, заменив цикл for на while
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

let i = 0;
while (i < 3){
    console.log(`number ${i}!`);
    i++
}
// task 3
// Вывести простые числа
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

let nMax = 10;
number:
for (let n = 2; n <= nMax; n++){
    for (let devider = 2; devider < n; devider++){
        if (n % devider == 0) continue number;
    }
    console.log(n);
}
// commet do get some diffs, wtf git?