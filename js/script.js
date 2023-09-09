'use strict'

// #1

// console.log(10);
// alert(20);

// #2

// let age = 36;
// let name = "dima";
// let message = "Hi";
// const COLOR_RED = "f00";
// let color = COLOR_RED;
// console.log(age);
// console.log(name);
// console.log(message);
// console.log(color);

// #3

// let str = "Привет";
// let str1 = 'Hello';
// let str2 = `Hi - ${str}`;
// let str3 = 'HI'+' '+'-'+' '+ str;
// let str4 = `Hi - ${1+2}`;
// console.log(str);
// console.log(str1);
// console.log (str2);
// console.log (str3);
// console.log (str4);

// let nameChecked = true;
// let ageChecked = false;
// console.log(nameChecked);
// console.log(2>1);

// let age = null;
// let Age;
// console.log(age);
// console.log(Age);

// console.log(typeof null);
// console.log(typeof true);
// console.log(typeof "hello");
// console.log(typeof 10n);
// console.log(typeof 0);
// console.log(typeof undefined);

// #4

// alert("hello");
// let result = prompt("Text");
// let age = prompt('Сколько тебе лет', 36);
// alert(`You are ${age} years!`);
// let result = confirm ('Are you Dima?');
// alert(result);

// #5

// let i = 2;
// i = -i;
// console.log(i);
// let x = 2, y = 3;
// console.log(y-x);
// console.log(5%2);
// console.log(2**3);
// console.log(4**(1/2));
// let text = "text" + "три" + 3 + 3 + 3;
// console.log(text);
// let text1 = 3 + 3 + 3 + "text" + "три";
// console.log(text1);
// let text2 = 3 * "2";
// console.log(text2);
// let text3 = 3 + "2";
// console.log(text3);
// let x = -2;
// console.log(+x);
// let x1 = "1";
// let y1 = "2";
// console.log(x1 + y1);
// let x2 = "1";
// let y2 = "2";
// console.log(+x1 + +y1);
// console.log(1 + 1 * 2);
// console.log((1 + 1) * 2);
// let a = 1, b = 2;
// let c = 2 - (a = b + 1 );
// console.log(c);
// console.log(a);
// let a1, b1, c1;
// c1 = 2 + 2;
// b1 = c1;
// a1 = b1;
// console.log(c1);
// console.log(b1);
// console.log(a1);
// let n = 2;
// n += 5; //n = n + 5;
// console.log(n);
// n *= 2; //n = n * 2;
// console.log(n);
// let p = 3;
// p *= 3 + 5;
// console.log(p);
// let p1 = 3;
// p1 *= 3 + 5;
// console.log(p1);

// let counter = 2;
// console.log(counter);
// counter --;
// console.log(counter);
// ++counter;
// console.log(counter);
// let abc = ++counter;
// console.log(abc);
// let counter1 = 2;
// console.log(2* ++counter1);
// let counter2 = 2;
// console.log(2* counter2++);
// let m =(1 + 2, 3 + 4);
// console.log(m);

// console.log(true||false); //true
// console.log(true||true); //true
// console.log(false||true); //true
// console.log(false||false); //false

// let currentUser = null;
// let defaultUser = "Dima";
// let name = currentUser || defaultUser || "unnamed";
// console.log(name);

// let u;
// false || (u = 1);
// console.log(u);
// let u1;
// true || (u1 = 1);
// console.log(u1);

// console.log(true&&false); //false
// console.log(true&&true); //true
// console.log(false&&true); //false
// console.log(false&&false); //false
// let hour = 12;
// let minute = 30;
// if (hour == 12 && minute == 30){
// 	console.log('Сейчас 12:30');
// }

// console.log(!true);

// #6

// #7

// #8

// let year = 2021;
// if (year < 2021) {
// 	console.log('Вы в прошлом');
// } else if (year > 2021) {
// 	console.log('Вы в будущем');
// } else {
// 	console.log('Вы в настоящем');
// }

// let all;
// let age = 18;
// if (age > 18) {
// 	all == true;
// }else {
// 	all == false;
// }
// let age8 = 19;
// let all = (age8 > 18) ? true : false;
// console.log(all);
// let age8 = 19;
// let all = (age8 > 18);
// console.log(all);

// let age8 = 101;
// // let club = (age8 < 18) ? 'Hi baby!':
// // (age8 == 18) ? 'Go to':
// // (age8 > 100) ? 'hello' : 'How old are you?';
// // console.log(club);
// let club;
// if (age8 < 18) {
// 	club = 'Hi baby!';
// }else if (age8 == 18) {
// 	club = 'Go to';
// }else if (age8 > 100) {
// 	club = 'hello';
// }else {
// 	club = 'How old are you?';
// }
// console.log(club);

// #9

// let i = 0;
// while (i < 3) {
// 	console.log(i);
// 	i++;
// }
// let i = 3;
// while (i) console.log(i--);
// let i = 0;
// do {
// 	console.log(i);
// 	i++;
// }while(i < 3);

// for (let i = 0; i <= 3; i++) {
// 	console.log(i);
// }

// let i = 5;
// for (let i = 0; i <= 3; i++) {
// 	console.log(i);
// }
// console.log(i);

// let i = 0;
// for (; i < 3; i++) {
// 	console.log(i);
// }

//         Бесконечный цикл, лишний раз не включать
// let i = 0;
// for (;;) {
// 	console.log(i++);
// }

// let i = 0;
// for (; i < 3;) {
// 	console.log(i++);
// }

// let sum = 0;
// while (true) {
// 	let value =+ prompt("Введите число","");
// 	if(!value)break;
// 	sum += value;
// }
// console.log('Сумма: ' +sum);

// for (let i = 0; i < 10; i++) {
// 	if (i%2 == 0) continue;
// 	console.log(i);
// }

// if (i > 5) {
// 	console.log(i);
// }else{
// 	continue;
// }

// for (let i = 0; i < 3; i++) {
// 	for (let j = 0; j < 3; j++){
// 		console.log('Значение на координатах (${i}, ${j})');
// 	}
// }
// console.log('Готово');
// for (let i = 0; i < 3; i++) {
// 	for (let j = 0; j < 3; j++){
// 		let input = prompt (`Значение на координатах (${i}, ${j})`,'');
// 	}
// }
// console.log('Готово');
// outer:for (let i = 0; i < 3; i++) {
// 	for (let j = 0; j < 3; j++){
// 		let input = prompt (`Значение на координатах (${i}, ${j})`,'');
// 		if (!input) break outer;
// 	}
// }
// console.log('Готово');