//宣告panels ＝ 選取底下所有class＝panel
const panels = document.querySelectorAll('.panel');


function clickhandler(){
    //(toggle沒有class＝open切換成有，有class=open切換成沒有）
    this.classList.toggle('open');
} 
function transitionhandler(e){
    if(e.propertyName !== 'font-size') return;
    e.target.classList.toggle('open-active')
    // if(e.propertyName.indexOf('flex')!== -1){
    //     this.classList.toggle('open-active')
    
}
//對(forEach每一個)panels執行給定的函數
panels.forEach(function(panel){
    //在panel增加click監聽事件(click點擊)作用clickhandler這個函數
    panel.addEventListener('click',clickhandler);
    panel.addEventListener('transitionend',transitionhandler);




    // panel.addEventListener('transitioned',function(e){
    //     if(e.propertyName.indexof('flex')!== -1){
    //         this.classList.toggle('open-active')
    //     }
    // });無反應
}) 
// panels.forEach(panel => {
//     panel.addEventListener('click',clickhandler)
// })
// console.log(panels) 作者寫法