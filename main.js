var cresticNolic = document.querySelector('.cresticNolic');
var num = 0;
cresticNolic.addEventListener('click', function(ev) {
	if (num % 2 === 0) {
		ev.target.innerHTML = '<p>X</p>';
	} 
	else {
		ev.target.innerHTML = '<p>0</p>';
	}

	console.log(ev.target);

	cheic();
	playAudio();
	num++
})


var mobol = document.querySelector('.ocno');

function cheic() {
	var col1 = document.querySelectorAll('.col-1');
	var txt = document.getElementById('txt');
	var cheicCol1 = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (var i = 0; i < cheicCol1.length; i++) {
		if (
			col1[cheicCol1[i][0]].innerHTML === '<p>X</p>' &&
			col1[cheicCol1[i][1]].innerHTML === '<p>X</p>' &&
			col1[cheicCol1[i][2]].innerHTML === '<p>X</p>'
		) 
		{
			mobol.classList.add('active');
			txt.innerHTML = 'Крестики';
			cresticNolic.style.pointerEvents = 'none';
			playAudio2();

		}
		else if (
			col1[cheicCol1[i][0]].innerHTML === '<p>0</p>' &&
			col1[cheicCol1[i][1]].innerHTML === '<p>0</p>' &&
			col1[cheicCol1[i][2]].innerHTML === '<p>0</p>'
		) 
		{
			mobol.classList.add('active');
			txt.innerHTML = 'Нолики';
			cresticNolic.style.pointerEvents = 'none';
			playAudio2();
		}

	}
}

var box = document.querySelectorAll('.col-1');
var btn = document.getElementById('btn');
var emptyBlock = '';
btn.onclick = function() {
	for (var i = 0; i < box.length; i++) {
		box[i].innerHTML = emptyBlock;
	}
	mobol.classList.remove('active');
	cresticNolic.style.pointerEvents = 'auto';

}

// function getRandomInt(max){
// 	return Math.floor(Math.random() * max);
// }


function playAudio() {
	var audio = new Audio;
	audio.src = 'MP1.mp3';
	audio.play();
}

function playAudio2() {
	var audio = new Audio;
	audio.src = 'MP2.mp3';
	audio.play();
}

function scrollReval() {
	ScrollReveal().reveal('.cont', { scale: 0.85, interval: 600 });
	ScrollReveal().reveal('.cresticNolic, #btn', { scale: 0.85, duration: 1500 });
}
scrollReval();