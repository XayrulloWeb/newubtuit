const moreLinksButton = document.querySelector('.more-links-button');
const moreLinks = document.querySelector('.more-links');

moreLinksButton.addEventListener('click', () => {
  moreLinks.classList.toggle('show'); // Toggle visibility using class
});





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

function showDD(id) {
  document.getElementById('DD' + id).style = `display: block;  position: absolute; top: ${id *35}px; left: 160px; background-color: #0e1133;`;
}

function closeDD(id) {
  document.getElementById('DD' + id).style = "display: none";
}