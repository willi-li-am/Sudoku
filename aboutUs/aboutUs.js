//calling all HTML elements
const facile = document.getElementById('facile-stats');
const normal = document.getElementById('normal-stats');
const difficile = document.getElementById('difficile-stats');
const statsBtn = document.getElementById('statsBtn');
const stats = document.getElementById('statistiques');


//stats
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

//EasterEgg
if(localStorage.getItem('easterEgg') == 'true'){
    document.body.style.backgroundImage = 'url("")';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.width = 'calc(100vw - 17px)';
    document.body.style.heigth = '100vh';
    document.body.style.objectFit = 'cover';
}