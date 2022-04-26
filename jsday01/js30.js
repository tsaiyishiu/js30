//在window這個視窗（增加addEventListener）某一事件（keydown）執行function(e)這個動作
window.addEventListener('keydown', function(e) {

    console.log('this is e',e)
    //宣告key（名字自取）等於 (document這個網頁）（querySelector抓動選擇器）抓取html裡面.keys裡面的div裡面的data-key="${e.keyCode}
    const key = document.querySelector(`.keys > div[data-key="${e.keyCode}"]`);
    console.log(key)
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(sound)

    // 確保在按到非指定按鍵時不會有反應
    //當key等於（空直null）則（return裡表示終止函式）不等於空直的話則繼續以下動作
    if (key === null) {return}

    // 渲染畫面，新增 class 'playing'
    //在key這個動作裡（增加add)一個playing的（class classlist)
    key.classList.add('playing');
    console.log(key.classList)
    // 當 transition 動畫結束後觸發事件
    //在key這裡增加一個（transitionend事件）動畫產生後觸發transitionend 執行function(e)這動作
    key.addEventListener('transitionend', function(e) {
        console.log('1',e)
        // 更改的 css 很多，選一個當代表(transform)
        //(e.propertyName為css playing裡擇一的所有變化）(！不==等於）transform時終止函示
        if(e.propertyName !== "transform") {return}
        // （移除remove) class 'playing'
        key.classList.remove('playing');
    });

    // 每次按鍵時重置開始時間至 0
    sound.currentTime = 0;
    sound.play();
});

const obj = {
    qwe: 'qwee',
    asd: ['a','e','t','d'],
    zxc: 256
}

console.log(obj.asd[3])