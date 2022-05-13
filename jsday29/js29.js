
let timer;

const buttons = document.querySelectorAll('.timer__controls > button');
const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time')



const starttimer = function(sec){
    clearInterval(timer);
    const now = Date.now()     //new Date().getTime();
    const end = now + sec * 1000;
        
    //倒數計時

    timer =  setInterval(function(){
        const secLeft =  Math.floor((end - Date.now()) / 1000);
        if(secLeft >= 0){
            const displaymin = Math.floor(secLeft / 60)
            let displaysec = secLeft % 60 ;
            displaysec = displaysec < 10 ? '0' + displaysec : displaysec;   
            timeLeft.innerText = `${displaymin}:${displaysec}`;
        }else{
        clearInterval(timer)
    }
        
    }, 16);

    //顯示最時間

    const endDate = new Date(end)
    let hour = endDate.getHours(); 
    let min = endDate.getMinutes(); 
    min = min < 10 ? '0' + min : min;
    endTime.innerText = `back at ${hour}:${min}`;

};

const setTimer = function(){
    const sec = parseInt(this.dataset.time);//dataset.time ＝ data-time
    starttimer(sec)
}

buttons.forEach(button => button.addEventListener('click', setTimer));
document.querySelector('#custom').addEventListener('submit', function(e){
    e.preventDefault();
    const value =  parseInt(this.minutes.value);
    if(value){
        starttimer(value * 60)
        this.reset();
    }

})





















// let countdown;
// const timerDisplay = document.querySelector('.display__time-left');
// const endTime = document.querySelector('.display__end-time');
// const buttons = document.querySelectorAll('[data-time]');

// function timer(seconds) {
//   // clear any existing timers
//   clearInterval(countdown);

//   const now = Date.now();
//   const then = now + seconds * 1000;
//   displayTimeLeft(seconds);
//   displayEndTime(then);

//   countdown = setInterval(() => {
//     const secondsLeft = Math.round((then - Date.now()) / 1000);
//     // check if we should stop it!
//     if(secondsLeft < 0) {
//       clearInterval(countdown);
//       return;
//     }
//     // display it
//     displayTimeLeft(secondsLeft);
//   }, 1000);
// }

// function displayTimeLeft(seconds) {
//   const minutes = Math.floor(seconds / 60);
//   const remainderSeconds = seconds % 60;
//   const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
//   document.title = display;
//   timerDisplay.textContent = display;
// }

// function displayEndTime(timestamp) {
//   const end = new Date(timestamp);
//   const hour = end.getHours();
//   const adjustedHour = hour > 12 ? hour - 12 : hour;
//   const minutes = end.getMinutes();
//   endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
// }

// function startTimer() {
//   const seconds = parseInt(this.dataset.time);
//   timer(seconds);
// }

// buttons.forEach(button => button.addEventListener('click', startTimer));
// document.customForm.addEventListener('submit', function(e) {
//   e.preventDefault();
//   const mins = this.minutes.value;
//   console.log(mins);
//   timer(mins * 60);
//   this.reset();
// });