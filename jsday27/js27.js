const list = document.querySelector('.items')
let startX = 0
let starscroll = 0 //第二種做法
//let startTime = 0

const stardrag = function(e){
    list.classList.add('active')
    startX = e.pageX
    starscroll = list.scrollLeft //第二種做法
    startTime = new Date().getTime()
    //console.log(e)
}
const draghandler = function(e){
    if(list.classList.contains('active')){
        let move = e.pageX - startX
        startX = e.pageX  // 第二次移動時把第一次移動的點變為第二次移動的原點
        list.scrollLeft -= move     // x -= y   等於   x = x-y


        //startX = e.pageX     第二種做法不需要
        //list.scrollLeft -= move  第二種做法不需要
        //list.scrollLeft = starscroll - move //第二種做法
        
    }
}
const stopdrag = function(){
    list.classList.remove('active')
    // if(new  Date().getTime() - startTime <= 500){
    //     if(e.pageX > startX){
    //         console.log('swipe right')
    //     }else if(e.pageX < startX){
    //         console.log('swipe left')
    //     }
    // }
   
}
// function stardrag(){}
// function draghandler(){}
// function stopdrag(){}



list.addEventListener('mousedown', stardrag) //touchstar
list.addEventListener('mousemove',draghandler) //touchmove
list.addEventListener('mouseup', stopdrag) //touchhend
list.addEventListener('mouseleave',stopdrag)












// const slider = document.querySelector('.items');
//   let isDown = false;
//   let startX;
//   let scrollLeft;

//   slider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
//   });

//   slider.addEventListener('mouseleave', () => {
//     isDown = false;
//     slider.classList.remove('active');
//   });

//   slider.addEventListener('mouseup', () => {
//     isDown = false;
//     slider.classList.remove('active');
//   });

//   slider.addEventListener('mousemove', (e) => {
//     if (!isDown) return;  // stop the fn from running
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 3;
//     slider.scrollLeft = scrollLeft - walk;
//   });
