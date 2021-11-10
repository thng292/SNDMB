var lastUserMessage = "";
var botMessage = "";
var botName = 'Your ưaifu';
var talking = true;
var Uname = "Lolicon ManhBuoi: "
var test = false; //test
//alert("hidding");

$('#formcon').hide();
$('#anima').hide();
function trans() {
    $("#typein").hide();
    $('#formcon').show();
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

function Speech(say) {
    if (test) 
        alert(say);
    else {
        var url = "https://api.fpt.ai/hmi/tts/v5";

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("api-key", "jtZwmbOIchxp9HfSgeTPnlvO4ApaQ8yk");
        xhr.setRequestHeader("speed", "0");
        xhr.setRequestHeader("voice", "banmai");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onprogress = function() {
            $("#anima").show();
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                $("#anima").hide();
                console.log(xhr.status);
                var alink = JSON.parse(xhr.responseText);
                var audio = new Audio(alink.async);
                audio.play();
                $("#chatborder").append('<p class="chatlog">'+ botMessage + '</p>');
                var element = document.getElementById("chatborder");
                element.scrollTop = element.scrollHeight;
            };
        };

        var data = say;
        xhr.send(data);
    }
}

function newEntry() {
    if (document.getElementById("chatbox").value != "") {
        lastUserMessage = document.getElementById("chatbox").value;
        lastUserMessage = lastUserMessage.trim()
        //alert(lastUserMessage);
        document.getElementById("chatbox").value = "";
        $("#chatborder").append('<p class="chatlog chatlogU">' + lastUserMessage + '</p>');
        $('#chatbox').attr("placeholder", "Type in");
        var temp = lastUserMessage;
        chatbotResponse();
        temp = "<b>" + botName + ":</b> " + botMessage
        Speech(botMessage);
    } else {
        $('#chatbox').attr("placeholder", "Type sth in bro");
    }
    alert("Fuck");
}