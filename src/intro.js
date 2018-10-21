var shouldAutoplay = false;

var audio1 = new Audio('assets/sound/intro/Intro1.mp3');
var audio2 = new Audio('assets/sound/intro/Intro2.mp3');
var audio3 = new Audio('assets/sound/intro/Intro3.mp3');

(function() {

    setupAudio();
    setupInteraction();

})();

function setupAudio() {

    audio1.addEventListener("ended", function() {

        console.log("Intro 1 completed!");

        setTimeout(function () {
            audio2.play();
        }, 1000);

    });

    audio2.addEventListener("ended", function() {

        console.log("Intro 2 completed!");

        setTimeout(function () {
            audio3.play();
        }, 1000);

    });

    audio3.addEventListener("ended", function() {

        console.log("Intro 3 completed!");

    });


}

function setupInteraction() {

    if (shouldAutoplay) {
        document.getElementById('message').innerText = "Audio is playing! Press 'enter' to skip!";
        audio1.play();
        window.onkeyup = function(event) {
            let key = event.keyCode;
            console.log(key);
            if (key === 13) {
                audio1.pause();
                audio2.pause();
                audio3.pause();
                document.body.style.backgroundColor = '#555aaa';
                document.getElementById('message').innerText = "The Game starts!"
            }
        }
    } else {
        document.getElementById('message').innerText = "Press 'space' to start!";
        window.onkeyup = function(event) {
            let key = event.keyCode;
            console.log(key);
            if (key === 32) {
                audio1.play();
                document.getElementById('message').innerText = "Audio is playing! Press 'enter' to skip!";
            } else if (key === 13) {
                audio1.pause();
                audio2.pause();
                audio3.pause();
                document.body.style.backgroundColor = '#555aaa';
                document.getElementById('message').innerText = "The Game starts!";
            }
        }
    }

}