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
const classTwo = 'cell-Two';
const classThree = 'cell-Three';

const grid = document.getElementById('grid');

for (i = 0; i < totalOne; i++) {
	const cell = createClassedCell(classOne);
	grid.appendChild(cell);
	cell.innerText = i + 1;
}
