/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
    //條件?值1 :值2   如果 條件 為 true，運算子回傳 值1， 否則回傳 值2
    //點擊影片觸發播放暫停事件
  const method = video.paused ? 'play' : 'pause';
  console.log(method)
  video[method](); //用中括號取上面的值 video.play 或是 video.pause
//   if (video.paused){
//       video.play();
//   }else {
//       video.paused();
//   }
}
  

function updateButton() {
    //切換按鈕
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  //toggle是html的bottom  textContent是html的播放圖示
  toggle.textContent = icon;
  console.log(toggle.textContent)
}

function skip() {
    //快進倒退 currentTime當前播放時間和位置  (dataset全部的dat）的skip
    // ＋＝   多少時間帶入進去
 video.currentTime += parseFloat(this.dataset.skip);
 console.log(this)
}
//切換快慢和聲音
function handleRangeUpdate() {
  video[this.name] = this.value;
  console.log(this.value)
}

function handleProgress() {
    //(現在時間/總時間)
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
  //console.log(progressBar.style.flexBasis)
}

function scrub(e) {
    //console.log(e)
    //(進度條目前的長度/進度條總寬度)
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  console.log(progress.offsetWidth)
  video.currentTime = scrubTime;
}

/* Hook up the event listeners */
//點擊影片觸發播放暫停事件
video.addEventListener('click', togglePlay);
//點擊觸發按鈕切換
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
//進度條更新 
video.addEventListener('timeupdate', handleProgress);
//點擊按鈕觸發播放暫停
toggle.addEventListener('click', togglePlay);
//點擊觸發倒退快進
skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
//點擊觸發到指定的時間
progress.addEventListener('click', scrub);
//觸發滑鼠拖曳時間條
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);