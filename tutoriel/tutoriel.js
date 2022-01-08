const numpad1 = document.getElementById('number1');
const numpad2 = document.getElementById('number2');
const numpad3 = document.getElementById('number3');
const numpad4 = document.getElementById('number4');

const checkWinBtn = document.getElementById('checkWinBtn');

const gridContainer = document.getElementById('grid');
const tutorial = document.getElementById('tutorial');
const t1 = document.getElementById('explanation');
const t2 = document.getElementById('tutorialContext');
const t3 = document.getElementById('goal');
const t4 = document.getElementById('ruleTitle');
const t5 = document.getElementById('firstRule');
const t6 = document.getElementById('secondRule');
const t7 = document.getElementById('grid4x4');
const t8 = document.getElementById('select');
const t9 = document.getElementById('insertNumber');
const t10 = document.getElementById('mistake');
const t11 = document.getElementById('verify');
const t12 = document.getElementById('moreExplanation');
const t13 = document.getElementById('playNow');

const nextBtn = document.getElementById('nextBtn');

const grid =[1, 2, 3, 4,
            3, 4, 2, 1,
            4, 3, 1, 2,
            2, 1, 4, '']

const solution = [1, 2, 3, 4,
                3, 4, 2, 1,
                4, 3, 1, 2,
                2, 1, 4, 3]

//Creating the grid dynamically
var cell = []

function createCells(numCells){
    var idNumber = 0
    for(let i = 0; i < Math.sqrt(numCells); i++){
        for(let j = 0; j < Math.sqrt(numCells); j++){
            var div = document.createElement("div");
            //div.innerHTML = grid[idNumber]
            div.className = 'cell'
            div.id = 'cell-' + idNumber
            boldEverything(i, j, div)
            cell.push(div)
            idNumber++
        }
    }
    return cell;
}

let createdGrid = createCells(16)

//Makes border of certain cells thicker
function boldEverything(i, j, div){
    if(i == 0 || i == 2){
        div.style.borderTop = '.3vw black solid'
    }if(j == 0 || j == 2){
        div.style.borderLeft = '.3vw black solid'
    }if(j == 3){
        div.style.borderRight = '.3vw black solid'
    }if(i == 3){
        div.style.borderBottom = '.3vw black solid'
    }
    
}

//Brings the grid to the page
function addCellstoPage(arr){
    for(let i = 0; i < arr.length; i++){
        document.getElementById('grid').appendChild(arr[i])
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
    if(addingNumber == true){
        selected[0].innerHTML = numpadNum;
        if(tutorialNumber == 12){
            tutorialNumber = 13;
            nextTutorial();
        }
    }
}

addCellstoPage(createdGrid)

console.log(createdGrid)

var tutorialNumber = 0;

function row(show = false){
    for(let i = 0; i < 4; i++){
        if(show == true){
            cell[i].innerHTML = grid[i];
            cell[i].classList.add('show');
            document.getElementById('rows').classList.remove('hidden');
        }else{
            cell[i].innerHTML = '';
            cell[i].classList.remove('show');
            document.getElementById('rows').classList.add('hidden');
        }  
    }
}

function column(show = false){
    for(let i = 0; i < 4; i++){
        if(show == true){
            cell[i*4].innerHTML = grid[i*4];
            cell[i*4].classList.add('show');
            document.getElementById('column').classList.remove('hidden');
        }else{
            cell[i*4].innerHTML = '';
            cell[i*4].classList.remove('show');
            document.getElementById('column').classList.add('hidden');
        }  
    }
}

function smallGrid(show = false){
    if(show == true){
        cell[0].innerHTML = grid[0];
        cell[1].innerHTML = grid[1];
        cell[4].innerHTML = grid[4];
        cell[5].innerHTML = grid[5];
        cell[0].classList.add('show');
        cell[1].classList.add('show');
        cell[4].classList.add('show');
        cell[5].classList.add('show');
        document.getElementById('smallGrid').classList.remove('hidden');
    }else{
        cell[0].innerHTML = '';
        cell[1].innerHTML = '';
        cell[4].innerHTML = '';
        cell[5].innerHTML = '';    
        cell[0].classList.remove('show');
        cell[1].classList.remove('show');
        cell[4].classList.remove('show');
        cell[5].classList.remove('show');
        document.getElementById('smallGrid').classList.add('hidden');
    }  
}

function printGrid(){
    for(let i = 0; i < cell.length; i++){
        cell[i].innerHTML = grid[i];
        if(cell[i].innerHTML != '') cell[i].classList.add('show');
        else cell[i].classList.add('glow');
    }
}

function addNumberKeypress(e){
    if(selected.length > 0 && addingNumber == true){
        if(e.key === '1'){
            selected[0].innerHTML = 1;
        }else if(e.key === '2'){
            selected[0].innerHTML = 2;
        }else if(e.key === '3'){
            selected[0].innerHTML = 3;
        }else if(e.key === '4'){
            selected[0].innerHTML = 4;
        }
    }if(tutorialNumber == 12){
        tutorialNumber = 13;
        nextTutorial();
    }
}


function nextTutorial(){
    switch (tutorialNumber){
        case 0: 
            t1.classList.add('hidden');
            t2.classList.remove('hidden');
            tutorialNumber++;
            break;
        case 1: 
            t2.classList.add('hidden');
            t3.classList.remove('hidden');
            tutorialNumber++;
            break;
        case 2: 
            t3.classList.add('hidden');
            t4.classList.remove('hidden');
            tutorialNumber++;
            break;
        case 3: 
            t5.classList.remove('hidden');
            tutorialNumber++;
            break;
        case 4: 
            tutorial.classList.add('hidden');
            nextBtn.classList.add('black')
            tutorialNumber++;
            row(true);
            break;
        case 5:
            row();
            column(true);    
            tutorialNumber++;
            break;    
        case 6:
            column();
            tutorial.classList.remove('hidden');
            nextBtn.classList.remove('black');
            t6.classList.remove('hidden');
            tutorialNumber++;
            break;
        case 7:
            tutorial.classList.add('hidden');
            nextBtn.classList.add('black');
            smallGrid(true);
            tutorialNumber++;
            break;
        case 8:
            tutorial.classList.remove('hidden');
            nextBtn.classList.remove('black');
            smallGrid();
            t4.classList.add('hidden');
            t5.classList.add('hidden');
            t6.classList.add('hidden');
            t7.classList.remove('hidden');
            tutorialNumber++;
            break;
        case 9:
            t7.classList.add('hidden');
            t8.classList.remove('hidden');
            selection = true;
            tutorialNumber++;
            break;
        case 10:
            printGrid();
            t8.classList.add('hidden');
            t9.classList.remove('hidden');
            tutorial.classList.add('hidden');
            nextBtn.classList.add('hidden');
            break;
        case 11:
            tutorial.classList.remove('hidden');
            nextBtn.classList.remove('hidden');
            tutorialNumber++;
            addingNumber = true;
            break;
        case 12:
            t9.classList.add('hidden');
            t10.classList.remove('hidden');
            tutorial.classList.add('hidden');
            nextBtn.classList.add('hidden');
            break;
        case 13:
            tutorial.classList.remove('hidden');
            nextBtn.classList.remove('hidden');
            tutorialNumber++;
            break;
        case 14:
            t10.classList.add('hidden');
            t11.classList.remove('hidden');
            tutorial.classList.add('hidden');
            nextBtn.classList.add('hidden');
            clearCaseEnabled = true;
            break;
        case 15:   
            tutorial.classList.remove('hidden');
            nextBtn.classList.remove('hidden');
            tutorialNumber++
            break;
        case 16:
            t11.classList.add('hidden');
            t12.classList.remove('hidden');
            tutorial.classList.add('hidden');
            nextBtn.classList.add('hidden');
            break;
        case 17: 
            tutorial.classList.remove('hidden');
            nextBtn.classList.remove('hidden');
            tutorialNumber++;
            break;
        case 18:
            t12.classList.add('hidden');
            t13.classList.remove('hidden');
            nextBtn.classList.add('hidden');
            break;
    }
}

nextBtn.addEventListener('click', function(){nextTutorial()})

var selection;


gridContainer.addEventListener('click', (event)=>{
    if(event.target.parentNode.id != 'grid') return;
    if(selection == true){
        let clickedCellNum = event.target.id.split('-').pop();
        selectGrid(clickedCellNum)
        if(clickedCellNum == 15 && tutorialNumber == 10){
            tutorialNumber++;
            nextTutorial();
        }
    }
})    

function checkWin(){
    if(tutorialNumber == 16){
        var correctAnsw = 0
        for(let i = 0; i < cell.length; i++){  
            if(!cell[i].classList.contains('show')){
                if(cell[i].innerText == solution[i]){
                    cell[i].classList.remove('incorrect')
                    cell[i].classList.add('correct')
                    correctAnsw += 1
                }else{
                    cell[i].classList.add('incorrect')
                }
            }else{
                correctAnsw += 1
            }
        }
        if(correctAnsw == cell.length){
            tutorialNumber = 17;
            nextTutorial();
            cell[15].classList.remove('glow');
        }if(selected.length > 0){
            selected[0].classList.remove('selected')
            selected = []
        }
    }
}

function checkWinKeypress(e){
    if(e.key === "Enter"){
        checkWin()
    }
}

var clearCaseEnabled;

function clearCase(e){
    if(clearCaseEnabled == true){
        if(e.key == 'Backspace'){
            selected[0].innerHTML = '';
        }
    }if(tutorialNumber == 14){
        tutorialNumber = 15;
        nextTutorial();
    }
}


var addingNumber;

numpad1.addEventListener('click', function () {addNumber(1)});
numpad2.addEventListener('click', function () {addNumber(2)});
numpad3.addEventListener('click', function () {addNumber(3)});
numpad4.addEventListener('click', function () {addNumber(4)});

document.addEventListener('keypress', addNumberKeypress);
document.addEventListener('keypress', checkWinKeypress);
document.addEventListener('keydown', clearCase);

checkWinBtn.addEventListener('click', function(){checkWin()});

