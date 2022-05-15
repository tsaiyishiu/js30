const scoreBoard = document.querySelector(".score");
const moles = [...document.querySelectorAll(".mole")];
const status = moles.reduce((prev, current, index) => {
  prev[index] = false;
  return prev;
}, {});
//console.log(status)

const clickhandler = function () {
  if (molesProxy[moles.indexOf(this)]) {
    setscore(score + 1);
    molesProxy[moles.indexOf(this)] = false;
  }
};
const molesProxy = new Proxy(status, {
  get(target, key) {
    return target[key];
  },
  set(target, key, value) {
    target[key] = value;
    moles[key].removeEventListener("click", clickhandler);
    if (value) {
      moles[key].addEventListener("click", clickhandler);
      moles[key].classList.add("up");
    } else {
      moles[key].classList.remove("up");
    }
  },
});

let score = 0;
let timeUp = true;

const setscore = function (s) {
  score = s;
  scoreBoard.textContent = score;
};

const getRandomMole = function () {
  const mole = Math.floor(Math.random() * moles.length);
  const time = Math.random() * (1000 - 500) + 500; // 500~1000
  if (molesProxy[mole]) return getRandomMole();
  molesProxy[mole] = true;
  setTimeout(() => {
    if (!timeUp) getRandomMole();
    molesProxy[mole] = false;
  }, time);
};

const startGame = function () {
  setscore(0);
  timeUp = false;
  getRandomMole();
  setTimeout(() => {
    (timeUp = true), alert("loser"); //10秒後彈出對話匡
  }, 10000);
};

//---------------------------------proxy測試---------------------------------
// let obj = {
//   a: true,
//   b: true
// };

// let objproxy = new Proxy(obj, {
//   get(target, key){
//     console.log(target, key);
//     return target[key];
//   },
//   set(target, key, value){
//     console.log(key, value);
//     target[ket] = value;
//   }
// })

// const holes = document.querySelectorAll('.hole');
//   const scoreBoard = document.querySelector('.score');
//   const moles = document.querySelectorAll('.mole');
//   let lastHole;
//   let timeUp = false;
//   let score = 0;

//   function randomTime(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
//   }

//   function randomHole(holes) {
//     const idx = Math.floor(Math.random() * holes.length);
//     const hole = holes[idx];
//     if (hole === lastHole) {
//       console.log('Ah nah thats the same one bud');
//       return randomHole(holes);
//     }
//     lastHole = hole;
//     return hole;
//   }

//   function peep() {
//     const time = randomTime(200, 1000);
//     const hole = randomHole(holes);
//     hole.classList.add('up');
//     setTimeout(() => {
//       hole.classList.remove('up');
//       if (!timeUp) peep();
//     }, time);
//   }

//   function startGame() {
//     scoreBoard.textContent = 0;
//     timeUp = false;
//     score = 0;
//     peep();
//     setTimeout(() => timeUp = true, 10000)
//   }

//   function bonk(e) {
//     if(!e.isTrusted) return; // cheater!
//     score++;
//     this.parentNode.classList.remove('up');
//     scoreBoard.textContent = score;
//   }

//   moles.forEach(mole => mole.addEventListener('click', bonk));
