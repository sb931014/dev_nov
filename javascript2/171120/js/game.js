	var roundScore=0;
	var score='#score1';
	var current='#current1'
	var name='#name1';
	var panel='.player-0-panel';
	var dice;
	var diceDOM=document.querySelector('.dice');
	var check=0;
	var final;
	var winningScore=50;
	diceDOM.style.display='none';
	document.getElementById('current1').value=0;
	document.getElementById('current2').value=0;

	function nextplayer(){
		if(score=='#score1'){
			roundScore+=dice;
			document.querySelector(current).textContent=roundScore;
			document.getElementById('current1').value=roundScore;
			score='#score2';
			current='#current2'
			name='#name2';
			panel='.player-1-panel';
			roundScore=document.getElementById('current2').value;
			document.querySelector('.player-0-panel').classList.remove('active');
			document.querySelector('.player-1-panel').classList.add('active');
			document.querySelector('.dice').style.display='none';

		}else{
			roundScore+=dice;
			document.querySelector(current).textContent=roundScore;
			document.getElementById('current2').value=roundScore;
			score='#score1';
			current='#current1';
			name='#name1';
			panel='.player-0-panel';
			roundScore=document.getElementById('current1').value;
			document.querySelector('.player-1-panel').classList.remove('active');
			document.querySelector('.player-0-panel').classList.add('active');
			document.querySelector('.dice').style.display='none';

		}
	};

	function btn_roll(){
		if(check==0){
			dice = Math.floor(Math.random()*6)+1;

			var diceDOM=document.querySelector('.dice');
			diceDOM.style.display='block';
			diceDOM.src='./img/dice-'+dice+'.png';

			document.querySelector(score).textContent=dice;

			if(dice!=1){
				roundScore+=dice;
				document.querySelector(current).textContent=roundScore;

				if(roundScore>=winningScore){
					document.querySelector(name).textContent="Winner!!!";
					document.querySelector(panel).classList.add('winner');
					alert(name+" 승리!!!\n새게임 ㄱㄱ");
					check=1;
				}
			} else {
				nextplayer();
			}
		}
	};

	function btn_hold(){
		// alert('a');
		final=document.querySelector('.final-score').value;
		
		if(final){
			winningScore=final;
		}else{
			winningScore=20;
		}
	};
	function btn_new(){
		// init();
		document.querySelector('#name1').textContent="Player1";
		document.querySelector('#name2').textContent="Player2";
		document.querySelector('.player-0-panel').classList.remove('winner');
		document.querySelector('.player-1-panel').classList.remove('winner');
		document.querySelector('.player-0-panel').classList.remove('active');
		document.querySelector('.player-1-panel').classList.remove('active');
		document.querySelector('.player-0-panel').classList.add('active');


		var diceDOM=document.querySelector('.dice');
		diceDOM.style.display='none';

		document.querySelector('#current1').textContent='0';
		document.querySelector('#current2').textContent='0';

		document.getElementById('current1').value='0';
		document.getElementById('current2').value='0';
		

		document.querySelector('#score1').textContent='0';
		document.querySelector('#score2').textContent='0';

		roundScore=0;		

		check=0;
	};

	document.querySelector('.btn-roll').addEventListener('click', btn_roll);
	document.querySelector('.btn-hold').addEventListener('click', btn_hold);
	document.querySelector('.btn-new').addEventListener('click', btn_new);

	// document.querySelector('.dice').src='./img/dice-1.png';
