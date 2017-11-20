var dice = Math.floor(Math.random()*6)+1;

document.querySelector('#score1').textContent=dice;
document.querySelector('#current1').innerHTML='<em>'+dice+'</em>';

document.querySelector('.dice').src='./img/dice-1.png'