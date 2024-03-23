//Loading animation variables and timing function.

var logo = document.getElementById("loading");
var loadingPage = document.getElementById("loading-page");
var loadedPage = document.getElementById("loaded-page");


function myfunction() {
  if (window.matchMedia("(max-width: 680px)").matches) {
    logo.style = "transition: .25s; transition-timing-function: linear; width: 3rem; height: 3rem; transform: translateX(-40.1vw) translatey(-45.9vh); opacity: 0;";
  } else {
    logo.style = "transition: .25s; transition-timing-function: linear; width: 3rem; height: 3rem; transform: translateX(-32.1vw) translatey(-45.9vh); opacity: 0;"
  }


  setTimeout(() => {
    loadedPage.style = "transition: .4s; opacity: 1;";
    loadingPage.style = "display: none;";
    document.body.style = "overflow:visible";
  }, 600);
}

const timer = setTimeout(() => {
  myfunction();
}, 2300);

//Mobile hamburger menu event listener and sliding animation.

var slide = document.getElementById('slide');
var burgericon = document.getElementById('burgericon');
burgericon.addEventListener('click', function (e) {
  this.classList.toggle('open');
  slide.classList.toggle('open');
});
slide.addEventListener('click', function () {
  slide.classList.toggle('open');
  burgericon.classList.toggle('open');
});

//sticky desktop blurred navbar
var navBar = document.getElementById('navBar');
window.addEventListener('scroll', function () {
  if (window.matchMedia("(max-width: 680px)").matches) {

  } else {
    navBar.style = "background-color: #0a0a0a79; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);";
  }

});

window.addEventListener('load', function () {
  window.scrollTo(0, 0);
});