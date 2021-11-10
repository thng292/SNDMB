var messages = [];
var lastUserMessage = "";
var botMessage = "";
var botName = 'Your ưaifu';
var talking = true;
var Uname = "Lolicon ManhBuoi: "

$("#formcon").hide();

function trans() {
    $("#typein").toggle();
    $("#formcon").show();
}

function chatbotResponse() {
    talking = true;
    botMessage = "I'm fucking confused"; //the default message
    lastUserMessage = lastUserMessage.toLocaleLowerCase();
    if (lastUserMessage === 'hi') {
        const hi = ['hi', 'howdy', 'hello']
        botMessage = hi[Math.floor(Math.random() * (hi.length))];;
    }

    if (lastUserMessage.lastIndexOf('hello') != -1) {
        botMessage = "Lô Con C*c"
    }

    if (lastUserMessage.lastIndexOf('name') != -1) {
        botMessage = 'My name is ' + botName;
    }
}

function newEntry() {
    if (document.getElementById("chatbox").value != "") {
        lastUserMessage = document.getElementById("chatbox").value;
        lastUserMessage = lastUserMessage.trim()
        document.getElementById("chatbox").value = "";
        $('#chatbox').attr("placeholder", "Type in");
        messages.push("<b>" + Uname + "</b>" + lastUserMessage);
        chatbotResponse();
        messages.push("<b>" + botName + ":</b> " + botMessage);
        Speech(botMessage);
        for (var i = 1; i < 8; i++) {
            if (messages[messages.length - i])
                document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
        }
    } else {
        $('#chatbox').attr("placeholder", "Type sth in bro");
    }
}

function Speech(say) {
    var url = "https://api.fpt.ai/hmi/tts/v5";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("api-key", "jtZwmbOIchxp9HfSgeTPnlvO4ApaQ8yk");
    xhr.setRequestHeader("speed", "0");
    xhr.setRequestHeader("voice", "banmai");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.on

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            var alink = JSON.parse(xhr.responseText);
            var audio = new Audio(alink.async);
            audio.play();
        };
    };

    var data = say;
    xhr.send(data);
}

var chb = document.getElementById("chatbox");
chb.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        newEntry();
    };
});
