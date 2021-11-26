// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    // console.log(`Key pressed ${name} \r\n Key code value: ${code}`);


    // Play audio if the correct key is pressed
    var audio = getAudio(name);
    playAudio(audio);

    // Add transition effect
    transitionBox(code);



  }, false);

  function getAudio(keyPressed) {

    if (keyPressed == 'a') {
        var audio = document.getElementById('audio-boom');
    } else if (keyPressed == 's') {
        var audio = document.getElementById('audio-clap');
    }
    else if (keyPressed == 'd') {
        var audio = document.getElementById('audio-hihat');
    }
    else if (keyPressed == 'f') {
        var audio = document.getElementById('audio-kick');
    }
    else if (keyPressed == 'g') {
        var audio = document.getElementById('audio-openhat');
    }
    else if (keyPressed == 'h') {
        var audio = document.getElementById('audio-ride');
    }
    else if (keyPressed == 'j') {
        var audio = document.getElementById('audio-snare');
    }
    else if (keyPressed == 'k') {
        var audio = document.getElementById('audio-tink');
    }
    else if (keyPressed == 'l') {
        var audio = document.getElementById('audio-tom');
    } else {
        return null;
    }

    return audio;

  }

  function playAudio(audio) {
    if (audio != null) {
        audio.currentTime = 0;
        audio.play();
    } 
  }

  function transitionBox(code) {
    // The commented out code says give me an object with a class of "key" and id of "KeyH"
    // const keyDown = document.querySelector('.key[id=KeyH]');
    const keyDown = document.querySelector(`[id=${code}]`)

    if (keyDown != null) {
        keyDown.classList.remove('playing');
        keyDown.classList.add('playing');
    }
  }


  const allKeys = document.querySelectorAll('.key');
  allKeys.forEach((allkeys) => {
    allkeys.addEventListener('transitionend', function(e) {
        allkeys.classList.remove('playing');
    })
  })