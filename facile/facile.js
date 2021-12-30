const newGameBtn = document.getElementById('newGameBtn')
const hintBtn = document.getElementById('hintBtn')
const checkWinBtn = document.getElementById('checkWinBtn')
const numpad1 = document.getElementById('number1')
const numpad2 = document.getElementById('number2')
const numpad3 = document.getElementById('number3')
const numpad4 = document.getElementById('number4')


let cell0 = document.getElementById('cell-0')
let cell1 = document.getElementById('cell-1')
let cell2 = document.getElementById('cell-2')
let cell3 = document.getElementById('cell-3')

let cell4 = document.getElementById('cell-4')
let cell5 = document.getElementById('cell-5')
let cell6 = document.getElementById('cell-6')
let cell7 = document.getElementById('cell-7')

let cell8 = document.getElementById('cell-8')
let cell9 = document.getElementById('cell-9')
let cell10 = document.getElementById('cell-10')
let cell11 = document.getElementById('cell-11')

let cell12 = document.getElementById('cell-12')
let cell13 = document.getElementById('cell-13')
let cell14 = document.getElementById('cell-14')
let cell15 = document.getElementById('cell-15')

const cell = [
    [cell0, cell1, cell2, cell3], 
    [cell4, cell5, cell6, cell7],
    [cell8, cell9, cell10, cell11],
    [cell12, cell13, cell14, cell15]
]
//Grille deja faite
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
    
]
//Event Listeners
newGameBtn.addEventListener('click', function () {startGame()})
checkWinBtn.addEventListener('click', function(){checkWin()})

numpad1.addEventListener('click', function () {addNumber(1)})
numpad2.addEventListener('click', function () {addNumber(2)})
numpad3.addEventListener('click', function () {addNumber(3)})
numpad4.addEventListener('click', function () {addNumber(4)})

cell0.addEventListener('click', function() {selectGrid(0, 0)})
cell1.addEventListener('click', function() {selectGrid(0, 1)})
cell2.addEventListener('click', function() {selectGrid(0, 2)})
cell3.addEventListener('click', function() {selectGrid(0, 3)})

cell4.addEventListener('click', function() {selectGrid(1, 0)})
cell5.addEventListener('click', function() {selectGrid(1, 1)})
cell6.addEventListener('click', function() {selectGrid(1, 2)})
cell7.addEventListener('click', function() {selectGrid(1, 3)})

cell8.addEventListener('click', function() {selectGrid(2, 0)})
cell9.addEventListener('click', function() {selectGrid(2, 1)})
cell10.addEventListener('click', function() {selectGrid(2, 2)})
cell11.addEventListener('click', function() {selectGrid(2, 3)})

cell12.addEventListener('click', function() {selectGrid(3, 0)})
cell13.addEventListener('click', function() {selectGrid(3, 1)})
cell14.addEventListener('click', function() {selectGrid(3, 2)})
cell15.addEventListener('click', function() {selectGrid(3, 3)})

var newGrid

function startGame(){
    //choisie une grille aleatoirement
    newGrid = randomGrid(grid)
    for(let i = 0; i < 4 ; i++){ //inscrit les numeros dans les cases
        for(let j = 0; j < 4; j++){
            cell[i][j].innerText = newGrid[i][j]
            cell[i][j].classList.remove('incorrect')
            cell[i][j].classList.remove('correct')
            cell[i][j].classList.add('show')
        }
    }randomRemoveGrids() //enleve le numero des cases aleatoirement
    selected[0].classList.remove('selected') //deselectionne la grille qui a ete selectionner dans le dernier jeu
    selected = []
}

function getRndInteger(min, max) { //fonction qui generent des numeros aleatoirement
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

var oldGrid 

function randomGrid(grid){ //selectionne des grilles aleatoirement du constant "grid"
    let newGrid = []
    let number = getRndInteger(1, 4) 
    while(oldGrid == number){ //fait que ca ne prend jamais la meme grille deux fois
        number = getRndInteger(1, 4)
    }
    if(number === 1){
        newGrid = grid[0]
        oldGrid = number
    }else if(number === 2){
        newGrid = grid[1]
        oldGrid = number
    }else if(number === 3){
        newGrid = grid[2]
        oldGrid = number
    }else{
        newGrid = grid[3]
        oldGrid = number
    }
    return newGrid
    
}

function randomRemoveGrids(){ //enleve des grilles aleatoirement
    for(let i = 0; i < 4; i++){
        var oldNumbers = []
        for(let j = 0; j < 2; j++){ //dans chaque grille de 2x2, enleve deux cases
            let number = getRndInteger(0,3)
            while(oldNumbers.includes(number)){ //enleve jamais les memes grilles deux fois
                number = getRndInteger(0,3)
            }
            cell[i][number].innerHTML = '';
            cell[i][number].classList.remove('show')
            oldNumbers.push(number)
            
        }
    }
}

var selected = []

function selectGrid(gridNum, cellNum){
    if(!cell[gridNum][cellNum].classList.contains('show') && !cell[gridNum][cellNum].classList.contains('correct')){ //Si il n'y a pas de nombre deja dedans la case, continue
        console.log('selected')
        if(selected.length === 0){ //Si l'array est vide ajoute "selected" au class et ajoute la case dans l'array
            cell[gridNum][cellNum].classList.add('selected')
            selected.push(cell[gridNum][cellNum])
        }else if(selected[0] === cell[gridNum][cellNum]){ //Si la case que tu clique est la meme, enleve "selected" du class et vide l'array
            selected[0].classList.remove('selected')
            selected.shift()
            selected.shift()
        }
        else{ //enleve "selected" de la case precedente pour l'ajouter au case cliquer
            selected[0].classList.remove('selected')
            selected.shift()
            cell[gridNum][cellNum].classList.add('selected')
            selected.push(cell[gridNum][cellNum])
        }
    }
}

function addNumber(numpadNum){
    selected[0].innerHTML = numpadNum
}

function checkWin(){
    var correctAnsw = 0
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            if(!cell[i][j].classList.contains('show')){
                if(cell[i][j].innerText == newGrid[i][j]){
                    cell[i][j].classList.remove('incorrect')
                    cell[i][j].classList.add('correct')
                    correctAnsw += 1
                }else{
                    cell[i][j].classList.add('incorrect')
                    cell[i][j].classList.remove('correct')
                }
            }else{
                correctAnsw += 1
            }
            
        }
    }
    if(correctAnsw == 16){
        console.log('Gagnant!')
        correctAnsw = 0
    }
    selected[0].classList.remove('selected')
    selected = []
    
}