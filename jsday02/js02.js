//宣告sec min hour （querySelecto抓動選擇器）選取html裡面的.second-hand .min-hand hour-hand 放便做操控
let sec = document.querySelector(`.second-hand`);
let min = document.querySelector(`.min-hand`);
let hour = document.querySelector(`.hour-hand`);

function setclock(){
    //(new Date 當前時間)
    let Currenttime = new Date()
    //(getSeconds拿取當前時間的秒鐘）當前秒數 ＊ 6度 ＋ 起始位置的90度
    let secondDegrees = Currenttime.getSeconds() * 6 + 90
    //(getMinutes拿取當前時間的分鐘) 當前的分鐘 ＊ ６度 ＋ 每秒鐘移動分針所移動得角度（6度/60秒）＋ 起始位置的90度
    let minuteDegrees = Currenttime.getMinutes() * 6 + Currenttime.getSeconds() * 6/60 + 90
    //(getHours拿取當前時間的小時) 同上
    let hourDegrees = Currenttime.getHours() * 30 + Currenttime.getMinutes() * 30/60 + 90
    //sec底下的css的transforms ＝ （rotate移動的角度）${secondDegrees}上方宣告的角度
    sec.style.transform = `rotate(${secondDegrees}deg)`
    min.style.transform = `rotate(${minuteDegrees}deg)`
    hour.style.transform = `rotate(${hourDegrees}deg)`
}
setclock()
setInterval(setclock,1000 )