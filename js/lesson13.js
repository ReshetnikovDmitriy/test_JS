'use strict'
// function calculateArea(r) {
// 	let area;
// 	if( r<=0 ) {
// 		return 0;
// 	}else {
// 		area = Math.PI * r *r;
// 		return area;
// 	}
// }
// let radius = 2.2;
// let theArea = calculateArea(radius);
// console.log('The area is: ' + theArea);

// Дана строка 'abc!def!'. Замените все ! на '@' 
// с помощью глобального поиска и замены.

// let txt = 'abc!def!';
// console.log(txt.replace(/!/g, '@'));

// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' 
// тремя разными способами (через substr, substring, slice).
// let text = 'aaa bbb ccc';
// console.log(text.substr(4,3));
// console.log(text.substring(4,7));
// console.log(text.slice(4,7));

// Дана строка 'js'. Сделайте из нее строку 'JS'.
// let text = 'js';
// console.log(text.toUpperCase());

// Дана строка 'я люблю JS!'. Найдите количество 
// символов в этой строке.
// let text = 'я люблю JS!';
// console.log(text.length);


// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные:
//years,myDog,
//guests

// Функции:
//dogYears,
//makeTea
//secret

// Встроенные функции:

// Аргументы:
//myDog, 4
//guests, 'Earl Grey'

// Параметры:
//dogname, age,
//cups, tea

// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();

// #1

// Дана строка 'JS'. Сделайте из нее строку 'js'.
// let text = 'JS';
// console.log(text.toLowerCase());

// #2

// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).

// let text2 = 'я люблю JS!';
// console.log(text2.substr(2,5));
// console.log(text2.substring(2,7));
// console.log(text2.slice(2,7));

// console.log(text2.substr(8,3));
// console.log(text2.substring(8,11));
// console.log(text2.slice(8,11));

// #3

// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.

// let txt = 'Apple and android is good';
// let n = 11;
// let result;
// if (n < txt.length) {
// 	result = txt.slice(0,11) + '...';
// 	console.log(result);
// }else {
// 	result = txt;
// 	console.log(result);
// }

// #4

// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.

// let str = 'Я-люблю-JS!';
// console.log(str.replace(/-/g, '!'));

// #5

// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.

let str = 'я люблю JS';
console.log(str.split(' '));
// let str = 'я люблю JS';
// let word1 = str.slice(0,1);
// let word2 = str.slice(2,7);
// let word3 = str.slice(8,10);
// console.log(word1.split());
// console.log(word2.split());
// console.log(word3.split());

// #6

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.

let str1 = 'привет мир';
console.log(str.split(''));