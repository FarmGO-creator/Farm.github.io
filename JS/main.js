'use strict';

function loder() {
  const loder = document.querySelector('.loder');
  setTimeout(function() {
    loder.style.display = 'none'
  }, 1000)
  loder.classList.add('active');
}

const box = document.querySelector('.box'),
      opacityBox = document.querySelector('.opacityBox'),
      close = document.querySelector('.close');
setTimeout(function() {
    box.classList.add('active');
    opacityBox.classList.add('active');
}, 4000)
close.onclick = function() {
    box.classList.remove('active');
    opacityBox.classList.remove('active');
}

setTimeout(loder, 3500);

const container = document.querySelector('.container'),
      burgerMenu = document.querySelector('.burgerMenu');
container.onclick = function() {
  burgerMenu.classList.toggle('active');
  container.classList.toggle('change');
}


const btnImg = document.querySelector('.btnImg'),
      audio = document.querySelector(".audio");
btnImg.onclick = function() {
    if (audio.paused == true) {
        audio.play();
        btnImg.style.border = '3px solid green';
    } else {
        audio.pause();
        btnImg.style.border = 'none';
    }
}

function generatorAudio() {
  const blockAudio = document.querySelector('.audio');
  let masAudio = ['MP1.mp3', 'MP2.mp3', 'MP4.mp3', 'MP5.mp3', 'MP6.mp3'];
  let random = Math.floor(Math.random() * masAudio.length);
  blockAudio.src = masAudio[random]
}
generatorAudio();

const navigationLi = document.querySelectorAll('.navigation > ul > li');
for (var navigat of navigationLi) {
  navigat.addEventListener('mouseover', function() {
    mouseoveR();
  })
}

function mouseoveR() {
  let audio2 = new Audio;
	audio2.src = 'MP3.mp3';
	audio2.play();
}



function slider() {
  var swiper = new Swiper(".mySwiper", {
      effect: "cube",
      grabCursor: true,
      autoplay: {
        delay: 2200,
        disableOnInteraction: false,
      },
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
}
slider();

SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime    : 800,
  // Размер шага в пикселях 
  stepSize         : 75,

  // Дополнительные настройки:
  
  // Ускорение 
  accelerationDelta : 30,  
  // Максимальное ускорение
  accelerationMax   : 2,   

  // Поддержка клавиатуры
  keyboardSupport   : true,  
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll       : 50,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm   : true,
  pulseScale       : 4,
  pulseNormalize   : 1,

  // Поддержка тачпада
  touchpadSupport   : true,
})

function svgAnimater() {
  var nameSvg = ['webDis', 'arrow'];
  for (var i = 0; i < nameSvg.length; i++) {
    function test() {
      var svgID = nameSvg[i];

      return new Vivus(
        svgID, {
          type: 'sync',
          duration: 200,
        }
      );

    }
    test();
    function test2() {
      var svgID = nameSvg[1];

      return new Vivus(
        svgID, {
          type: 'sync',
          duration: 100,
        }
      );

    }
    test2();
  }
}
svgAnimater();