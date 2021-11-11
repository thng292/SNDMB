var lastUserMessage = "";
var botMessage = "";
var botName = 'Your ưaifu';
var Uname = "Lolicon ManhBuoi: "
var test = true; //test
//alert("hidding");

$('#formcon').hide();
$('#anima').hide();
function trans() {
    $("#typein").hide();
    $('#formcon').show();
}
function chatbotResponse() {
    $("#anima").show();
    botMessage = "I'm fucking confused"; //the default message
    lastUserMessage = lastUserMessage.toLocaleLowerCase();
    if (lastUserMessage.lastIndexOf('chào')!=-1 || lastUserMessage.lastIndexOf('hi')!=-1) {
        const hi = ['Chào Anh', 'Hello Anh', 'Iu Anh']
        botMessage = hi[Math.floor(Math.random() * (hi.length))];;
    } else

    if (lastUserMessage.lastIndexOf('hello') != -1) {
        botMessage = "Lô Con C*c"
    } else 

    if (lastUserMessage.lastIndexOf('name') != -1) {
        botMessage = 'My name is ' + botName;
    }
    if (lastUserMessage.lastIndexOf('mở') != -1) {
        if (lastUserMessage.lastIndexOf('nhạc') != -1) {
            botMessage = "Đang mở bản nhạc anh thích";
            window.open("https://www.youtube.com/watch?v=ORofRTMg-iY", '_blank');
        } else
        if (lastUserMessage.lastIndexOf('phim') != -1) {
            botMessage = "Đang mở trang phim mà anh thích";
            window.open("hentaiz.vip", '_blank');
        } else
        if (lastUserMessage.lastIndexOf('truyện') != -1) {
            botMessage = "Đang mở web truyện mà anh thích nhất";
            window.open("nhentai.net", '_blank');
        } else
        if (lastUserMessage.lastIndexOf('ảnh') != -1) {
            botMessage = "Đang mở thư viện ảnh";
            window.open("https://drive.google.com/drive/folders/1oVWheiW49xangTg3PweKfaSTh7j7yIEc",'_blank');
        }
    } else
    if (lastUserMessage.lastIndexOf('show')!=-1) {
        if (lastUserMessage.lastIndexOf('script') != -1) {
            botMessage = "Opening";
            window.open("https://docs.google.com/document/d/1o_-N2mWckSVLyzIdbJpB8BLlhQp3AQmSvNBUeZicDXY/edit?usp=sharing",'_blank');   
        } else
        if (lastUserMessage.lastIndexOf('source') != -1) {
            botMessage = "Opening";
            window.open("https://github.com/thng292/SNDMB",'_blank');   
        }
    } else
    if (lastUserMessage.lastIndexOf('hát')!=-1) {

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
}
alert("Fuck");