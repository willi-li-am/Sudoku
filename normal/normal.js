//Naming all the HTML stuff
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

const startGameInstructions = document.getElementById('start-game');

const timer = document.getElementById('timer');

const gridContainer = document.getElementById('grid')
if(!localStorage.getItem('PB normal') && !localStorage.getItem('normal')){
    localStorage.setItem('PB normal', 'N/D')
    localStorage.setItem('normal', '0')
}


//Creating the grid dynamically
var cell = []

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

let createdGrid = createCells(81)

//Makes border of certain cells thicker
function boldEverything(i, j, div){
    if(i == 0 || i == 3 || i == 6){
        div.style.borderTop = '.3vw black solid'
    }if(j == 0 || j == 3 || j == 6){
        div.style.borderLeft = '.3vw black solid'
    }if(j == 8){
        div.style.borderRight = '.3vw black solid'
    }if(i == 8){
        div.style.borderBottom = '.3vw black solid'
    }
    
}

//Brings the grid to the page
function addCellstoPage(arr){
    for(let i = 0; i < arr.length; i++){
        document.getElementById('grid').appendChild(arr[i])
    }
    
}

addCellstoPage(createdGrid)


//Sudoku Solutions and Numbers
//https://www.sudokuweb.org/ (sudoku 9x9 deja faite)

const solution = [
    [4, 1, 5, 8, 3, 9, 7, 6, 2,
    2, 7, 6, 5, 1, 4, 8, 9, 3,
    9, 3, 8, 7, 2, 6, 5, 4, 1,
    3, 5, 1, 2, 6, 7, 4, 8, 9,
    7, 4, 9, 1, 8, 5, 2, 3, 6,
    6, 8, 2, 4, 9, 3, 1, 7, 5,
    8, 6, 7, 9, 5, 2, 3, 1, 4,
    1, 2, 3, 6, 4, 8, 9, 5, 7,
    5, 9, 4, 3, 7, 1, 6, 2, 8],

    [4, 2, 3, 5, 9, 1, 8, 6, 7,
    6, 8, 5, 7, 2, 3, 1, 9, 4,
    7, 1, 9, 4, 6, 8, 2, 5, 3,
    2, 5, 8, 1, 3, 9, 7, 4, 6,
    1, 4, 7, 8, 5, 6, 3, 2, 9,
    3, 9, 6, 2, 7, 4, 5, 8, 1,
    9, 6, 1, 3, 8, 2, 4, 7, 5,
    5, 3, 2, 9, 4, 7, 6, 1, 8,
    8, 7, 4, 6, 1, 5, 9, 3, 2]
]

const grid = [
    [4, '', '', 8, '', '', 7, 6, 2,
    '', '', 6, 5, 1, 4, '', 9, '',
    '', '', '', '', '', 6, 5, '', '',
    3, 5, '', '', '', '', 4, '', 9,
    '', 4, '', 1, '', '', 2, '', 6,
    '', '', '', 4, 9, 3, '', 7, '',
    '', 6, 7, '', 5, 2, 3, '', 4,
    1, '', '', 6, 4, 8, 9, '', '',
    5, '', 4, '', '', 1, '', '', 8],

    ['', 2, '', '', '', '', 8, 6, 7,
    '', 8, '', '', '', '', 1, 9, 4,
    '', 1, '', 4, 6, 8, 2, 5, '',
    2, '', '', 1, 3, '', 7, 4, 6,
    1, '', '', 8, '', 6, '', '', '',
    '', 9, '', '', '', 4, '', '', '',
    9, '', '', 3, '', 2, 4, 7, 5,
    '', '', 2, '', 4, '', 6, '', 8,
    8, '', 4, '', 1, '', '', '', '']
]


//Game functions//

//Starts the game
function startGame(){
    newGrid = randomGrid(grid)
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
}

//Hides the instructions once game is started
function slowlyHide(){
    startGameInstructions.classList.add('none');
}

//Randomly chooses a grid preset
//https://www.w3schools.com/js/js_random.asp

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var oldGrid

function randomGrid(grid){
    let newGrid = []
    let number = getRndInteger(0, (grid.length-1)) 
    while(oldGrid == number){
        number = getRndInteger(0, (grid.length-1))
        console.log('loop')
    }
    newGrid = grid[number]
    gridSolution = solution[number]
    oldGrid = number
    return newGrid
}

//Cell selection function

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

//Adding numbers to selected cell with buttons
function addNumber(numpadNum){
    selected[0].innerHTML = numpadNum
}
//Does the same thing but with keyboard
function addNumberKeypress(e){
    if(e.key === '1'){
        selected[0].innerHTML = 1
    }else if(e.key === '2'){
        selected[0].innerHTML = 2
    }else if(e.key === '3'){
        selected[0].innerHTML = 3
    }else if(e.key === '4'){
        selected[0].innerHTML = 4
    }else if(e.key === '5'){
        selected[0].innerHTML = 5
    }else if(e.key === '6'){
        selected[0].innerHTML = 6
    }else if(e.key === '7'){
        selected[0].innerHTML = 7
    }else if(e.key === '8'){
        selected[0].innerHTML = 8
    }else if(e.key === '9'){
        selected[0].innerHTML = 9
    }
}
//Clears selected cell when pressing the "Backspace" key on keyboard
function clearCase(e){
    if(e.key == 'Backspace'){
        selected[0].innerHTML = '';
    }
}

//Checks if Sudoku is completed correctly
var gridSolution

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
        if(localStorage.getItem('PB normal') == 'N/D' || PersonalBest(timer.innerHTML, localStorage.getItem('PB normal'))){
            localStorage.setItem('PB normal', timer.innerHTML)
        }
        localStorage.setItem('normal', numberOfWins(localStorage.getItem('normal')))
    }
    selected[0].classList.remove('selected')
    selected = []
    
}
//Checks win by pressing the "Enter" key on keyboard
function checkWinKeypress(e){
    if(e.key === "Enter"){
        checkWin()
    }
}


//Timer Function
//Taken from https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak

var min = 0;
var sec = 0;
var ms = 0;
var stoptime = true;

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


//Event Listeners

//Cell selection
gridContainer.addEventListener('click', (event)=>{
    if(event.target.parentNode.id != 'grid') return;
    let clickedCellNum = event.target.id.split('-').pop();
    selectGrid(clickedCellNum)
})

//Game buttons
newGameBtn.addEventListener('click', function () {startGame()})
checkWinBtn.addEventListener('click', function(){checkWin()})

//Number pad buttons
numpad1.addEventListener('click', function () {addNumber(1)})
numpad2.addEventListener('click', function () {addNumber(2)})
numpad3.addEventListener('click', function () {addNumber(3)})
numpad4.addEventListener('click', function () {addNumber(4)})
numpad5.addEventListener('click', function () {addNumber(5)})
numpad6.addEventListener('click', function () {addNumber(6)})
numpad7.addEventListener('click', function () {addNumber(7)})
numpad8.addEventListener('click', function () {addNumber(8)})
numpad9.addEventListener('click', function () {addNumber(9)})

//Keypress functions
document.addEventListener('keypress', addNumberKeypress)
document.addEventListener('keypress', checkWinKeypress)
document.addEventListener('keydown', clearCase);
