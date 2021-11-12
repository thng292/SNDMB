URL = window.URL || window.webkitURL;
var gumStream;
var rec;
var input;
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContext;
var audioUrl = "";

function startRecording() {
    var constraints = {
        audio: true,
        video: false
    }
    navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        gumStream = stream;
        input = audioContext.createMediaStreamSource(stream);
        rec = new Recorder(input, {
            numChannels: 1
        })
        rec.record()
        console.log("Recording started");
    }).catch(function (err) {
        alert("Failed to start recording");
    });
}

function sendAudio(audio) {
    var url = "https://api.fpt.ai/hmi/asr/general";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("api-key","jtZwmbOIchxp9HfSgeTPnlvO4ApaQ8yk");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            $("#anima").hide();
            console.log(xhr.responseText);
            var texxt = JSON.parse(xhr.responseText);
            $("#anima").before('<p class="chatlog chatlogU">'+ texxt.hypotheses[0].utterance + '</p>');
            var element = document.getElementById("chatborder");
            element.scrollTop = element.scrollHeight;
        }
    }
    xhr.send(audio);
}

function createDownloadLink(blob) {
    var url = URL.createObjectURL(blob);
    window.open(url);
    sendAudio(url);
}

function stopRecording() {
    console.log("stopButton clicked");
    rec.stop();
    gumStream.getAudioTracks()[0].stop();
    rec.exportWAV(createDownloadLink);
}