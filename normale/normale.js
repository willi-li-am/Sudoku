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


const gridContainer = document.getElementById('grid-container')

const grid = [
    ['', 8, '', 6, 1, '', 4, '', ''],
    ['', '', '', 2, 8, '', '', '', 9],
    [3, 2, 1, '', 9, 5, 8, '', ''],
    ['', '', 1, '', 9, '', 8, 7, ''],
    ['', 4, '', '', '', '', '', 2, 5],
    ['', 5, 7, 6, 8, '', '', 3, 4],
    [9, '', '', '', 6, '', '', '', ''],
    ['', '', '', '', 9, '', 4, 7, ''],
    ['', 1, '', '', '', 8, 5, '', '']
]

const solution = [
    [7, 8, 9, 6, 1, 3, 4, 5, 2],
    [6, 5, 4, 2, 8, 7, 1, 3, 9],
    [3, 2, 1, 4, 9, 5, 8, 7, 6],
    [3, 2, 1, 5, 9, 4, 8, 7, 6],
    [8, 4, 6, 7, 1, 3, 9, 2, 5],
    [9, 5, 7, 6, 8, 2, 1, 3, 4],
    [9, 4, 7, 1, 6, 5, 2, 3, 8],
    [5, 6, 8, 3, 9, 2, 4, 7, 1],
    [2, 1, 3, 7, 4, 8, 5, 6, 9]
]

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
let cell16 = document.getElementById('cell-16')
let cell17 = document.getElementById('cell-17')

let cell18 = document.getElementById('cell-18')
let cell19 = document.getElementById('cell-19')
let cell20 = document.getElementById('cell-20')
let cell21 = document.getElementById('cell-21')
let cell22 = document.getElementById('cell-22')
let cell23 = document.getElementById('cell-23')
let cell24 = document.getElementById('cell-24')
let cell25 = document.getElementById('cell-25')
let cell26 = document.getElementById('cell-26')

let cell27 = document.getElementById('cell-27')
let cell28 = document.getElementById('cell-28')
let cell29 = document.getElementById('cell-29')
let cell30 = document.getElementById('cell-30')
let cell31 = document.getElementById('cell-31')
let cell32 = document.getElementById('cell-32')
let cell33 = document.getElementById('cell-33')
let cell34 = document.getElementById('cell-34')
let cell35 = document.getElementById('cell-35')

let cell36 = document.getElementById('cell-36')
let cell37 = document.getElementById('cell-37')
let cell38 = document.getElementById('cell-38')
let cell39 = document.getElementById('cell-39')
let cell40 = document.getElementById('cell-40')
let cell41 = document.getElementById('cell-41')
let cell42 = document.getElementById('cell-42')
let cell43 = document.getElementById('cell-43')
let cell44 = document.getElementById('cell-44')

let cell45 = document.getElementById('cell-45')
let cell46 = document.getElementById('cell-46')
let cell47 = document.getElementById('cell-47')
let cell48 = document.getElementById('cell-48')
let cell49 = document.getElementById('cell-49')
let cell50 = document.getElementById('cell-50')
let cell51 = document.getElementById('cell-51')
let cell52 = document.getElementById('cell-52')
let cell53 = document.getElementById('cell-53')

let cell54 = document.getElementById('cell-54')
let cell55 = document.getElementById('cell-55')
let cell56 = document.getElementById('cell-56')
let cell57 = document.getElementById('cell-57')
let cell58 = document.getElementById('cell-58')
let cell59 = document.getElementById('cell-59')
let cell60 = document.getElementById('cell-60')
let cell61 = document.getElementById('cell-61')
let cell62 = document.getElementById('cell-62')

let cell63 = document.getElementById('cell-63')
let cell64 = document.getElementById('cell-64')
let cell65 = document.getElementById('cell-65')
let cell66 = document.getElementById('cell-66')
let cell67 = document.getElementById('cell-67')
let cell68 = document.getElementById('cell-68')
let cell69 = document.getElementById('cell-69')
let cell70 = document.getElementById('cell-70')
let cell71 = document.getElementById('cell-71')

let cell72 = document.getElementById('cell-72')
let cell73 = document.getElementById('cell-73')
let cell74 = document.getElementById('cell-74')
let cell75 = document.getElementById('cell-75')
let cell76 = document.getElementById('cell-76')
let cell77 = document.getElementById('cell-77')
let cell78 = document.getElementById('cell-78')
let cell79 = document.getElementById('cell-79')
let cell80 = document.getElementById('cell-80')

const cell = [
    [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8], 
    [cell9, cell10, cell11, cell12, cell13, cell14, cell15, cell16, cell17],
    [cell18, cell19, cell20, cell21, cell22, cell23, cell24, cell25, cell26],
    [cell27, cell28, cell29, cell30, cell31, cell32, cell33, cell34, cell35],
    [cell36, cell37, cell38, cell39, cell40, cell41, cell42, cell43, cell44],
    [cell45, cell46, cell47, cell48, cell49, cell50, cell51, cell52, cell53],
    [cell54, cell55, cell56, cell57, cell58, cell59, cell60, cell61, cell62],
    [cell63, cell64, cell65, cell66, cell67, cell68, cell69, cell70, cell71],
    [cell72, cell73, cell74, cell75, cell76, cell77, cell78, cell79, cell80]
]

newGameBtn.addEventListener('click', function () {startGame()})

numpad1.addEventListener('click', function () {addNumber(1)})
numpad2.addEventListener('click', function () {addNumber(2)})
numpad3.addEventListener('click', function () {addNumber(3)})
numpad4.addEventListener('click', function () {addNumber(4)})
numpad5.addEventListener('click', function () {addNumber(5)})
numpad6.addEventListener('click', function () {addNumber(6)})
numpad7.addEventListener('click', function () {addNumber(7)})
numpad8.addEventListener('click', function () {addNumber(8)})
numpad9.addEventListener('click', function () {addNumber(9)})


cell0.addEventListener('click', function() {selectGrid(0, 0)})
cell1.addEventListener('click', function() {selectGrid(0, 1)})
cell2.addEventListener('click', function() {selectGrid(0, 2)})
cell3.addEventListener('click', function() {selectGrid(0, 3)})
cell4.addEventListener('click', function() {selectGrid(0, 4)})
cell5.addEventListener('click', function() {selectGrid(0, 5)})
cell6.addEventListener('click', function() {selectGrid(0, 6)})
cell7.addEventListener('click', function() {selectGrid(0, 7)})
cell8.addEventListener('click', function() {selectGrid(0, 8)})

cell9.addEventListener('click', function() {selectGrid(1, 0)})
cell10.addEventListener('click', function() {selectGrid(1, 1)})
cell11.addEventListener('click', function() {selectGrid(1, 2)})
cell12.addEventListener('click', function() {selectGrid(1, 3)})
cell13.addEventListener('click', function() {selectGrid(1, 4)})
cell14.addEventListener('click', function() {selectGrid(1, 5)})
cell15.addEventListener('click', function() {selectGrid(1, 6)})
cell16.addEventListener('click', function() {selectGrid(1, 7)})
cell17.addEventListener('click', function() {selectGrid(1, 8)})

cell18.addEventListener('click', function() {selectGrid(2, 0)})
cell19.addEventListener('click', function() {selectGrid(2, 1)})
cell20.addEventListener('click', function() {selectGrid(2, 2)})
cell21.addEventListener('click', function() {selectGrid(2, 3)})
cell22.addEventListener('click', function() {selectGrid(2, 4)})
cell23.addEventListener('click', function() {selectGrid(2, 5)})
cell24.addEventListener('click', function() {selectGrid(2, 6)})
cell25.addEventListener('click', function() {selectGrid(2, 7)})
cell26.addEventListener('click', function() {selectGrid(2, 8)})

cell27.addEventListener('click', function() {selectGrid(3, 0)})
cell28.addEventListener('click', function() {selectGrid(3, 1)})
cell29.addEventListener('click', function() {selectGrid(3, 2)})
cell30.addEventListener('click', function() {selectGrid(3, 3)})
cell31.addEventListener('click', function() {selectGrid(3, 4)})
cell32.addEventListener('click', function() {selectGrid(3, 5)})
cell33.addEventListener('click', function() {selectGrid(3, 6)})
cell34.addEventListener('click', function() {selectGrid(3, 7)})
cell35.addEventListener('click', function() {selectGrid(3, 8)})

cell36.addEventListener('click', function() {selectGrid(4, 0)})
cell37.addEventListener('click', function() {selectGrid(4, 1)})
cell38.addEventListener('click', function() {selectGrid(4, 2)})
cell39.addEventListener('click', function() {selectGrid(4, 3)})
cell40.addEventListener('click', function() {selectGrid(4, 4)})
cell41.addEventListener('click', function() {selectGrid(4, 5)})
cell42.addEventListener('click', function() {selectGrid(4, 6)})
cell43.addEventListener('click', function() {selectGrid(4, 7)})
cell44.addEventListener('click', function() {selectGrid(4, 8)})

cell45.addEventListener('click', function() {selectGrid(5, 0)})
cell46.addEventListener('click', function() {selectGrid(5, 1)})
cell47.addEventListener('click', function() {selectGrid(5, 2)})
cell48.addEventListener('click', function() {selectGrid(5, 3)})
cell49.addEventListener('click', function() {selectGrid(5, 4)})
cell50.addEventListener('click', function() {selectGrid(5, 5)})
cell51.addEventListener('click', function() {selectGrid(5, 6)})
cell52.addEventListener('click', function() {selectGrid(5, 7)})
cell53.addEventListener('click', function() {selectGrid(5, 8)})

cell54.addEventListener('click', function() {selectGrid(6, 0)})
cell55.addEventListener('click', function() {selectGrid(6, 1)})
cell56.addEventListener('click', function() {selectGrid(6, 2)})
cell57.addEventListener('click', function() {selectGrid(6, 3)})
cell58.addEventListener('click', function() {selectGrid(6, 4)})
cell59.addEventListener('click', function() {selectGrid(6, 5)})
cell60.addEventListener('click', function() {selectGrid(6, 6)})
cell61.addEventListener('click', function() {selectGrid(6, 7)})
cell62.addEventListener('click', function() {selectGrid(6, 8)})

cell63.addEventListener('click', function() {selectGrid(7, 0)})
cell64.addEventListener('click', function() {selectGrid(7, 1)})
cell65.addEventListener('click', function() {selectGrid(7, 2)})
cell66.addEventListener('click', function() {selectGrid(7, 3)})
cell67.addEventListener('click', function() {selectGrid(7, 4)})
cell68.addEventListener('click', function() {selectGrid(7, 5)})
cell69.addEventListener('click', function() {selectGrid(7, 6)})
cell70.addEventListener('click', function() {selectGrid(7, 7)})
cell71.addEventListener('click', function() {selectGrid(7, 8)})

cell72.addEventListener('click', function() {selectGrid(8, 0)})
cell73.addEventListener('click', function() {selectGrid(8, 1)})
cell74.addEventListener('click', function() {selectGrid(8, 2)})
cell75.addEventListener('click', function() {selectGrid(8, 3)})
cell76.addEventListener('click', function() {selectGrid(8, 4)})
cell77.addEventListener('click', function() {selectGrid(8, 5)})
cell78.addEventListener('click', function() {selectGrid(8, 6)})
cell79.addEventListener('click', function() {selectGrid(8, 7)})
cell80.addEventListener('click', function() {selectGrid(8, 8)})

function startGame(){
    //choisie une grille aleatoirement
    
    for(let i = 0; i < 9 ; i++){ //inscrit les numeros dans les cases
        for(let j = 0; j < 9; j++){
            cell[i][j].innerHTML = grid[i][j]
            if(grid[i][j] == ''){
                cell[i][j].classList.remove('incorrect')
                cell[i][j].classList.remove('correct')
                cell[i][j].classList.remove('show')
            }else{
                cell[i][j].classList.remove('incorrect')
                cell[i][j].classList.remove('correct')
            }
        }
    } 
    selected[0].classList.remove('selected') //deselectionne la grille qui a ete selectionner dans le dernier jeu
    selected = []
}

var selected = []

function selectGrid(gridNum, cellNum){
    if(!cell[gridNum][cellNum].classList.contains('show') && !cell[gridNum][cellNum].classList.contains('correct')){ //Si il n'y a pas de nombre deja dedans la case, continue
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