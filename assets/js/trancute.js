const moreLinksButton = document.querySelector('.more-links-button');
const moreLinks = document.querySelector('.more-links');

moreLinksButton.addEventListener('click', () => {
  moreLinks.classList.toggle('show'); // Toggle visibility using class
});
window.onload = function () {
  var textArray = ["Bizning boshqa sahifalarimiz", "Talabalar hayoti", "Biz haqimizda"]; // Список текстов, которые вы хотите отображать
  var currentIndex = 0;
  var changingInput = document.getElementById("changingInput");

  setInterval(function () {
    changingInput.value = textArray[currentIndex];
    currentIndex = (currentIndex + 1) % textArray.length;
  }, 5000); // Обновлять текст каждые 5 секунд
};
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.navbar_links');
let menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})


menuItem.forEach(function (menuItem) {
  menuItem.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  })
})
