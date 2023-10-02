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

// #11

// function work(hour, minute) {
// 	console.log(`я закончил работу в ${hour} : ${minute}`);
// }
// work(17,30);

// let a = 2;
// let b = 3;
// function work(a, b) {
// 	a = a + b;
// 	console.log(a);
// }
// work(a,b);
// console.log(a);

// function sum (a,b){
// 	return a + b;
// }
// const result = sum(4,3);
// console.log(result);

// function sum (a = 3) {
// 	console.log(a);
// }
// sum();

// function work() {
// 		console.log('hi');
// 	}
// 	work();

// let work = (a)=>console.log(a);
// work('hi');

// let work = (a,b)=> a + b;
// console.log(work(2,3));

// let work = (a,b)=> a + b;
// console.log(work(2,3));

// let work = (a)=> {
// 	let result = a * a;
// 	console.log(result);
// }
// work(2);

// let work = (a)=> {
// 	let result = a * a;
// 	return result;
// }
// console.log(work(3));

// #12

// let text = 'ABCD';
// console.log(text.length);

// let text = 'Всем привет, меня зовут Дима';
// console.log(text.indexOf('Дима'));

// let text = 'Всем привет, меня зовут Дима';
// console.log(text.lastIndexOf('Дима'));

// let text = 'Всем привет, меня зовут Дима';
// console.log(text.lastIndexOf('вадим')); // не найден рузбтат, показывает -1

// let text = 'Всем привет, меня зовут Дима';
// console.log(text.search('Дима'));

// let text = 'Всем привет, меня зовут Дима';
// console.log(text.slice(7,10));

// let text = 'Всем привет, меня зовут Дима';
// console.log(text.slice(-12,-10)); // от конца строки с минусом

// let text = 'Всем привет, меня зовут Дима';
// console.log(text.slice(7));

// let text = 'Всем привет, меня зовут Дима';
// console.log(text.substr(7,6)); // второй параметр длина

// let text = 'Всем привет, меня зовут Дима';
// console.log(text.substring(7));

// let text = 'Всем привет, меня зовут Дима';
// console.log(text.substring(-17,-12)); //минус не работает в этом свойстве

// let text = 'Всем привет, меня зовут Дима';
// console.log(text.replace('Дима','Вадим'));

// let text = 'Всем привет, меня зовут Дима Дима Дима Дима';
// console.log(text.replace(/Дима/i,'Вадим'));

// let text = 'Всем привет, меня зовут Дима Дима Дима Дима';
// console.log(text.replace(/Дима/g,'Вадим')); //глобально

// let text = 'Всем привет, меня зовут Дима Дима Дима Дима';
// console.log(text.toUpperCase());

// let text = 'Всем привет, меня зовут Дима Дима Дима Дима';
// console.log(text.toLowerCase());

// let txt1 = 'меня зовут';
// let txt2 = 'Дима';
// console.log(txt1.concat(' ', txt2));

// let text = 'Всем привет, меня зовут Дима';
// console.log(text.charAt(0));

// let text = 'Всем привет, меня зовут Дима';
// console.log(text.charCodeAt(3));

// let text = 'Всем привет, меня зовут Дима';
// console.log(text[0]);

// let txt = 'a,b,c,d';
// console.log(txt.split(','));

// let txt = 'hello';
// console.log(txt.split(''));

// let num = 159;
// console.log(num.toString());

// let num = 1.23456789;
// console.log(num.toExponential(4));

// let num = 1.23456789;
// console.log(num.toFixed(4));

// let num = 1.23456789;
// console.log(num.toPrecision(4));

// let num = 1.23456789;
// console.log(num.valueOf());

// console.log(Number(true));
// console.log(Number(false));
// console.log(Number('1'));
// console.log(Number(' 1'));
// console.log(Number(' 1 '));
// console.log(Number(' 10 '));
// console.log(Number('1.23'));
// console.log(Number(' 1,23 '));
// console.log(Number('Dima'));

// console.log(parseInt('10.23 dima'));
// console.log(parseInt('dima 10.23'));
// console.log(parseInt('10 20 30'));

// console.log(parseFloat('10.23 dima'));
// console.log(parseFloat('dima 10.23'));
// console.log(parseFloat('10 20 30'));

// let max = Number.MAX_VALUE;
// console.log(max);
// let min = Number.MIN_VALUE;
// console.log(min);

// let a = 100 / 'dima'; // a будет NaN

// function text(textSplit, separator) {
// 	let arrayText = textSplit.split(separator);
// 	console.log(arrayText.join(' / '));
// }
// let str = 'я люблю JS';
// let space = ' ';
// text(str, space);


// #14

// function one() {
// 	setTimeout(function(){
// 		console.log('one');
// 	},1000);
// }
// function two() {
// 	console.log('two');
// }
// one();
// two();

// function test(subject, callback) {
// 		console.log(`Начало написания теста по предмету: ${subject}`);
// 		callback();
// 	}
// test('физика', function() {
// 	console.log(`Окончание теста`);
// });
// function test(subject, callback) {
// 	console.log(`Начало написания теста по предмету: ${subject}`);
// 	callback();
// }
// function finish(){
// 	console.log(`Окончание теста`);
// }
// test('физика', finish);

// #15

// let user = {
// 	name: 'Dima',
// 	age: '36',
// 	eyescolor: 'grey'
// };
// // user.name = 'Ivan'; //меняем имя
// // console.log(user.name);
// user.height = 182; //добавили свойство
// delete user.age; //удаляем свойство
// console.log(user);

// let taxi = {
// 	make: 'Web Mottors',
// 	model: 'Taxi',
// 	year: 1990,
// 	color: 'yellow',
// 	passenger: 4,
// 	milage: 28000
// };
// function prequal (car) {
// 	if (car.milage > 10000) {
// 		return false;
// 	}else if (car.year > 2000) {
// 		return false;
// 	}
// 	return true;
// }
// let wortALook = prequal(taxi);
// if (wortALook) {
// 	console.log(`Ты должен это всё проверить ${taxi.make} ${taxi.model}`);
// }else {
// 	console.log(`Вы действительно должны проверить ${taxi.make} ${taxi.model}`);
// }

// let taxi = {
// 	make: 'Web Mottors',
// 	model: 'Taxi',
// 	year: 1990,
// 	color: 'yellow',
// 	passenger: 4,
// 	milage: 28000,
// 	started: false,
// 	start: function() {
// 		this.starded = true;
// 	},
// 	stop: function() {
// 		this.started = false;
// 	},
// 	drive: function() {
// 		if(this.started) {
// 			console.log('Врум .... врум');
// 		}else {
// 			console.log('Заведи мотор');
// 		}
// 	}
// };
// taxi.drive();


// #16

// let cars = ['BMW', 'AUDI', 'TOYOTA'];
// cars [2] = 'Газель';
// console.log(cars);

// let user = ['Dima', 'Oleg', 'Grisha', 'Evdokia'];
// console.log(user.length);
// user.push(180);
// console.log(user);
// console.log(user.toString());
// console.log(user.join(' '));
// console.log(user.pop());
// user.shift();
// console.log(user);
// user.unshift(180);
// console.log(user);
// delete user [0]; // не использовать
// user.splice(2,0,180,8);
// console.log(user);
// let user = ['Dima', 'Oleg', 'Grisha', 'Evdokia'];
// let user1 = ['Sonay', 'Oleg', 'Grisha', 'Evdokia'];
// let family = user.concat(user1);
// console.log(family);
// let family = user.concat(user1, [180,35]);
// console.log(family);
// let user2 = user.slice(1);
// console.log(user2);
// let user2 = user.slice(1,2);
// console.log(user2);
// let user = ['Dima', 'Oleg', 'Grisha', 'Evdokia', 28, 32];
// console.log(user.sort());
// let user = ['Dima', 'Oleg', 'Grisha', 'Evdokia', 28, 32];
// user.sort();
// user.reverse();
// console.log(user);
// let user = ['Dima', 'Oleg', 'Grisha', 'Evdokia', 28, 32];
// let number = [55, 2, 44, 103, 99];
// number.sort(function (a, b) {
// 	return a - b;
// });
// console.log(number);
// let number = [55, 2, 44, 103, 99];
// number.sort(function (a, b) {
// 	return b - a;
// });
// console.log(number);
// let number = [55, 2, 44, 103, 99];
// number.sort(function (a, b) {
// 	return 0.5 - Math.random();
// });
// console.log(number);


// #17

// function change (x) {
// 	x = 2 * x;
// 	console.log('x в change:', x);
// }
// let y = 2;
// console.log('y до change:', y);
// change (y);
// console.log('y после change:', y);

// function change (user) {
// 	user.name = 'Anna';
// }
// let dima = {
// 	name: 'Dima'
// };
// console.log('до change:', dima.name);
// change (dima);
// console.log('после change:', dima.name);

// function change (user) {
// 	user = {
// 		name: 'Anna'
// 	};
// }
// let dima = {
// 	name: 'Dima'
// };
// console.log('до change:', dima.name);
// change (dima);
// console.log('после change:', dima.name);

// let log = function(a,b,c) {
// 	console.log(a,b,c);
// };
// log(...['spread', 'rest', 'operator']);

// let log = function(a,b,c) {
// 	console.log(a,b,c);
// };
// log.apply(null, ['spread', 'rest', 'operator']);

// let arr = ['will', 'love'];
// let arr2 = ['you', 'we', ...arr, 'spread', 'operator'];
// console.log(arr2);

// let birthday = new Date(1987, 3, 19);
// console.log(birthday);
// let birthday = [1987, 3, 19];
// let day =new Date(...birthday);
// console.log(day);
// console.log(birthday);

// let log = function(a,b, ...rest) {
// 	console.log(a,b, rest);
// };
// log('one', 'rest', 'spread', 'user');

// let log = function( ...args) {
// 	console.log(args);
// };
// log(1,2,3,4,5);


// #18

// class Person {
// 	constructor (firstName, lastName) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}
// 	getFullName () {
// 		return this.firstName + ' ' + this.lastName;
// 	}
// }
// let person = new Person('Dima', 'Dmitriy');
// console.log(person.firstName);
// console.log(person.getFullName());


// let elem = document.getElementById('test');
// console.log(elem);
// elem.innerHTML = '1';
// elem.outerHTML = '<strong>1</strong>';
// console.log(elem);

// let elems = document.getElementsByTagName('p');
// console.log(elems);
// elems[0].innerHTML = '1';
// elems[1].innerHTML = '1';
// elems[2].innerHTML = '1';

// let elems = document.getElementsByTagName('p');
// for (let i = 0; i < elems.length; i++) {
// 	elems[i].innerHTML = "1";
// }

// document.forms[0].innerHTML = '!';
// document.forms[1].elements[0].value = '#';
// document.forms.forma1.innerHTML = '!';
// document.forms['forma2'].innerHTML = '?';

// let elem = document.getElementById('test1');
// elem.setAttribute('value', '33');
// console.log(elem.getAttribute('value'));

// let elems = document.getElementsByClassName('a');
// for (let i = 0; i < elems.length; i++) {
// 	elems[i].innerHTML = "1";
// }

// let elem = document.querySelector('input#test3');
// console.log(elem.getAttribute('value'));
// console.log(elem);

// let elems = document.querySelectorAll('.a');
// for (let i = 0; i < elems.length; i++) {
// 	elems[i].innerHTML = '7';
// }


// #23

// function sum() {
// 	let number1 = +document.querySelector('#number1').value;
// 	let number2 = +document.querySelector('#number2').value;
// 	let sum = number1 + number2;
// 	document.querySelector('#answer').textContent = sum;
// }

// let btn = document.querySelector('#btn');
// btn.onclick = function() {
// 	console.log('вы кликнули на кнопку');
// }

// function changeBgColor() {
// 	document.body.style.backgroundColor = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`;
// }
// document.onclick = changeBgColor();

// function message() {
// 	console.log(this.textContent);
// }
// let btns = document.querySelectorAll('button');
// btns.forEach(function(element) {
// 	element.onclick = message;
// });

// let element = document.querySelector('#btn');
// console.log(element.onclick);

// let element = document.querySelector('#btn');
// 	element.onclick = function () {
// 		console.log(`id = ${this.id}`);
// 	}
// 	element.onclick = function () {
// 		console.log(`text = ${this.textContent}`);
// 	}

// function changeBgColor() {
// 	document.body.style.backgroundColor = '#3f51b5';
// }

// document.addEventListener('click', changeBgColor, false);


//# 29

// let now = new Date().toLocaleDateString();
// console.log(now);
// let now1 = new Date().toLocaleTimeString();
// console.log(now1);
// let now1 = new Date().toLocaleTimeString().slice(0, -3);
// console.log(now1);
// let now = new Date().toLocaleString();
// console.log(now);

// let days = ['Вc', 'пон', 'вт', 'ср', 'чт', 'пт', 'сб'];
// let now = new Date();
// console.log('Сегодня' + ' ' + days[now.getDate()]);

// let date1 = new Date('2015-04-02');
// console.log(date1);
// let date2 = new Date('2015-02-02T11:40');
// console.log(date2);
// let date3 = new Date('2015-02-02T11:40+03:00');
// console.log(date3);


//# 30

// function myFunc() {
// 	console.log('after 4 seconds');
// }
// window.setTimeout(myFunc,4000);
// console.log('Hi');


// function sayHellow(name) {
// 	console.log(`привет, ${name}!`);
// }
// setTimeout (sayHellow, 3000, 'Dima');


// setTimeout (function (name) {
// 	console.log(`привет, ${name}!`);
// }, 3000, 'Dima');

// function sayHellow() {
// 	console.log('hi');
// }
// setTimeout (sayHellow(), 3000);

let timeoutid = window.setTimeout(() => {
	console.log('messedge');
}, 3000);

clearTimeout(timeoutid);