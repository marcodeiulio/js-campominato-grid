/* 
L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

//# Functions
const createClassedCell = (cellClass) => {
	const cell = document.createElement('div');
	cell.className = cellClass;
	return cell;
}

const toggleClassOnClick = (target, classToToggle) => {
	target.addEventListener('click', function () {
		target.classList.toggle(classToToggle);
	});
}
/* 
const toggleClass = (target, classToToggle) => {
	if (target.classList.contains(classToToggle)) {
		target.classList.remove(classToToggle);
	} else if (!(target.classList.contains(classToToggle))) {
		target.classList.add(classToToggle);
	}
} */

//# Program

const cellsOne = 10;
const cellsTwo = 9;
const cellsThree = 7;

const rowsOne = 10;
const rowsTwo = 9;
const rowsThree = 7;

const totalOne = cellsOne * rowsOne;
const totalTwo = cellsTwo * rowsTwo;
const totalThree = cellsThree * rowsThree;

const classOne = 'cell-one';
const classTwo = 'cell-two';
const classThree = 'cell-three';

const classActive = 'active';

const classRemove = 'remove';

const grid = document.getElementById('grid');

const spotlight = document.getElementById('spotlight');

const start = document.getElementById('start');

const reset = document.getElementById('reset');

start.addEventListener('click', function () {

	const difficulty = parseInt(document.getElementById('difficulty').value);
	console.log('Difficulty chosen: ' + difficulty);

	if (difficulty === 1) {
		for (i = 0; i < totalOne; i++) {
			const cell = createClassedCell(classOne);
			grid.appendChild(cell);
			cell.innerText = i + 1;
			toggleClassOnClick(cell, classActive);
			toggleClass(spotlight, classRemove);
		}
	} else if (difficulty === 2) {
		for (i = 0; i < totalTwo; i++) {
			const cell = createClassedCell(classTwo);
			grid.appendChild(cell);
			cell.innerText = i + 1;
			toggleClassOnClick(cell, classActive);
			toggleClass(spotlight, classRemove);
		}
	} else if (difficulty === 3) {
		for (i = 0; i < totalThree; i++) {
			const cell = createClassedCell(classThree);
			grid.appendChild(cell);
			cell.innerText = i + 1;
			toggleClassOnClick(cell, classActive);
			toggleClass(spotlight, classRemove);
		}
	} else {
		alert('Please, choose a difficulty.');
	}
});

reset.addEventListener('click', function () {
	location.reload();
});