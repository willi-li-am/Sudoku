const newGameBtn = document.getElementById('newGameBtn');
const checkWinBtn = document.getElementById('checkWinBtn');
const numpad1 = document.getElementById('number1');
const numpad2 = document.getElementById('number2');
const numpad3 = document.getElementById('number3');
const numpad4 = document.getElementById('number4');
const gridContainer = document.getElementById('grid-container');
const startGameInstructions = document.getElementById('start-game');
const timer = document.getElementById('timer')


let cell0 = document.getElementById('cell-0');
let cell1 = document.getElementById('cell-1');
let cell2 = document.getElementById('cell-2');
let cell3 = document.getElementById('cell-3');

let cell4 = document.getElementById('cell-4');
let cell5 = document.getElementById('cell-5');
let cell6 = document.getElementById('cell-6');
let cell7 = document.getElementById('cell-7');

let cell8 = document.getElementById('cell-8');
let cell9 = document.getElementById('cell-9');
let cell10 = document.getElementById('cell-10');
let cell11 = document.getElementById('cell-11');

let cell12 = document.getElementById('cell-12');
let cell13 = document.getElementById('cell-13');
let cell14 = document.getElementById('cell-14');
let cell15 = document.getElementById('cell-15');

const cell = [
    [cell0, cell1, cell2, cell3], 
    [cell4, cell5, cell6, cell7],
    [cell8, cell9, cell10, cell11],
    [cell12, cell13, cell14, cell15]
];
//Grille deja faite par moi
const grid = [
    [
        [3, 2, 4, 1],
        [4, 1, 2, 3],
        [2, 3, 1, 4],
        [1, 4, 3, 2]       
    ],
    [
        [2, 3, 1, 4],
        [1, 4, 3, 2],
        [3, 2, 4, 1],
        [4, 1, 2, 3]       
    ],
    [
        [1, 4, 3, 2], 
        [2, 3, 1, 4],
        [4, 1, 2, 3], 
        [3, 2, 4, 1]
    ],
    [
        [4, 1, 2, 3], 
        [3, 2, 4, 1], 
        [1, 4, 3, 2], 
        [2, 3, 1, 4]
    ]
    
];
//Event Listeners
newGameBtn.addEventListener('click', function () {startGame()});
checkWinBtn.addEventListener('click', function(){checkWin()});

numpad1.addEventListener('click', function () {addNumber(1)});
numpad2.addEventListener('click', function () {addNumber(2)});
numpad3.addEventListener('click', function () {addNumber(3)});
numpad4.addEventListener('click', function () {addNumber(4)});

document.addEventListener('keypress', addNumberKeypress);
document.addEventListener('keypress', checkWinKeypress);
document.addEventListener('keydown', clearCase);

gridContainer.addEventListener('click', (event)=>{
    if(event.target.parentNode.parentNode.id != 'grid-container') return;
    let clickedCellNum = event.target.id.split('-').pop();
    let gridNum = Math.trunc(clickedCellNum/gridContainer.childElementCount);
    let cellNum = clickedCellNum - (gridNum*gridContainer.childElementCount)
    selectGrid(gridNum, cellNum)

})

var newGrid;



function startGame(){
    newGrid = randomGrid(grid);
    for(let i = 0; i < 4 ; i++){ 
        for(let j = 0; j < 4; j++){
            cell[i][j].innerText = newGrid[i][j];
            cell[i][j].classList.remove('incorrect');
            cell[i][j].classList.remove('correct');
            cell[i][j].classList.add('show');
        }
    }randomRemoveGrids() 
    resetTimer()
    stopTimer()
    setTimeout('startTimer()', 10)
    startGameInstructions.classList.add('hidden');
    setTimeout(slowlyHide, 200);
    if(selected.length != 0) selected[0].classList.remove('selected');
    selected = [];
}

//https://www.w3schools.com/js/js_random.asp

function getRndInteger(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

var oldGrid;

function randomGrid(grid){ 
    let newGrid = [];
    let number = getRndInteger(1, 4);
    while(oldGrid == number){ 
        number = getRndInteger(1, 4);
    }
    if(number === 1){
        newGrid = grid[0];
        oldGrid = number;
    }else if(number === 2){
        newGrid = grid[1];
        oldGrid = number;
    }else if(number === 3){
        newGrid = grid[2];
        oldGrid = number;
    }else{
        newGrid = grid[3];
        oldGrid = number;
    }
    return newGrid;
    
}

function randomRemoveGrids(){ 
    var numberOfGridsRemoved = 0;
    for(let i = 0; i < 4; i++){
        var oldNumbers = [];
        let randomNumber = getRndInteger(2,3);
        if(randomNumber == 3 && numberOfGridsRemoved < 3){
            for(let j = 0; j < 3; j++){ 
                let number = getRndInteger(0,3);
                while(oldNumbers.includes(number)){ 
                    number = getRndInteger(0,3);
                }
                cell[i][number].innerHTML = '';
                cell[i][number].classList.remove('show');
                oldNumbers.push(number);
                numberOfGridsRemoved += 1;
            }
        }else{
            for(let j = 0; j < 2; j++){ 
                let number = getRndInteger(0,3);
                while(oldNumbers.includes(number)){ 
                    number = getRndInteger(0,3);
                }
                cell[i][number].innerHTML = '';
                cell[i][number].classList.remove('show');
                oldNumbers.push(number);
                
            }
        }
        console.log(numberOfGridsRemoved);
    }
    numberOfGridsRemoved = 0;
}

var selected = []

function selectGrid(gridNum, cellNum){
    if(!cell[gridNum][cellNum].classList.contains('show') && !cell[gridNum][cellNum].classList.contains('correct')){ 
        if(selected.length === 0){ 
            cell[gridNum][cellNum].classList.add('selected');
            selected.push(cell[gridNum][cellNum]);
        }else if(selected[0] === cell[gridNum][cellNum]){ 
            selected[0].classList.remove('selected');
            selected.shift();
            selected.shift();
        }
        else{ 
            selected[0].classList.remove('selected');
            selected.shift();
            cell[gridNum][cellNum].classList.add('selected');
            selected.push(cell[gridNum][cellNum]);
        }
    }
}

function addNumber(numpadNum){
    selected[0].innerHTML = numpadNum;
}

function checkWin(){
    var correctAnsw = 0;
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            if(!cell[i][j].classList.contains('show')){
                if(cell[i][j].innerText == newGrid[i][j]){
                    cell[i][j].classList.remove('incorrect');
                    cell[i][j].classList.add('correct');
                    correctAnsw += 1;
                }else{
                    cell[i][j].classList.add('incorrect');
                    cell[i][j].classList.remove('correct');
                }
            }else{
                correctAnsw += 1;
            }
            
        }
    }
    
    
    if(correctAnsw == 16){
        correctAnsw = 0;
        stopTimer()
    }
    selected[0].classList.remove('selected')
    selected = [];
    
}

function slowlyHide(){
    startGameInstructions.classList.add('none');
}


//https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak

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

function addNumberKeypress(e){
    if(e.key === '1'){
        selected[0].innerHTML = 1;
    }else if(e.key === '2'){
        selected[0].innerHTML = 2;
    }else if(e.key === '3'){
        selected[0].innerHTML = 3;
    }else if(e.key === '4'){
        selected[0].innerHTML = 4;
    }
}

function checkWinKeypress(e){
    if(e.key === "Enter"){
        checkWin();
    }
}

function clearCase(e){
    if(e.key == 'Backspace'){
        selected[0].innerHTML = '';
    }
}