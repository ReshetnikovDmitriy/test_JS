'use strict'

//разное

// let age = 33;
// let name = 'Dima'
// if ( age > 36) {
// 	alert('Я силён');
// }else {
// 	alert('Я молоден, меня зовут' + ' ' + name + '!');
// }

// let pizza = 7;
// while(pizza > 0) {
// 	document.write('вкусная пицца <br>');
// 	pizza = pizza - 1;
// }
// document.write('пицца закончилась');

// let avia = -11;
// if (avia >= 5) {
// 	alert ('вас 5');
// }else if (avia == 3) {
// 	alert (3);
// }else if (avia <= 2 && avia >=0) {
// 	alert (0);
// }else {
// 	alert ('-');
// }

// bottles

// var word = "bottles";
// var count = 99;
// while (count > 0) {
// 	console.log(count + " " + word + "of beer on the wall");
// 	console.log(count + " " + word + "of beer");
// 	console.log("Take one down, pass it around");
// 	count = count - 1;
// 	if (count > 0) {
// 		console.log(count + " " + word + "of beer on the wall");
// 	} else {
// 		console.log("No more " + " " + word + "of beer on the wall");
// 	}
// }

//Морской бой

// var randomLoc = Math.floor(Math.random() * 5);
// var location1 = randomLoc;
// var location2 = location1 +1;
// var location3 = location2 +1;
// var guess;//номер текущей попытки
// var hits = 0;//количество попаданий
// var guesses = 0;// количество попыток
// var isSunk = false;

// while (isSunk == false) {
// 	guess = prompt("Ready, i am , fire! (enter a number 0-6): ");
// 	if (guess < 0 || guess > 6) {
// 		alert("please enter a valid cell number")
// 	} else {
// 		guesses = guesses + 1;
// 		if (guess == location1 || guess == location2 || guess == location3) {
// 			alert("hit");
// 			hits = hits + 1;
// 			if (hits == 3) {
// 				isSunk = true;
// 				alert("You thank my battleship!");
// 			}
// 		} else {
// 			alert("MISS");
// 		}
// 	}
// }
// var stats = "You took " + guesses + "guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
// alert(stats);


//умная машина

// function clunk (times) {
// 	var num = times;
// 	while (num > 0) {
// 		display ('clunk');
// 		num = num - 1;
// 	}
// }
// function thingamajin (size) {
// 	var facky = 1;
// 	clunkCounter = 0;
// 	if (size == 0) {
// 		display ('clunk');
// 	}else if (size == 1) {
// 		display ('thunk');
// 	}else {
// 		while (size > 1) {
// 			facky = facky * size;
// 			size = size - 1;
// 		}
// 		clunk(facky);
// 	}
// }
// function display (output) {
// 	console.log(output);
// 	clunkCounter = clunkCounter + 1;
// }
// var clunkCounter = 0;
// thingamajin (0);
// console.log(clunkCounter);


// массивы

// var products = ['a', 'b', 'c', 'd', 'e'];
// var last = products.length - 1;
// var recent = products [last];
// console.log(products);
// console.log(recent);


//генератор фраз
// function makePhrases () {
// 	var words1 = ['a', 'b', 'c', 'd', 'e'];
// 	var words2 = ['f', 'g', 'h', 'k', 'l'];
// 	var words3 = ['i', 'j', 'o', 'p', 'r'];

// 	var rand1 = Math.floor(Math.random() * words1.length);
// 	var rand2 = Math.floor(Math.random() * words2.length);
// 	var rand3 = Math.floor(Math.random() * words3.length);

// 	var phrase = words1[rand1] + ' ' + words2[rand2] + ' ' + words3[rand3];
// 	alert(phrase);
// }
// makePhrases();

// var scores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// function printAndGetHighScore (scores) {
// 	var highScore = 0;
// 	var output;
// 	for (var i = 0; i < scores.length; i = i + 1) {
// 		output = 'Hi' + i + 'hil' + scores[i];
// 		console.log(output);
// 		if (scores[i] > highScore) {
// 			highScore = scores[i];
// 		}
// 	}
// 	return highScore;
// }

// function getBestResults (scores, highScore) {
// 	var bestSolutions = [];
// 	for (var i = 0; i < scores.length; i++) {
// 		if (scores[i] == highScore) {
// 			bestSolutions.push(i);
// 		}
// 	}
// 	return bestSolutions;
// }

// var highScore = printAndGetHighScore (scores);
// console.log('test' + scores.length);
// console.log('hi test' + highScore);

// var bestSolutions = getBestResults (scores, highScore);
// console.log('solutions' + bestSolutions);