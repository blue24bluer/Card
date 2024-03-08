// تحديد العنصر الذي سيتم تنفيذ التأثير عليه
const container = document.querySelector('.container');

// استماع لحدث النقر
container.addEventListener('click', () => {
  // تنفيذ التأثيرات المرغوبة عند النقر
  container.style.backgroundColor = getRandomColor();
  container.style.transform = 'scale(1.1)';
  container.style.transition = 'background-color 0.3s, transform 0.3s';

  // استعادة الحالة الأصلية بعد فترة زمنية
  setTimeout(() => {
    container.style.backgroundColor = '';
    container.style.transform = '';
    container.style.transition = '';
  }, 500);
});

// دالة للحصول على لون عشوائي
function getRandomColor() {
  const color = '#0099cc'; // تم تعيين اللون الثابت هنا
  return color;
}

// تحديد العناصر في الصفحة
const logo = document.querySelector('.logo');
const socialMedia = document.querySelector('.social-media');

// تغيير لون الخلفية بتأثير متحرك
let backgroundColor = '#ebebeb';
let currentIndex = 0;

function changeBackground() {
  container.style.backgroundColor = backgroundColor;
  currentIndex = (currentIndex + 1) % backgroundColor.length;
}

setInterval(changeBackground, 1); // تغيير الخلفية كل 0.001 ثانية

// تغيير لون العنوان الرئيسي بتأثيرات متحركة
const h1 = document.querySelector('h1');
let textColor = '#0099cc';
let currentIndexText = 0;

function changeTextColor() {
  h1.style.color = textColor;
  currentIndexText = (currentIndexText + 1) % textColor.length;
}

setInterval(changeTextColor, 1); // تغيير لون العنوان كل 0.001 ثانية

// تحريك الشعار
const logoImg = logo.querySelector('img');
logoImg.style.transform = "rotate(0deg)"; // تم تعيين الشعار الثابت هنا

// تغيير لون روابط وسائل التواصل الاجتماعي بتأثير متحرك
const socialMediaLinks = socialMedia.querySelectorAll('a');
socialMediaLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = getRandomColor();
    link.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.2)';
  });

  link.addEventListener('mouseout', () => {
    link.style.color = textColor;
    link.style.textShadow = 'none';
  });
});
```

قمت بتغيير التردد إلى 1 ميلي ثانية (`setInterval(changeBackground, 1)`) لتغيير الخلفية ولون العنوان الرئيسي بتأكد من أن الألوان التي قمت بتعيينها في الملف `java.js` هي الألوان التي ترغب في استخدامها. يمكنك تغيير الألوان عن طريق تعديل القيم الموجودة في المتغيرات `backgroundColor` و `textColor` في الكود.

على سبيل المثال، إذا كنت ترغب في استخدام اللون الأحمر، يمكنك تغيير قيمة المتغير `backgroundColor` و `textColor` إلى `'#ff0000'`.

```javascript
let backgroundColor = '#ff0000';
let textColor = '#ff0000';
