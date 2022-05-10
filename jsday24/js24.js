


let nav = document.querySelector('#main')
let navPosition = nav.offsetTop

function scrollhandler(){
    if(window.scrollY >= navPosition){     //影片26:16解答
        //做fixed選單
        document.body.classList.add('fixedmenu');
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    }else{
        //normal
        document.body.classList.remove('fixedmenu');
        document.body.style.paddingTop = '';
    }
}


window.addEventListener('scroll', scrollhandler);
window,addEventListener('resize', function(){    //影片27:47
     navPosition = nav.offsetTop
 })








//   // Not a ton of code, but hard to
//   const nav = document.querySelector('#main');
//   let topOfNav = nav.offsetTop;

//   function fixNav() {
//     if (window.scrollY >= topOfNav) {
//       document.body.style.paddingTop = nav.offsetHeight + 'px';
//       document.body.classList.add('fixed-nav');
//     } else {
//       document.body.classList.remove('fixed-nav');
//       document.body.style.paddingTop = 0;
//     }
//   }

//   window.addEventListener('scroll', fixNav);
