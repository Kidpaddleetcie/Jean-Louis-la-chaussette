document.getElementById("JLLC").innerHTML = '<img class="JLLC" id="JLLCmove" src="' + frame[0].image + '"/>';


// On gère l'intensité
let array;
let values;
let length;
let average;

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
            array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            values = 0;

            length = array.length;
            for (let i = 0; i < length; i++) {
                values += (array[i]);
            }

            average = values / length;
            if (average < 20) {
                document.getElementById("JLLC").innerHTML = '<img id="JLLCmove" class="JLLC" src="' + frame[0].image + '"/>';
            } else if (average > 20 && average < 40) {
                document.getElementById("JLLC").innerHTML = '<img id="JLLCmove" class="JLLC" src="' + frame[1].image + '"/>';
            } else if (average > 40 && average < 60) {
                document.getElementById("JLLC").innerHTML = '<img id="JLLCmove" class="JLLC" src="' + frame[2].image + '"/>';
            } else if (average > 60 && average < 80) {
                document.getElementById("JLLC").innerHTML = '<img id="JLLCmove" class="JLLC" src="' + frame[3].image + '"/>';
            } else if (average > 80 && average < 100) {
                document.getElementById("JLLC").innerHTML = '<img id="JLLCmove" class="JLLC" src="' + frame[4].image + '"/>';
            } else {
                document.getElementById("JLLC").innerHTML = '<img id="JLLCmove" class="JLLC" src="' + frame[5].image + '"/>';
            }

        }
    })
    .catch(function(err) {
        console.log("ça ne va pas fonctionner si vous n'activez pas un microphone !")
    });