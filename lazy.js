// استهدف العنصر الذي يحتوي على مربع الحوار وشريط التحميل.
var dialogBox = document.getElementById('dialog-box');
var progressBar = document.getElementById('progress-bar');

// تابع التمرير للكشف عن تحميل الصفحة بالكامل.
function lazyLoad() {
  if (document.readyState === 'complete') {
    // قم بإظهار مربع الحوار عن طريق تغيير خاصية العرض إلى "block".
    dialogBox.style.display = 'block';
    // قم بإخفاء المحتوى الآخر عن طريق تغيير خاصية العرض إلى "none".
    document.body.style.display = 'none';
  }
}

// قم بتعيين الدالة lazyLoad() للتنفيذ عند حدوث التمرير.
window.addEventListener('load', lazyLoad);

// تابع لتحديث شريط التحميل.
function updateProgressBar() {
  var progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  progressBar.style.width = (progress * 100) + '%';
}

// قم بتعيين الدالة updateProgressBar() للتنفيذ عند حدوث التمرير.
window.addEventListener('scroll', updateProgressBar);

