console.log('Sorry , developers tools are blocked here....');

const newGameBtn = document.getElementById('newGameBtn')
const checkWinBtn = document.getElementById('checkWinBtn')
const numpad1 = document.getElementById('number1')
const numpad2 = document.getElementById('number2')
const numpad3 = document.getElementById('number3')
const numpad4 = document.getElementById('number4')
const numpad5 = document.getElementById('number5')
const numpad6 = document.getElementById('number6')
const numpad7 = document.getElementById('number7')
const numpad8 = document.getElementById('number8')
const numpad9 = document.getElementById('number9')
const numpad10 = document.getElementById('number10')
const numpad11 = document.getElementById('number11')
const numpad12 = document.getElementById('number12')
const numpad13 = document.getElementById('number13')
const numpad14 = document.getElementById('number14')
const numpad15 = document.getElementById('number15')
const numpad16 = document.getElementById('number16')
const startGameInstructions = document.getElementById('start-game');
const gridContainer = document.getElementById('grid');
const body = document.getElementById('body')
const navbar = document.getElementById('navbar')

if(!localStorage.getItem('PB difficile') && !localStorage.getItem('difficile')){
    localStorage.setItem('PB difficile', 'N/D')
    localStorage.setItem('difficile', '0')
}

//Dynamically creating and adding cells to the page
var cell = [];

function createCells(numCells){
    var idNumber = 0
    for(let i = 0; i < Math.sqrt(numCells); i++){
        for(let j = 0; j < Math.sqrt(numCells); j++){
            var div = document.createElement("div");
            div.innerHTML = ''
            div.className = 'cell show'
            div.id = 'cell-' + idNumber
            boldEverything(i, j, div)
            cell.push(div)
            idNumber++
        }
    }
    return cell;
}

let createdGrid = createCells(256)
addCellstoPage(createdGrid)

function boldEverything(i, j, div){
    if(i == 0 || i == 4 || i == 8 || i == 12){
        div.style.borderTop = '.3vw black solid'
    }if(j == 0 || j == 4 || j == 8 || j == 12){
        div.style.borderLeft = '.3vw black solid'
    }if(j == 15){
        div.style.borderRight = '.3vw black solid'
    }if(i == 15){
        div.style.borderBottom = '.3vw black solid'
    }
    
}

function addCellstoPage(arr){
    for(let i = 0; i < arr.length; i++){
        document.getElementById('grid').appendChild(arr[i])
    }
    
}

//http://w01.tp1.jp/~sr10026691/Ans1616PE.html (grille de 16x16 deja faite)

const grid = [
    ['', '', 4, '', '', 16, 7, '', '', '', 11, '', 8, '', 1, 3,
    '', 9, '', 11, '', '', 13, '', '', '', '', '', 7, '', 10, '',
    '', 15, '', 16, 1, 3, '', 12, '', '', '', '', '', 9, '', '',
    8, '', '', '', '', '', '', 9, '', '', 16, 10, 13, 6, '', '',
    '', 1, '', 9, '', 6, '', '', 10, '', 12, '', '', '', 13, '',
    14, '', '', '', '', '', 16, '', '', 11, 6, 2, 3, 1, 8, '',
    '', '', '', '', 13, '', '', 4, '', 3, 9, '', 16, '', '', 12,
    '', '', '', '', 8, '', 3, '', 4, '', 15, '', 11, 5, 2, '',
    9, '', '', 5, 11, '', '', 2, 7, '', 1, 16, '', '', 14, 10,
    '', '', '', 4, 14, 10, '', '', 8, '', '', '', 12, '', 16, '',
    12, '', 16, 1, '', 5, 9, '', '', 15, '', '', '', 2, '', 4,
    '', '', 14, '', '', '', '', 7, 2, 6, '', '', '', 8, '', 5,
    10, 14, '', '', 12, 8, '', '', '', '', '', '', 5, 3, '', 2,
    '', '', 12, '', '', 2, '', '', 14, 10, '', '', '', '', 6, '',
    '', '', '', '', '', '', 4, 11, '', '', '', '', 10, '', 15, '',
    4, '', 6, 13, '', '', '', '', '', '', '', 9, '', 16, '', ''],
    
    [14, 11, '', '', '', '', '', 15, '', '', '', '', '', '', '', '',
    '', '', '', 15, 3, '', 6, 13, '', '', 11, 10, '', 2, '', '',
    '', 9, 2, '', 14, '', '', 7, '', '', '', 8, '', 4, '', 5,
    '', '', '', 13, 16, 2, 9, '', '', 5, '', '', 7, 10, '', '',
    '', '', 15, '', 12, '', '', '', '', '', '', '', '', '', 8, '',
    12, '', 13, '', 6, '', 8, 3, '', '', 10, '', 16, 7, '', '',
    6, '', '', 3, '', 7, 2, 16, '', '', '', '', 14, '', '', 11,
    9, 2, 7, '', '', 15, '', '', '', '', '', 1, 5, 13, '', '',
    13, '', '', '', '', 9, '', 8, '', 15, '', 12, '', '', '', '',
    '', 16, '', '', '', 11, '', 2, '', 13, 3, '', '', '', '', '',
    '', 14, '', 2, '', '', 5, 10, '', 1, 16, '', '', 6, '', '',
    15, 5, 12, '', 13, 6, 3, '', '', '', 14, 11, 8, '', '', 1,
    4, '', 3, '', 8, '', '', '', 11, '', '', '', 9, '', '', 2,
    8, '', '', 6, '', '', 7, '', 12, 4, 13, 3, '', '', '', 10,
    '', 7, '', '', '', 5, '', 11, 6, '', 1, '', '', '', '', 4,
    '', 15, 5, 11, '', '', '', '', '', '', '', 14, 6, '', '', '']
]

const solution = [
    [13, 6, 4, 14, 10, 16, 7, 15, 9, 2, 11, 5, 8, 12, 1, 3,
2, 9, 5, 11, 4, 14, 13, 6, 12, 8, 3, 1, 7, 15, 10, 16,
7, 15, 10, 16, 1, 3, 8, 12, 6, 13, 14, 4, 2, 9, 5, 11,
8, 12, 1, 3, 5, 11, 2, 9, 15, 7, 16, 10, 13, 6, 4, 14,
3, 1, 8, 9, 2, 6, 11, 5, 10, 16, 12, 7, 14, 4, 13, 15,
14, 4, 13, 15, 7, 12, 16, 10, 5, 11, 6, 2, 3, 1, 8, 9,
11, 5, 2, 6, 13, 15, 14, 4, 1, 3, 9, 8, 16, 10, 7, 12,
16, 10, 7, 12, 8, 9, 3, 1, 4, 14, 15, 13, 11, 5, 2, 6,
9, 8, 3, 5, 11, 4, 6, 2, 7, 12, 1, 16, 15, 13, 14, 10,
6, 2, 11, 4, 14, 10, 15, 13, 8, 9, 5, 3, 12, 7, 16, 1,
12, 7, 16, 1, 3, 5, 9, 8, 13, 15, 10, 14, 6, 2, 11, 4,
15, 13, 14, 10, 16, 1, 12, 7, 2, 6, 4, 11, 9, 8, 3, 5,
10, 14, 15, 7, 12, 8, 1, 16, 11, 4, 13, 6, 5, 3, 9, 2,
1, 16, 12, 8, 9, 2, 5, 3, 14, 10, 7, 15, 4, 11, 6, 13,
5, 3, 9, 2, 6, 13, 4, 11, 16, 1, 8, 12, 10, 14, 15, 7,
4, 11, 6, 13, 15, 7, 10, 14, 3, 5, 2, 9, 1, 16, 12, 8],

[14, 11, 10, 7, 5, 4, 12, 15, 1, 16, 9, 2, 13, 8, 6, 3,
5, 12, 4, 15, 3, 8, 6, 13, 7, 14, 11, 10, 1, 2, 9, 16,
16, 9, 2, 1, 14, 10, 11, 7, 13, 3, 6, 8, 15, 4, 12, 5,
3, 6, 8, 13, 16, 2, 9, 1, 15, 5, 12, 4, 7, 10, 11, 14,
11, 10, 15, 14, 12, 13, 4, 5, 16, 9, 2, 7, 3, 1, 8, 6,
12, 4, 13, 5, 6, 1, 8, 3, 14, 11, 10, 15, 16, 7, 2, 9,
6, 8, 1, 3, 9, 7, 2, 16, 5, 12, 4, 13, 14, 15, 10, 11,
9, 2, 7, 16, 11, 15, 10, 14, 3, 6, 8, 1, 5, 13, 4, 12,
13, 3, 6, 4, 1, 9, 16, 8, 10, 15, 5, 12, 2, 11, 14, 7,
1, 16, 9, 8, 7, 11, 14, 2, 4, 13, 3, 6, 10, 12, 5, 15,
7, 14, 11, 2, 15, 12, 5, 10, 8, 1, 16, 9, 4, 6, 3, 13,
15, 5, 12, 10, 13, 6, 3, 4, 2, 7, 14, 11, 8, 9, 16, 1,
4, 13, 3, 12, 8, 16, 1, 6, 11, 10, 15, 5, 9, 14, 7, 2,
8, 1, 16, 6, 2, 14, 7, 9, 12, 4, 13, 3, 11, 5, 15, 10,
2, 7, 14, 9, 10, 5, 15, 11, 6, 8, 1, 16, 12, 3, 13, 4,
10, 15, 5, 11, 4, 3, 13, 12, 9, 2, 7, 14, 6, 16, 1, 8]
] 

//Game functions
function startGame(){
    newGrid = randomGrid(grid);
    for(let i = 0; i < cell.length ; i++){ 
        cell[i].classList.add('show')
        cell[i].innerText = newGrid[i]
        if(newGrid[i] == ''){
            cell[i].classList.remove('incorrect')
            cell[i].classList.remove('correct')
            cell[i].classList.remove('show')
        }else{
            cell[i].classList.remove('incorrect')
            cell[i].classList.remove('correct')
        }
    } 
    resetTimer()
    stopTimer()
    setTimeout('startTimer()', 10)
    startGameInstructions.classList.add('hidden');
    setTimeout(slowlyHide, 200);
    if(selected.length != 0) selected[0].classList.remove('selected');
    selected = []
    localStorage.setItem('difficile number', number)
    localStorage.setItem('difficile win', false)
}


//Randomly chooses a grid preset
//https://www.w3schools.com/js/js_random.asp

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var number = localStorage.getItem('difficile number')

var oldGrid = []

oldGrid.push(localStorage.getItem('difficile number'))

function randomGrid(grid){
    let newGrid = []
    number = getRndInteger(0, (grid.length-1)) 
    if(oldGrid.length == grid.length){
        for(let i = 0; i < grid.length; i++) oldGrid.shift();
    }
    while(oldGrid.includes(number)){
        number = getRndInteger(0, (grid.length-1))
    }
    newGrid = grid[number]
    gridSolution = solution[number]
    oldGrid.push(number)
    return newGrid
}

var gridSolution = solution[number]

function checkWin(){
    var correctAnsw = 0
    for(let i = 0; i < cell.length; i++){  
        if(!cell[i].classList.contains('show')){
            if(cell[i].innerText == gridSolution[i]){
                cell[i].classList.remove('incorrect')
                cell[i].classList.add('correct')
                correctAnsw += 1
            }else{
                cell[i].classList.add('incorrect')
                cell[i].classList.remove('correct')
            }
        }else{
            correctAnsw += 1
        }
    }
    if(correctAnsw == cell.length){
        correctAnsw = 0
        stopTimer()
        if(localStorage.getItem('PB difficile') == 'N/D' || PersonalBest(timer.innerHTML, localStorage.getItem('PB difficile'))){
            localStorage.setItem('PB difficile', timer.innerHTML)
        }
        localStorage.setItem('difficile', numberOfWins(localStorage.getItem('difficile')))
        localStorage.setItem('difficile win', true)
    }
    if(selected.length > 0){
        selected[0].classList.remove('selected')
        selected = []
    }
}

var selected = []

function selectGrid(cellNum){
    if(!createdGrid[cellNum].classList.contains('show') && !createdGrid[cellNum].classList.contains('correct')){ 
        if(selected.length === 0){
            createdGrid[cellNum].classList.add('selected')
            selected.push(createdGrid[cellNum])
        }else if(selected[0] === createdGrid[cellNum]){ 
            selected[0].classList.remove('selected')
            selected.shift()
            selected.shift()
        }
        else{ 
            selected[0].classList.remove('selected')
            selected.shift()
            createdGrid[cellNum].classList.add('selected')
            selected.push(createdGrid[cellNum])
        }
    }
}

function addNumber(numpadNum){
    if(selected.length > 0) selected[0].innerHTML = numpadNum
}

function slowlyHide(){
    startGameInstructions.classList.add('none');
}

//Keypress functions
function addNumberKeypress(e){
    if(e.key in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] && selected.length > 0){
        if(selected[0].innerHTML.length < 2 && parseInt(selected[0].innerHTML) < 2 || selected[0].innerHTML == ''){
            if(selected[0].innerHTML == ''){
                if(e.key === '1'){
                    selected[0].innerHTML += '1'
                }else if(e.key === '2'){
                    selected[0].innerHTML += '2'
                }else if(e.key === '3'){
                    selected[0].innerHTML += '3'
                }else if(e.key === '4'){
                    selected[0].innerHTML += '4'
                }else if(e.key === '5'){
                    selected[0].innerHTML += '5'
                }else if(e.key === '6'){
                    selected[0].innerHTML += '6'
                }else if(e.key === '7'){
                    selected[0].innerHTML += '7'
                }else if(e.key === '8'){
                    selected[0].innerHTML += '8'
                }else if(e.key === '9'){
                    selected[0].innerHTML += '9'
                }
            }else{
                if(e.key === '1'){
                    selected[0].innerHTML += '1'
                }else if(e.key === '2'){
                    selected[0].innerHTML += '2'
                }else if(e.key === '3'){
                    selected[0].innerHTML += '3'
                }else if(e.key === '4'){
                    selected[0].innerHTML += '4'
                }else if(e.key === '5'){
                    selected[0].innerHTML += '5'
                }else if(e.key === '6'){
                    selected[0].innerHTML += '6'
                }else if(e.key === '0'){
                    selected[0].innerHTML += '0'
                }
            }  
        }else{
            if(e.key === '1'){
                selected[0].innerHTML = '1'
            }else if(e.key === '2'){
                selected[0].innerHTML = '2'
            }else if(e.key === '3'){
                selected[0].innerHTML = '3'
            }else if(e.key === '4'){
                selected[0].innerHTML = '4'
            }else if(e.key === '5'){
                selected[0].innerHTML = '5'
            }else if(e.key === '6'){
                selected[0].innerHTML = '6'
            }else if(e.key === '7'){
                selected[0].innerHTML = '7'
            }else if(e.key === '8'){
                selected[0].innerHTML = '8'
            }else if(e.key === '9'){
                selected[0].innerHTML = '9'
            }
        }
    }   
}

function clearCase(e){
    if(e.key == 'Backspace' || e.key == 'Delete'){
        selected[0].innerHTML = '';
    }
}

function checkWinKeypress(e){
    if(e.key === "Enter"){
        checkWin()
    }
}

//timer function

//function taken from: https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak

var min = 0;
var sec = 0;
var ms = 0;
var stoptime = true;

if(localStorage.getItem('difficile sec')){
    ms = parseInt(localStorage.getItem('difficile ms'));
    sec = parseInt(localStorage.getItem('difficile sec'));
    min = parseInt(localStorage.getItem('difficile min'));
}

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    ms = parseInt(ms);
    sec = parseInt(sec);
    min = parseInt(min);

    ms += 1;

    if (ms == 100) {
      sec += 1;
      ms = 0;
    }
    if (sec == 60) {
      min += 1;
      sec = 0;
      ms = 0;
    }if(min == 60){
        stopTimer()
    }

    if (ms < 10 || ms == 0) {
      ms = '0' + ms;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }

    timer.innerHTML = min + ':' + sec + ':' + ms;

    setTimeout('timerCycle()', 10);
  }
}

function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime = true;
    ms = 0;
    sec = 0;
    min = 0;
}

function PersonalBest(newTime, oldTime){
    let newTimeArr = newTime.split(':')
    let oldTimeArr = oldTime.split(':')
    let minInSec1 = parseInt(newTimeArr[0]) * 60
    let seconds1 = parseInt(newTimeArr[1])
    let msInSec1 = parseInt(newTimeArr[2])/100
    let minInSec2 = parseInt(oldTimeArr[0]) * 60
    let seconds2 = parseInt(oldTimeArr[1])
    let msInSec2 = parseInt(oldTimeArr[2])/100
    let finishingTime1 = minInSec1 + seconds1 + msInSec1
    let finishingTime2 = minInSec2 + seconds2 + msInSec2
    if(finishingTime1 < finishingTime2) return true;
}

function numberOfWins(wins){
    numberWins = parseInt(wins);
    numberWins += 1;
    return numberWins;
}

function saveGrid(){
    if(startGameInstructions.classList.contains('hidden', 'none')){
        for(let i = 0; i < cell.length; i++){
            localStorage.setItem('difficile number', number)
            localStorage.setItem('difficile cell' + i, cell[i].innerText);
            localStorage.setItem('difficile timer', timer.innerHTML)
            localStorage.setItem('difficile ms', ms);
            localStorage.setItem('difficile sec', sec);
            localStorage.setItem('difficile min', min);
        }
    }
}

var savedNumber

function printSavedGrid(){
    startGameInstructions.classList.add('hidden', 'none')
    savedNumber = parseInt(localStorage.getItem('difficile number'))
    for(let i = 0; i < cell.length; i++){
        let cellHTML = localStorage.getItem('difficile cell' + i);
        if(grid[savedNumber][i] != cellHTML || grid[savedNumber][i] == ''){
            cell[i].classList.remove('show');
            if(localStorage.getItem('difficile win') == 'true'){
                stopTimer()
                cell[i].classList.add('correct')
            }
        }
        cell[i].innerHTML = cellHTML;
    }
    timer.innerHTML = localStorage.getItem('difficile timer')
    if(localStorage.getItem('difficile win') == 'true'){
        stopTimer()
    }else {
        startTimer()
    }
}

if(localStorage.getItem('difficile number') != null){
    printSavedGrid()
}

//Event Listeners

navbar.addEventListener('click', (event) => {
    if(event.target.id = 'nav'){
        saveGrid()
    }
})

//Pad buttons
newGameBtn.addEventListener('click', function () {startGame()})
checkWinBtn.addEventListener('click', function(){checkWin()})

numpad1.addEventListener('click', function () {addNumber(1)})
numpad2.addEventListener('click', function () {addNumber(2)})
numpad3.addEventListener('click', function () {addNumber(3)})
numpad4.addEventListener('click', function () {addNumber(4)})
numpad5.addEventListener('click', function () {addNumber(5)})
numpad6.addEventListener('click', function () {addNumber(6)})
numpad7.addEventListener('click', function () {addNumber(7)})
numpad8.addEventListener('click', function () {addNumber(8)})
numpad9.addEventListener('click', function () {addNumber(9)})
numpad10.addEventListener('click', function () {addNumber(10)})
numpad11.addEventListener('click', function () {addNumber(11)})
numpad12.addEventListener('click', function () {addNumber(12)})
numpad13.addEventListener('click', function () {addNumber(13)})
numpad14.addEventListener('click', function () {addNumber(14)})
numpad15.addEventListener('click', function () {addNumber(15)})
numpad16.addEventListener('click', function () {addNumber(16)})

//Keypress
document.addEventListener('keypress', addNumberKeypress);
document.addEventListener('keydown', clearCase);
document.addEventListener('keypress', checkWinKeypress);

//Cell click
gridContainer.addEventListener('click', (event)=>{
    if(event.target.parentNode.id != 'grid') return;
    let clickedCellNum = event.target.id.split('-').pop();
    selectGrid(clickedCellNum)
})

body.addEventListener('click', (event) => {
    if(!event.target.classList.contains('cell') && !event.target.classList.contains('number')){
        if(selected.length == 1){
            selected[0].classList.remove('selected');
            selected.shift();
        }
    }
})

const facile = document.getElementById('facile-stats');
const normal = document.getElementById('normal-stats');
const difficile = document.getElementById('difficile-stats');
const statsBtn = document.getElementById('statsBtn');
const stats = document.getElementById('statistiques');

if(!localStorage.getItem('PB difficile') && !localStorage.getItem('difficile')){
    localStorage.setItem('PB difficile', 'N/D')
    localStorage.setItem('difficile', '0')
}if(!localStorage.getItem('PB normal') && !localStorage.getItem('normal')){
    localStorage.setItem('PB normal', 'N/D')
    localStorage.setItem('normal', '0')
}if(!localStorage.getItem('PB facile') && !localStorage.getItem('facile')){
    localStorage.setItem('PB facile', 'N/D')
    localStorage.setItem('facile', '0')
}

facile.innerHTML = 'Meilleur Temps: ' + localStorage.getItem('PB facile') + '<br>Nombre de Sudokus terminés: ' + localStorage.getItem('facile')
normal.innerHTML = 'Meilleur Temps: ' + localStorage.getItem('PB normal') + '<br>Nombre de Sudokus terminés: ' + localStorage.getItem('normal')
difficile.innerHTML = 'Meilleur Temps: ' + localStorage.getItem('PB difficile') + '<br>Nombre de Sudokus terminés: ' + localStorage.getItem('difficile')

statsBtn.addEventListener('click', function(){
    if(stats.classList.contains('none'))stats.classList.remove('none');
    if(stats.classList.contains('hidden'))stats.classList.remove('hidden');
    else if(!stats.classList.contains('hidden'))stats.classList.add('hidden');
})

window.onbeforeunload = closingCode;
function closingCode(){
    saveGrid()
    return null;
}