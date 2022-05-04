
let images = document.querySelectorAll('img')
function debounce(func, wait = 20, immediate = true) {
    
    // var = undefined
    var timeout;
    console.log('debounce',arguments)
    
    return function() {
      var context = this, args = arguments;
    
       console.log('args',args)
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        console.log(func.apply(context, args))
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  

function scrollhandler (){
    //視窗的最高
    let windowTop = window.scrollY;
    //視窗的對底
    let windowBottom = windowTop + window.innerHeight;
    images.forEach((img)=>{
        //                圖片的top ＋ 圖片的一半高度
        let imgmidle = img.offsetTop + img.height/2
        //如果圖片位置 < 視窗對底部和圖片位置過半 > 視窗最高    
        if(imgmidle < windowBottom && imgmidle > windowTop){
            //執行active動作
            img.classList.add('active')
        } else{
            //不然移除active動作
            img.classList.remove('active');
        }
    });

    console.log('scroll', new Date().getTime())
}
window.addEventListener('scroll',debounce(scrollhandler));



// function debounce(func, wait = 20, immediate = true)

//          debounce(scrollhandler,  ,   )


