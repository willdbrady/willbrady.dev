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

// Text scrambler

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

const phrases = [
  'create',
  'inspire',
  'innovate',
  'build',
  'develop',
  'revolutionize',
  'collaborate'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 4000)
  })
  counter = (counter + 1) % phrases.length
}

next()