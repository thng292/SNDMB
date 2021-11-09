var messages = []; //array that hold the record of each string in chat
var lastUserMessage = "";
var botMessage = "";
var botName = 'Your ưaifu';
var talking = true;
var Uname = "Lolicon ManhBuoi: "

//edit this function to change what the chatbot says
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
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
    if (document.getElementById("chatbox").value != "") {
        //pulls the value from the chatbox ands sets it to lastUserMessage
        lastUserMessage = document.getElementById("chatbox").value;
        lastUserMessage = lastUserMessage.trim()
        //sets the chat box to be clear
        document.getElementById("chatbox").value = "";
        $('#chatbox').attr("placeholder", "Type in");
        //adds the value of the chatbox to the array messages
        messages.push("<b>" + Uname + "</b>" + lastUserMessage);
        //Speech(lastUserMessage);  //says what the user typed outloud
        //sets the variable botMessage in response to lastUserMessage
        chatbotResponse();
        //add the chatbot's name and message to the array messages
        messages.push("<b>" + botName + ":</b> " + botMessage);
        // says the message using the text to speech function written below
        Speech(botMessage);
        //outputs the last few array elements of messages to html
        for (var i = 1; i < 8; i++) {
            if (messages[messages.length - i])
                document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
        }
    } else {
        $('#chatbox').attr("placeholder", "Type sth in bro");
    }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
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
//runs the keypress() function when a key is pressed
var chb = document.getElementById("chatbox");
chb.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        newEntry();
    };
});
