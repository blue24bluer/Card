// تحديد العناصر التي ترغب في تطبيق التأثير عليها
var targetElements = document.querySelectorAll('.wind-effect');

// تابع لتنفيذ التأثير
function applyWindEffect() {
  // حساب الأبعاد المتاحة للصفحة
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // تطبيق التأثير على كل عنصر
  for (var i = 0; i < targetElements.length; i++) {
    var element = targetElements[i];

    // تعيين موقع عشوائي للعنصر
    var randomTop = Math.floor(Math.random() * windowHeight);
    var randomLeft = Math.floor(Math.random() * windowWidth);

    // تحديد النصف العلوي والأسفل للمواقع العمودية
    var topValue = randomTop <= windowHeight / 2 ? randomTop : randomTop - windowHeight;
    var bottomValue = randomTop >= windowHeight / 2 ? windowHeight - randomTop : randomTop;

    // تحديد النصف الأيسر والأيمن للمواقع الأفقية
    var leftValue = randomLeft <= windowWidth / 2 ? randomLeft : randomLeft - windowWidth;
    var rightValue = randomLeft >= windowWidth / 2 ? windowWidth - randomLeft : randomLeft;

    // تعيين القيمة المتغيرة للخاصية transform
    element.style.transform = `translate3d(${leftValue}px, ${topValue}px, 0)`;
  }
}

// تنفيذ التأثير بانتظام
window.addEventListener('DOMContentLoaded', applyWindEffect);
