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
    4, '', 6, 13, '', '', '', '', '', '', '', 9, '', 16, '', ''] 
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
4, 11, 6, 13, 15, 7, 10, 14, 3, 5, 2, 9, 1, 16, 12, 8]
] 

let gridContainer = createCells(256)

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

function startGame(){
    //choisie une grille aleatoirement
    newGrid = grid
    for(let i = 0; i < cell.length ; i++){ //inscrit les numeros dans les cases
        cell[i].classList.add('show')
        cell[i].innerText = newGrid[0][i]
        if(newGrid[0][i] == ''){
            cell[i].classList.remove('incorrect')
            cell[i].classList.remove('correct')
            cell[i].classList.remove('show')
        }else{
            cell[i].classList.remove('incorrect')
            cell[i].classList.remove('correct')
        }
    } 
    selected[0].classList.remove('selected') //deselectionne la grille qui a ete selectionner dans le dernier jeu
    selected = []
}

function checkWin(){
    var correctAnsw = 0
    for(let i = 0; i < cell.length; i++){  
        if(!cell[i].classList.contains('show')){
            if(cell[i].innerText == solution[0][i]){
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
    }
    selected[0].classList.remove('selected')
    selected = []
    
}

var selected = []

function selectGrid(cellNum){
    if(!gridContainer[cellNum].classList.contains('show') && !gridContainer[cellNum].classList.contains('correct')){ 
        if(selected.length === 0){
            gridContainer[cellNum].classList.add('selected')
            selected.push(gridContainer[cellNum])
        }else if(selected[0] === gridContainer[cellNum]){ 
            selected[0].classList.remove('selected')
            selected.shift()
            selected.shift()
        }
        else{ 
            selected[0].classList.remove('selected')
            selected.shift()
            gridContainer[cellNum].classList.add('selected')
            selected.push(gridContainer[cellNum])
        }
    }
    console.log('clicked ' + cellNum)
}

addCellstoPage(gridContainer)

function addNumber(numpadNum){
    selected[0].innerHTML = numpadNum
}

function addNumberKeypress(e){
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
                selected[0].innerHTML += '8'
            }else if(e.key === '8'){
                selected[0].innerHTML += '8'
            }else if(e.key === '9'){
                selected[0].innerHTML += '9'
            }else if(e.key === '0'){
                selected[0].innerHTML += '0'
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
            }
        }
        
    }
}

function clearCase(e){
    if(e.key == 'Backspace'){
        selected[0].innerHTML = '';
    }
}

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

document.addEventListener('keypress', addNumberKeypress)
document.addEventListener('keydown', clearCase);

gridContainer[0].addEventListener('click', function(){selectGrid(0)})
gridContainer[1].addEventListener('click', function(){selectGrid(1)})
gridContainer[2].addEventListener('click', function(){selectGrid(2)})
gridContainer[3].addEventListener('click', function(){selectGrid(3)})
gridContainer[4].addEventListener('click', function(){selectGrid(4)})
gridContainer[5].addEventListener('click', function(){selectGrid(5)})
gridContainer[6].addEventListener('click', function(){selectGrid(6)})
gridContainer[7].addEventListener('click', function(){selectGrid(7)})
gridContainer[8].addEventListener('click', function(){selectGrid(8)})
gridContainer[9].addEventListener('click', function(){selectGrid(9)})
gridContainer[10].addEventListener('click', function(){selectGrid(10)})
gridContainer[11].addEventListener('click', function(){selectGrid(11)})
gridContainer[12].addEventListener('click', function(){selectGrid(12)})
gridContainer[13].addEventListener('click', function(){selectGrid(13)})
gridContainer[14].addEventListener('click', function(){selectGrid(14)})
gridContainer[15].addEventListener('click', function(){selectGrid(15)})
gridContainer[16].addEventListener('click', function(){selectGrid(16)})
gridContainer[17].addEventListener('click', function(){selectGrid(17)})
gridContainer[18].addEventListener('click', function(){selectGrid(18)})
gridContainer[19].addEventListener('click', function(){selectGrid(19)})
gridContainer[20].addEventListener('click', function(){selectGrid(20)})
gridContainer[21].addEventListener('click', function(){selectGrid(21)})
gridContainer[22].addEventListener('click', function(){selectGrid(22)})
gridContainer[23].addEventListener('click', function(){selectGrid(23)})
gridContainer[24].addEventListener('click', function(){selectGrid(24)})
gridContainer[25].addEventListener('click', function(){selectGrid(25)})
gridContainer[26].addEventListener('click', function(){selectGrid(26)})
gridContainer[27].addEventListener('click', function(){selectGrid(27)})
gridContainer[28].addEventListener('click', function(){selectGrid(28)})
gridContainer[29].addEventListener('click', function(){selectGrid(29)})
gridContainer[30].addEventListener('click', function(){selectGrid(30)})
gridContainer[31].addEventListener('click', function(){selectGrid(31)})
gridContainer[32].addEventListener('click', function(){selectGrid(32)})
gridContainer[33].addEventListener('click', function(){selectGrid(33)})
gridContainer[34].addEventListener('click', function(){selectGrid(34)})
gridContainer[35].addEventListener('click', function(){selectGrid(35)})
gridContainer[36].addEventListener('click', function(){selectGrid(36)})
gridContainer[37].addEventListener('click', function(){selectGrid(37)})
gridContainer[38].addEventListener('click', function(){selectGrid(38)})
gridContainer[39].addEventListener('click', function(){selectGrid(39)})
gridContainer[40].addEventListener('click', function(){selectGrid(40)})
gridContainer[41].addEventListener('click', function(){selectGrid(41)})
gridContainer[42].addEventListener('click', function(){selectGrid(42)})
gridContainer[43].addEventListener('click', function(){selectGrid(43)})
gridContainer[44].addEventListener('click', function(){selectGrid(44)})
gridContainer[45].addEventListener('click', function(){selectGrid(45)})
gridContainer[46].addEventListener('click', function(){selectGrid(46)})
gridContainer[47].addEventListener('click', function(){selectGrid(47)})
gridContainer[48].addEventListener('click', function(){selectGrid(48)})
gridContainer[49].addEventListener('click', function(){selectGrid(49)})
gridContainer[50].addEventListener('click', function(){selectGrid(50)})
gridContainer[51].addEventListener('click', function(){selectGrid(51)})
gridContainer[52].addEventListener('click', function(){selectGrid(52)})
gridContainer[53].addEventListener('click', function(){selectGrid(53)})
gridContainer[54].addEventListener('click', function(){selectGrid(54)})
gridContainer[55].addEventListener('click', function(){selectGrid(55)})
gridContainer[56].addEventListener('click', function(){selectGrid(56)})
gridContainer[57].addEventListener('click', function(){selectGrid(57)})
gridContainer[58].addEventListener('click', function(){selectGrid(58)})
gridContainer[59].addEventListener('click', function(){selectGrid(59)})
gridContainer[60].addEventListener('click', function(){selectGrid(60)})
gridContainer[61].addEventListener('click', function(){selectGrid(61)})
gridContainer[62].addEventListener('click', function(){selectGrid(62)})
gridContainer[63].addEventListener('click', function(){selectGrid(63)})
gridContainer[64].addEventListener('click', function(){selectGrid(64)})
gridContainer[65].addEventListener('click', function(){selectGrid(65)})
gridContainer[66].addEventListener('click', function(){selectGrid(66)})
gridContainer[67].addEventListener('click', function(){selectGrid(67)})
gridContainer[68].addEventListener('click', function(){selectGrid(68)})
gridContainer[69].addEventListener('click', function(){selectGrid(69)})
gridContainer[70].addEventListener('click', function(){selectGrid(70)})
gridContainer[71].addEventListener('click', function(){selectGrid(71)})
gridContainer[72].addEventListener('click', function(){selectGrid(72)})
gridContainer[73].addEventListener('click', function(){selectGrid(73)})
gridContainer[74].addEventListener('click', function(){selectGrid(74)})
gridContainer[75].addEventListener('click', function(){selectGrid(75)})
gridContainer[76].addEventListener('click', function(){selectGrid(76)})
gridContainer[77].addEventListener('click', function(){selectGrid(77)})
gridContainer[78].addEventListener('click', function(){selectGrid(78)})
gridContainer[79].addEventListener('click', function(){selectGrid(79)})
gridContainer[80].addEventListener('click', function(){selectGrid(80)})
gridContainer[81].addEventListener('click', function(){selectGrid(81)})
gridContainer[82].addEventListener('click', function(){selectGrid(82)})
gridContainer[83].addEventListener('click', function(){selectGrid(83)})
gridContainer[84].addEventListener('click', function(){selectGrid(84)})
gridContainer[85].addEventListener('click', function(){selectGrid(85)})
gridContainer[86].addEventListener('click', function(){selectGrid(86)})
gridContainer[87].addEventListener('click', function(){selectGrid(87)})
gridContainer[88].addEventListener('click', function(){selectGrid(88)})
gridContainer[89].addEventListener('click', function(){selectGrid(89)})
gridContainer[90].addEventListener('click', function(){selectGrid(90)})
gridContainer[91].addEventListener('click', function(){selectGrid(91)})
gridContainer[92].addEventListener('click', function(){selectGrid(92)})
gridContainer[93].addEventListener('click', function(){selectGrid(93)})
gridContainer[94].addEventListener('click', function(){selectGrid(94)})
gridContainer[95].addEventListener('click', function(){selectGrid(95)})
gridContainer[96].addEventListener('click', function(){selectGrid(96)})
gridContainer[97].addEventListener('click', function(){selectGrid(97)})
gridContainer[98].addEventListener('click', function(){selectGrid(98)})
gridContainer[99].addEventListener('click', function(){selectGrid(99)})
gridContainer[100].addEventListener('click', function(){selectGrid(100)})
gridContainer[101].addEventListener('click', function(){selectGrid(101)})
gridContainer[102].addEventListener('click', function(){selectGrid(102)})
gridContainer[103].addEventListener('click', function(){selectGrid(103)})
gridContainer[104].addEventListener('click', function(){selectGrid(104)})
gridContainer[105].addEventListener('click', function(){selectGrid(105)})
gridContainer[106].addEventListener('click', function(){selectGrid(106)})
gridContainer[107].addEventListener('click', function(){selectGrid(107)})
gridContainer[108].addEventListener('click', function(){selectGrid(108)})
gridContainer[109].addEventListener('click', function(){selectGrid(109)})
gridContainer[110].addEventListener('click', function(){selectGrid(110)})
gridContainer[111].addEventListener('click', function(){selectGrid(111)})
gridContainer[112].addEventListener('click', function(){selectGrid(112)})
gridContainer[113].addEventListener('click', function(){selectGrid(113)})
gridContainer[114].addEventListener('click', function(){selectGrid(114)})
gridContainer[115].addEventListener('click', function(){selectGrid(115)})
gridContainer[116].addEventListener('click', function(){selectGrid(116)})
gridContainer[117].addEventListener('click', function(){selectGrid(117)})
gridContainer[118].addEventListener('click', function(){selectGrid(118)})
gridContainer[119].addEventListener('click', function(){selectGrid(119)})
gridContainer[120].addEventListener('click', function(){selectGrid(120)})
gridContainer[121].addEventListener('click', function(){selectGrid(121)})
gridContainer[122].addEventListener('click', function(){selectGrid(122)})
gridContainer[123].addEventListener('click', function(){selectGrid(123)})
gridContainer[124].addEventListener('click', function(){selectGrid(124)})
gridContainer[125].addEventListener('click', function(){selectGrid(125)})
gridContainer[126].addEventListener('click', function(){selectGrid(126)})
gridContainer[127].addEventListener('click', function(){selectGrid(127)})
gridContainer[128].addEventListener('click', function(){selectGrid(128)})
gridContainer[129].addEventListener('click', function(){selectGrid(129)})
gridContainer[130].addEventListener('click', function(){selectGrid(130)})
gridContainer[131].addEventListener('click', function(){selectGrid(131)})
gridContainer[132].addEventListener('click', function(){selectGrid(132)})
gridContainer[133].addEventListener('click', function(){selectGrid(133)})
gridContainer[134].addEventListener('click', function(){selectGrid(134)})
gridContainer[135].addEventListener('click', function(){selectGrid(135)})
gridContainer[136].addEventListener('click', function(){selectGrid(136)})
gridContainer[137].addEventListener('click', function(){selectGrid(137)})
gridContainer[138].addEventListener('click', function(){selectGrid(138)})
gridContainer[139].addEventListener('click', function(){selectGrid(139)})
gridContainer[140].addEventListener('click', function(){selectGrid(140)})
gridContainer[141].addEventListener('click', function(){selectGrid(141)})
gridContainer[142].addEventListener('click', function(){selectGrid(142)})
gridContainer[143].addEventListener('click', function(){selectGrid(143)})
gridContainer[144].addEventListener('click', function(){selectGrid(144)})
gridContainer[145].addEventListener('click', function(){selectGrid(145)})
gridContainer[146].addEventListener('click', function(){selectGrid(146)})
gridContainer[147].addEventListener('click', function(){selectGrid(147)})
gridContainer[148].addEventListener('click', function(){selectGrid(148)})
gridContainer[149].addEventListener('click', function(){selectGrid(149)})
gridContainer[150].addEventListener('click', function(){selectGrid(150)})
gridContainer[151].addEventListener('click', function(){selectGrid(151)})
gridContainer[152].addEventListener('click', function(){selectGrid(152)})
gridContainer[153].addEventListener('click', function(){selectGrid(153)})
gridContainer[154].addEventListener('click', function(){selectGrid(154)})
gridContainer[155].addEventListener('click', function(){selectGrid(155)})
gridContainer[156].addEventListener('click', function(){selectGrid(156)})
gridContainer[157].addEventListener('click', function(){selectGrid(157)})
gridContainer[158].addEventListener('click', function(){selectGrid(158)})
gridContainer[159].addEventListener('click', function(){selectGrid(159)})
gridContainer[160].addEventListener('click', function(){selectGrid(160)})
gridContainer[161].addEventListener('click', function(){selectGrid(161)})
gridContainer[162].addEventListener('click', function(){selectGrid(162)})
gridContainer[163].addEventListener('click', function(){selectGrid(163)})
gridContainer[164].addEventListener('click', function(){selectGrid(164)})
gridContainer[165].addEventListener('click', function(){selectGrid(165)})
gridContainer[166].addEventListener('click', function(){selectGrid(166)})
gridContainer[167].addEventListener('click', function(){selectGrid(167)})
gridContainer[168].addEventListener('click', function(){selectGrid(168)})
gridContainer[169].addEventListener('click', function(){selectGrid(169)})
gridContainer[170].addEventListener('click', function(){selectGrid(170)})
gridContainer[171].addEventListener('click', function(){selectGrid(171)})
gridContainer[172].addEventListener('click', function(){selectGrid(172)})
gridContainer[173].addEventListener('click', function(){selectGrid(173)})
gridContainer[174].addEventListener('click', function(){selectGrid(174)})
gridContainer[175].addEventListener('click', function(){selectGrid(175)})
gridContainer[176].addEventListener('click', function(){selectGrid(176)})
gridContainer[177].addEventListener('click', function(){selectGrid(177)})
gridContainer[178].addEventListener('click', function(){selectGrid(178)})
gridContainer[179].addEventListener('click', function(){selectGrid(179)})
gridContainer[180].addEventListener('click', function(){selectGrid(180)})
gridContainer[181].addEventListener('click', function(){selectGrid(181)})
gridContainer[182].addEventListener('click', function(){selectGrid(182)})
gridContainer[183].addEventListener('click', function(){selectGrid(183)})
gridContainer[184].addEventListener('click', function(){selectGrid(184)})
gridContainer[185].addEventListener('click', function(){selectGrid(185)})
gridContainer[186].addEventListener('click', function(){selectGrid(186)})
gridContainer[187].addEventListener('click', function(){selectGrid(187)})
gridContainer[188].addEventListener('click', function(){selectGrid(188)})
gridContainer[189].addEventListener('click', function(){selectGrid(189)})
gridContainer[190].addEventListener('click', function(){selectGrid(190)})
gridContainer[191].addEventListener('click', function(){selectGrid(191)})
gridContainer[192].addEventListener('click', function(){selectGrid(192)})
gridContainer[193].addEventListener('click', function(){selectGrid(193)})
gridContainer[194].addEventListener('click', function(){selectGrid(194)})
gridContainer[195].addEventListener('click', function(){selectGrid(195)})
gridContainer[196].addEventListener('click', function(){selectGrid(196)})
gridContainer[197].addEventListener('click', function(){selectGrid(197)})
gridContainer[198].addEventListener('click', function(){selectGrid(198)})
gridContainer[199].addEventListener('click', function(){selectGrid(199)})
gridContainer[200].addEventListener('click', function(){selectGrid(200)})
gridContainer[201].addEventListener('click', function(){selectGrid(201)})
gridContainer[202].addEventListener('click', function(){selectGrid(202)})
gridContainer[203].addEventListener('click', function(){selectGrid(203)})
gridContainer[204].addEventListener('click', function(){selectGrid(204)})
gridContainer[205].addEventListener('click', function(){selectGrid(205)})
gridContainer[206].addEventListener('click', function(){selectGrid(206)})
gridContainer[207].addEventListener('click', function(){selectGrid(207)})
gridContainer[208].addEventListener('click', function(){selectGrid(208)})
gridContainer[209].addEventListener('click', function(){selectGrid(209)})
gridContainer[210].addEventListener('click', function(){selectGrid(210)})
gridContainer[211].addEventListener('click', function(){selectGrid(211)})
gridContainer[212].addEventListener('click', function(){selectGrid(212)})
gridContainer[213].addEventListener('click', function(){selectGrid(213)})
gridContainer[214].addEventListener('click', function(){selectGrid(214)})
gridContainer[215].addEventListener('click', function(){selectGrid(215)})
gridContainer[216].addEventListener('click', function(){selectGrid(216)})
gridContainer[217].addEventListener('click', function(){selectGrid(217)})
gridContainer[218].addEventListener('click', function(){selectGrid(218)})
gridContainer[219].addEventListener('click', function(){selectGrid(219)})
gridContainer[220].addEventListener('click', function(){selectGrid(220)})
gridContainer[221].addEventListener('click', function(){selectGrid(221)})
gridContainer[222].addEventListener('click', function(){selectGrid(222)})
gridContainer[223].addEventListener('click', function(){selectGrid(223)})
gridContainer[224].addEventListener('click', function(){selectGrid(224)})
gridContainer[225].addEventListener('click', function(){selectGrid(225)})
gridContainer[226].addEventListener('click', function(){selectGrid(226)})
gridContainer[227].addEventListener('click', function(){selectGrid(227)})
gridContainer[228].addEventListener('click', function(){selectGrid(228)})
gridContainer[229].addEventListener('click', function(){selectGrid(229)})
gridContainer[230].addEventListener('click', function(){selectGrid(230)})
gridContainer[231].addEventListener('click', function(){selectGrid(231)})
gridContainer[232].addEventListener('click', function(){selectGrid(232)})
gridContainer[233].addEventListener('click', function(){selectGrid(233)})
gridContainer[234].addEventListener('click', function(){selectGrid(234)})
gridContainer[235].addEventListener('click', function(){selectGrid(235)})
gridContainer[236].addEventListener('click', function(){selectGrid(236)})
gridContainer[237].addEventListener('click', function(){selectGrid(237)})
gridContainer[238].addEventListener('click', function(){selectGrid(238)})
gridContainer[239].addEventListener('click', function(){selectGrid(239)})
gridContainer[240].addEventListener('click', function(){selectGrid(240)})
gridContainer[241].addEventListener('click', function(){selectGrid(241)})
gridContainer[242].addEventListener('click', function(){selectGrid(242)})
gridContainer[243].addEventListener('click', function(){selectGrid(243)})
gridContainer[244].addEventListener('click', function(){selectGrid(244)})
gridContainer[245].addEventListener('click', function(){selectGrid(245)})
gridContainer[246].addEventListener('click', function(){selectGrid(246)})
gridContainer[247].addEventListener('click', function(){selectGrid(247)})
gridContainer[248].addEventListener('click', function(){selectGrid(248)})
gridContainer[249].addEventListener('click', function(){selectGrid(249)})
gridContainer[250].addEventListener('click', function(){selectGrid(250)})
gridContainer[251].addEventListener('click', function(){selectGrid(251)})
gridContainer[252].addEventListener('click', function(){selectGrid(252)})
gridContainer[253].addEventListener('click', function(){selectGrid(253)})
gridContainer[254].addEventListener('click', function(){selectGrid(254)})
gridContainer[255].addEventListener('click', function(){selectGrid(255)})