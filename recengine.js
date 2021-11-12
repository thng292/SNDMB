URL = window.URL || window.webkitURL;
var gumStream;
//stream from getUserMedia() 
var rec;
//Recorder.js object 
var input;
//MediaStreamAudioSourceNode we'll be recording 
// shim for AudioContext when it's not avb. 
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContext;
//new audio context to help us record 
var audioUrl = "";

function startRecording() {
    var constraints = {
        audio: true,
        video: false
    }
    navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        console.log("getUserMedia() success, stream created, initializing Recorder.js ...");
        gumStream = stream;
        input = audioContext.createMediaStreamSource(stream);
        rec = new Recorder(input, {
            numChannels: 1
        })
        //start the recording process 
        rec.record()
        console.log("Recording started");
    }).catch(function (err) {
        //enable the record button if getUserMedia() fails 
        alert("Failed to start recording");
    });
}


function createDownloadLink(blob) {
    audioUrl = URL.createObjectURL(blob);
}

function stopRecording() {
    console.log("stopButton clicked");
    rec.stop(); //stop microphone access 
    gumStream.getAudioTracks()[0].stop();
    //create the wav blob and pass it on to createDownloadLink 
    rec.exportWAV(createDownloadLink);
}