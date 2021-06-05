function progress() {
    const masProgresBar = ['.html', '.css', '.scss', '.js', '.php', '.figma', '.photoshop'],
      progresBar = document.querySelectorAll(masProgresBar);
    for (let elem of progresBar) {
        elem.classList.add('active');
    }

    function test(sc1, sc2, sc3, sc4, sc5, sc6, sc7) {
        let speed = 40;
        for (let width = 0; width <= sc1; width++) {
            setTimeout(function() {
                document.getElementById('value1').innerHTML = width + '%';
            }, width * speed)
        }
        for (let width = 0; width <= sc2; width++) {
            setTimeout(function() {
                document.getElementById('value2').innerHTML = width + '%';
            }, width * speed)
        }
        for (let width = 0; width <= sc3; width++) {
            setTimeout(function() {
                document.getElementById('value3').innerHTML = width + '%';
            }, width * speed)
        }
        for (let width = 0; width <= sc4; width++) {
            setTimeout(function() {
                document.getElementById('value4').innerHTML = width + '%';
            }, width * speed)
        }
        for (let width = 0; width <= sc5; width++) {
            setTimeout(function() {
                document.getElementById('value5').innerHTML = width + '%';
            }, width * speed)
        }
        for (let width = 0; width <= sc6; width++) {
            setTimeout(function() {
                document.getElementById('value6').innerHTML = width + '%';
            }, width * speed)
        }
        for (let width = 0; width <= sc7; width++) {
            setTimeout(function() {
                document.getElementById('value7').innerHTML = width + '%';
            }, width * speed)
        }
    }
    test(70, 50, 100, 10, 1, 50, 70);
}
