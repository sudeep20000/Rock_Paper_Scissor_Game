'use strict';

const btnShow = document.querySelector('.rule-btn');
const ruleSec = document.querySelector('.rule-sec');
const btnCancle = document.querySelector('.cancle');
const playAgain = document.querySelectorAll('.play_again');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const head = document.querySelector('.header');
const mainSec = document.querySelector('.main-content');
const layoutSec = document.querySelector('.layout');
const checkAreaSec = document.querySelector('.check-area');
const userLayers = document.querySelectorAll('.layer1');
const comLayers = document.querySelectorAll('.layer2');
const winBgcSec = document.querySelector('.win-bgc');
const nextBtn = document.querySelector('.next-btn');
const ruleBtn = document.querySelector('.rule-btn');
const userPick = document.querySelector('.pick-1');
const pcPick = document.querySelector('.pick-2');
const userPickImg = document.querySelector('.user-pick-img');
const pcPickImg = document.querySelector('.pc-pick-img');
const verdict1 = document.querySelector('.msg1');
const verdict2 = document.querySelector('.msg2');
const comSc = document.querySelector('.com-board');
const userSc = document.querySelector('.user-board');

let com_score;
let user_score;
let no;

const init = function () {
	if (localStorage.length == 0) {
		com_score = 0;
		user_score = 0;
	} else {
		com_score = Number(localStorage.getItem('comScore'));
		user_score = Number(localStorage.getItem('userScore'));
		comSc.textContent = com_score;
		userSc.textContent = user_score;
	}
}
init();

const colors = {
	1: '#0074b6',
	2: '#FFA943',
	3: '#BD00FF',
}

const obj = {
	1: 'rock',
	2: 'paper',
	3: 'scissor',
}

const openRules = function () {
	ruleSec.classList.remove('hide');
}

const closeRules = function () {
	ruleSec.classList.add('hide');
}

const goToNext = function () {
	head.classList.add('hide');
	mainSec.classList.add('hide')
	checkAreaSec.classList.add('hide');
	winBgcSec.classList.remove('hide');
}

const winMark = function (arr) {
	for (let i = 0; i < arr.length; i++)
		arr[i].classList.remove('notVisible');
}

const remWinMark = function (arr) {
	for (let i = 0; i < arr.length; i++)
		arr[i].classList.add('notVisible');
}

const newGame = function () {
	if (winBgcSec.classList.contains('hide')) {
		remWinMark(userLayers);
		remWinMark(comLayers);
		checkAreaSec.classList.add('hide');
		layoutSec.classList.remove('hide');
		nextBtn.classList.add('hide');
	} else {
		winBgcSec.classList.add('hide');
		head.classList.remove('hide');
		mainSec.classList.remove('hide')
		layoutSec.classList.remove('hide');
		nextBtn.classList.add('hide');
	}
}

btnShow.addEventListener('click', openRules);
btnCancle.addEventListener('click', closeRules);
nextBtn.addEventListener('click', goToNext);
for (let i = 0; i < playAgain.length; i++) {
	playAgain[i].addEventListener('click', newGame);
}

const check = function (no, randNum) {
	if ((obj[no] == 'rock' && obj[randNum] == 'scissor') || (obj[no] == 'paper' && obj[randNum] == 'rock') || (obj[no] == 'scissor' && obj[randNum] == 'paper')) {
		user_score += 1;
		userSc.textContent = user_score;
		localStorage.setItem('userScore', String(user_score));
		verdict1.textContent = 'YOU WIN';
		verdict2.classList.remove('hide');
		nextBtn.classList.remove('hide');
		winMark(userLayers);

	} else if ((obj[no] == 'rock' && obj[randNum] == 'rock') || (obj[no] == 'paper' && obj[randNum] == 'paper') || (obj[no] == 'scissor' && obj[randNum] == 'scissor')) {
		verdict1.textContent = 'TIE UP';
		verdict2.classList.add('hide');
	}
	else {
		com_score += 1;
		comSc.textContent = com_score;
		localStorage.setItem('comScore', String(com_score));
		verdict1.textContent = 'YOU LOST';
		verdict2.classList.remove('hide');
		winMark(comLayers);
	}
}

const generateRN = function () {
	const randNum = Math.trunc(Math.random() * 3) + 1;
	return randNum;
}

const rockData = function () {
	no = 1;
	let randNum = generateRN();
	layoutSec.classList.add('hide');
	checkAreaSec.classList.remove('hide');
	userPickImg.src = `./images/image-${no}.png`;
	userPick.style.backgroundColor = 'white';
	userPick.style.borderColor = colors[no];

	pcPickImg.src = `./images/image-${randNum}.png`;
	pcPick.style.backgroundColor = 'white';
	pcPick.style.borderColor = colors[randNum];
	check(no, randNum);
}
rock.addEventListener('click', rockData);

const paperData = function () {
	no = 2;
	let randNum = generateRN();
	layoutSec.classList.add('hide');
	checkAreaSec.classList.remove('hide');
	userPickImg.src = `./images/image-${no}.png`;
	userPick.style.backgroundColor = 'white';
	userPick.style.borderColor = colors[no];

	pcPickImg.src = `./images/image-${randNum}.png`;
	pcPick.style.backgroundColor = 'white';
	pcPick.style.borderColor = colors[randNum];
	check(no, randNum);
}
paper.addEventListener('click', paperData);

const scissorData = function () {
	no = 3;
	let randNum = generateRN();
	layoutSec.classList.add('hide');
	checkAreaSec.classList.remove('hide');
	userPickImg.src = `./images/image-${no}.png`;
	userPick.style.backgroundColor = 'white';
	userPick.style.borderColor = colors[no];

	pcPickImg.src = `./images/image-${randNum}.png`;
	pcPick.style.backgroundColor = 'white';
	pcPick.style.borderColor = colors[randNum];
	check(no, randNum);
}
scissor.addEventListener('click', scissorData);
