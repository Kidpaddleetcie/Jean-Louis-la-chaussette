document.getElementById("JLLCTO").innerHTML = '<img class="JLLCTO" id="JLLCmoveTO" src="' + frames[0].image + '"/>';


// On gère l'intensité
let arrayTO;
let valuesTO;
let lengthTO;
let averageTO;

navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(function(stream) {
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

        analyser.smoothingTimeConstant = 0.8;
        analyser.fftSize = 1024;

        microphone.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(audioContext.destination);
        javascriptNode.onaudioprocess = function() {
            arrayTO = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            valuesTO = 0;

            lengthTO = array.length;
            for (let i = 0; i < length; i++) {
                values += (array[i]);
            }

            averageTO = values / length;
            if (average < 10) {
                document.getElementById("JLLCTO").innerHTML = '<img id="JLLCmoveTO" class="JLLCTO" src="' + frames[0].image + '"/>';
            } else if (average > 10 && average < 12) {
                document.getElementById("JLLCTO").innerHTML = '<img id="JLLCmoveTO" class="JLLCTO" src="' + frames[1].image + '"/>';
            } else if (average > 12 && average < 30) {
                document.getElementById("JLLCTO").innerHTML = '<img id="JLLCmoveTO" class="JLLCTO" src="' + frames[2].image + '"/>';
            } else if (average > 30 && average < 32) {
                document.getElementById("JLLCTO").innerHTML = '<img id="JLLCmoveTO" class="JLLCTO" src="' + frames[3].image + '"/>';
            } else if (average > 32 && average < 50) {
                document.getElementById("JLLCTO").innerHTML = '<img class="JLLCTO" id="JLLCmoveTO" src="' + frames[4].image + '"/>';
            } else if (average > 50 && average < 52) {
                document.getElementById("JLLCTO").innerHTML = '<img class="JLLCTO" id="JLLCmoveTO" src="' + frames[5].image + '"/>';
            } else if (average > 52 && average < 70) {
                document.getElementById("JLLCTO").innerHTML = '<img class="JLLCTO" id="JLLCmoveTO" src="' + frames[6].image + '"/>';
            } else if (average > 70 && average < 72) {
                document.getElementById("JLLCTO").innerHTML = '<img class="JLLCTO" id="JLLCmoveTO" src="' + frames[7].image + '"/>';
            } else if (average > 72 && average < 90) {
                document.getElementById("JLLCTO").innerHTML = '<img class="JLLCTO" id="JLLCmoveTO" src="' + frames[8].image + '"/>';
            } else if (average > 90 && average < 92) {
                document.getElementById("JLLCTO").innerHTML = '<img class="JLLCTO" id="JLLCmoveTO" src="' + frames[9].image + '"/>';
            } else {
                document.getElementById("JLLCTO").innerHTML = '<img class="JLLCTO" id="JLLCmoveTO" src="' + frames[10].image + '"/>';
            }

        }
    })
    .catch(function(err) {
        console.log("ça ne va pas fonctionner si vous n'activez pas un microphone !")
    });