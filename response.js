var botName = 'Ceres Fauna';
var Uname = "Lolicon ManhBuoi: ";

function chatbotResponse(kk) {
    $("#anima").show();
    var botMessage = "I'm fucking confused"; //the default message
    lastUserMessage = kk.toLocaleLowerCase();
    if (lastUserMessage === "cứu") {
        botMessage = "$tên\nmở:phim, nhạc, truyện, ảnh\nthích : truyện, phim, web\nlệnh đặc biệt: show script, show source"
    } else 
    if (lastUserMessage.lastIndexOf('chào')!=-1 || lastUserMessage.lastIndexOf('hi')!=-1) {
        const hi = ['Chào Anh', 'Hello Anh', 'Iu Anh']
        botMessage = hi[Math.floor(Math.random() * (hi.length))];
    } else

    if (lastUserMessage.lastIndexOf('hello') != -1) {
        botMessage = "Lô Con C*c"
    } else 

    if (lastUserMessage.lastIndexOf('tên') != -1) {
        if(lastUserMessage.lastIndexOf('anh') != -1) {
            botMessage = 'Tên anh là ' + Uname;
        } else {
            botMessage = 'Tên em là ' + botName;
        }
    } else 
    if (lastUserMessage.lastIndexOf('mở') != -1) {
        if (lastUserMessage.lastIndexOf('nhạc') != -1) {
            botMessage = "Đang mở bản nhạc anh thích<br>Chúc anh nghe vui vẻ";
            window.open("https://www.youtube.com/watch?v=ORofRTMg-iY", '_blank');
        } else
        if (lastUserMessage.lastIndexOf('phim') != -1) {
            botMessage = "Đang mở trang phim mà anh thích<br>Chúc anh xem vui vẻ";
            window.open("hentaiz.vip", '_blank');
        } else
        if (lastUserMessage.lastIndexOf('truyện') != -1) {
            botMessage = "Đang mở web truyện mà anh thích nhất<br>Chúc anh xem vui vẻ";
            window.open("nhentai.net", '_blank');
        } else
        if (lastUserMessage.lastIndexOf('ảnh') != -1) {
            botMessage = "Đang mở thư viện ảnh<br>Chúc anh xem vui vẻ";
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
    if (lastUserMessage.lastIndexOf("thích") != -1) {
        if (lastUserMessage.lastIndexOf("truyện") !=-1) {
            if (lastUserMessage.lastIndexOf("em")) {
                botMessage = "Em thích nhất truyện về cuộc đời phong ba, bão táp của 1 thiếu gia như anh đó <3"
            } else {
                botMessage = "Anh thích nhất... tao chịu, cứ nào có gái đẹp là mày mê à"
            }
        } else  
        if (lastUserMessage.lastIndexOf("phim") !=-1) {
            if (lastUserMessage.lastIndexOf("em")) {
                botMessage = "Em thích nhất phim về 1 thiếu gia không xấu trai, không ngáo đá như anh đó <3"
            } else {
                botMessage = "quý bửu có thích thể loại khác à?"
            }
        } else 
        if (lastUserMessage.lastIndexOf("web") !=-1) {
            if (lastUserMessage.lastIndexOf("em")) {
                botMessage = "Không phải loại anh thích"
            } else {
                botMessage = "Anh thích nhất...m nên thử lệnh mở phim"
            }
        }
    } else 
    if ((lastUserMessage.lastIndexOf("tạo ra") !=-1 || lastUserMessage.lastIndexOf("làm ra") !=-1) && lastUserMessage.lastIndexOf("em") !=-1) {
        botMessage = "Còn thằng nào khác à"   
    }
    var sse = "https://www.google.com/search?q="
    if (botMessage==="I'm fucking confused") {
        var aq = lastUserMessage.split();
        var aqq = aq.length;
        for (var i=0;i<aqq;i++) {
            sse = sse + "+" + aq[i];
        }
        window.open(sse,'_blank');
    }
    return botMessage;
}