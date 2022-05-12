const target = document.querySelector('.speed')
const bar = document.querySelector('.speed-bar')
const video = document.querySelector('video')


function movehandler(e){
    //console.log(this.offsetTop)
    //console.log(e.pageY)
    const y = e.pageY - this.offsetTop
    //console.log(y)
    let percent = y / this.offsetHeight
    const height = Math.round(percent * 100) + '%' //0~100 => 高度百分比範圍
    bar.style.height = height;

    //0~1 => 0.5~2 控制影片的速度範圍
    //(0~1) * (大 - 小) + 小 
    percent = percent * 1.5 + 0.5;
    
    
    //console.log(this.offsetHeight)
    //console.log(percent)
    percent = percent > 2 ? 2 : percent < 0.5 ? 0.5 : percent //（？如果）percent大於２那就2（：不然）（？如果）percent小於0.5那就0.5（：不然）就是percent
    // if(percent > 2){
    //     percent = 2;
    // }else if(percent < 0.5){
    //     percent = 0.5;
    // }else{
    //     percent = percent
    // }
    bar.textContent = Math.round(percent * 100) / 100 + 'x'
    //console.log(percent)
    video.playbackRate = percent
    
}

target.addEventListener('mousemove', movehandler)
//console.log(target)












// const speed = document.querySelector('.speed');
// const bar = speed.querySelector('.speed-bar');
// const video = document.querySelector('.flex');

// function handleMove(e) {
//     const y = e.pageY - this.offsetTop;
//     const percent = y / this.offsetHeight;
//     const min = 0.4;
//     const max = 4;
//     const height = Math.round(percent * 100) + '%';
//     const playbackRate = percent * (max - min) + min;
//     bar.style.height = height;
//     bar.textContent = playbackRate.toFixed(2) + '×';
//     video.playbackRate = playbackRate;
//   }

// speed.addEventListener('mousemove', handleMove);
