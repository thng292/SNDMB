var lastUserMessage = "";
var test = true; //test
//alert("hidding");

$('#formcon').hide();
$('#anima').hide();
function trans() {
    $("#typein").hide();
    $('#formcon').show();
}

var recing = false;
async function Crec() {
    if(!recing) {
        recing = true;
        $('#anima').before("<p class='chatlog' id='temp'>Listening</p>");
        $('#voicein').html("Stop");
        startRecording();
    } else {
        recing = false;
        $('#temp').remove();
        $('#voicein').html("Voice");
        stopRecording();
        $('#anima').show();
    }
}

async function Speech(say) {
    if (test) 
        alert(say);
    else {
        if (say[0] === '$') {
            $("#anima").hide();
            $("#anima").before('<p class="chatlog">'+ say + '</p>');
            var element = document.getElementById("chatborder");
            element.scrollTop = element.scrollHeight;
        } else {
            var url = "https://api.fpt.ai/hmi/tts/v5";

            var xhr = new XMLHttpRequest();
            xhr.open("POST", url);

            xhr.setRequestHeader("api-key", "jtZwmbOIchxp9HfSgeTPnlvO4ApaQ8yk");
            xhr.setRequestHeader("speed", "0");
            xhr.setRequestHeader("voice", "banmai");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    $("#anima").hide();
                    console.log(xhr.status);
                    var alink = JSON.parse(xhr.responseText);
                    var audio = new Audio(alink.async);
                    audio.play();
                    $("#anima").before('<p class="chatlog">'+ say + '</p>');
                    var element = document.getElementById("chatborder");
                    element.scrollTop = element.scrollHeight;
                };
            };

            var data = say;
            xhr.send(data);
        }
    }
}

function newEntry() {
    if (document.getElementById("chatbox").value != "") {
        lastUserMessage = document.getElementById("chatbox").value;
        lastUserMessage = lastUserMessage.trim()
        //alert(lastUserMessage);
        document.getElementById("chatbox").value = "";
        $("#anima").before('<p class="chatlog chatlogU">' + lastUserMessage + '</p>');
        $('#chatbox').attr("placeholder", "Type in");
        var temp = lastUserMessage;
        var a = chatbotResponse(lastUserMessage);
        temp = "<b>" + botName + ":</b> " + a
        Speech(a);
    } else {
        $('#chatbox').attr("placeholder", "Type sth in bro");
    }
}

var chb = document.getElementById("chatbox");
chb.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        newEntry();
    };
});