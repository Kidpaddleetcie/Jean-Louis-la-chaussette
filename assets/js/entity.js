document.getElementById("JLLC").innerHTML = '<img class="JLLC" src="' + frame[0].image + '"/>';


// On gère l'intensité
let arrayFRAME;
let valuesFRAME;
let lengthFRAME;
let averageFRAME;

navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(function(stream) {
        audioContextFRAME = new AudioContext();
        analyserFRAME = audioContext.createAnalyser();
        microphoneFRAME = audioContext.createMediaStreamSource(stream);
        javascriptNodeFRAME = audioContext.createScriptProcessor(2048, 1, 1);

        analyserFRAME.smoothingTimeConstant = 0.8;
        analyserFRAME.fftSize = 1024;

        microphoneFRAME.connect(analyserFRAME);
        analyserFRAME.connect(javascriptNodeFRAME);
        javascriptNodeFRAME.connect(audioContext.destination);
        javascriptNodeFRAME.onaudioprocess = function() {
            arrayFRAME = new Uint8Array(analyser.frequencyBinCount);
            analyserFRAME.getByteFrequencyData(arrayFRAME);
            valuesFRAME = 0;

            lengthFRAME = array.length;
            for (let i = 0; i < length; i++) {
                valuesFRAME += (arrayFRAME[i]);
            }

            averageFRAME = valuesFRAME / lengthFRAME;
            if (averageFRAME < 20) {
                document.getElementById("JLLC").innerHTML = '<img class="JLLC" src="' + frame[0].image + '"/>';
            } else if (averageFRAME > 20 && averageFRAME < 40) {
                document.getElementById("JLLC").innerHTML = '<img class="JLLC" src="' + frame[1].image + '"/>';
            } else if (averageFRAME > 40 && averageFRAME < 60) {
                document.getElementById("JLLC").innerHTML = '<img class="JLLC" src="' + frame[2].image + '"/>';
            } else if (averageFRAME > 60 && averageFRAME < 80) {
                document.getElementById("JLLC").innerHTML = '<img class="JLLC" src="' + frame[3].image + '"/>';
            } else if (averageFRAME > 80 && averageFRAME < 100) {
                document.getElementById("JLLC").innerHTML = '<img class="JLLC" src="' + frame[4].image + '"/>';
            } else {
                document.getElementById("JLLC").innerHTML = '<img class="JLLC" src="' + frame[5].image + '"/>';
            }

        }
    })
    .catch(function(err) {
        console.log("ça ne va pas fonctionner si vous n'activez pas un microphone !")
    });