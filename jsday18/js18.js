let li = document.querySelectorAll('li');
//console.log(li)

let a = Array.from(li)
.map(item => item.dataset.time)
.map(time => {
    let [min, sec] = time.split(":")//5:43  => [5,43]
    return min * 60 + sec * 1; //不使用＊的話會無法轉成數字
})
.reduce((prve, next)=>prve + next, 0)  //prve = 前一個數字 起始沒有前一個所以為0 next ＝ 陣列中拿到的下一個數字
console.log(a)
//00:00:00 

let sec = a % 60; //％為反回餘數
let min = (a - sec)/ 60;//先% 60會算不出hour 擺在後面在做
let hour = Math.floor(min / 60);
min %= 60;

console.log(`${hour}:${min}:${sec}` );


//let b = [].map.call(li, item => item);
//let c =[].map.apply(li, [item => item]); 
//let d = [...li].map(item => item); 









// const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// const seconds = timeNodes
//   .map(node => node.dataset.time)
//   .map(timeCode => {
//     const [mins, secs] = timeCode.split(':').map(parseFloat);
//     return (mins * 60) + secs;
//   })
//   .reduce((total, vidSeconds) => total + vidSeconds);

//   let secondsLeft = seconds;
//   const hours = Math.floor(secondsLeft / 3600);
//   secondsLeft = secondsLeft % 3600;

//   const mins = Math.floor(secondsLeft / 60);
//   secondsLeft = secondsLeft % 60;

//   console.log(hours, mins, secondsLeft);
