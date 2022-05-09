let now = null //rwd跑板時增設
let target = document.querySelectorAll('a');
let highlight = document.querySelector('.highlight');
 highlight.style.display = 'none'; //寫這個的意義  沒寫會從左上跑進來為什麼？

 function setPostion(){
    if (!now) return;
    let {top, left, width, height} = now.getBoundingClientRect();
     
    highlight.style.display = '';
    highlight.style.width = width +'px';
    highlight.style.height = height +'px';
    highlight.style.top = top + window.scrollY + 'px'; //不加window.scrollY頁面捲動時會跑掉
    highlight.style.left = left + window.scrollX +'px';//不加window.scrollX頁面捲動時會跑掉

    //區域性使用較方便座標不會跑掉
    //highlight.style.top = now.offsetTop +'px';
    //highlight.style.left = now.offsetLeft +'px'; 
 }
 function enterhendler(){
    now = this // rwd跑板時增設
    setPostion() 
}

//  //rwd跑板時增設
//  function resizehendler(){
      
//     setPostion();   
    
    
    
//      //  highlight.style.display = '';
//     //  highlight.style.width = rect.width +'px';
//     //  highlight.style.height = rect.height +'px';
//     //  highlight.style.top = rect.top + window.scrollY + 'px'; //不加window.scrollY頁面捲動時會跑掉
//     //  highlight.style.left = rect.left + window.scrollX +'px';//不加window.scrollX頁面捲動時會跑掉

//  }
 

 target.forEach(elements => {
    elements.addEventListener('mouseenter', enterhendler);

 })
 window.addEventListener('resize',  setPostion) //rwd跑板時增設






// const triggers = document.querySelectorAll('a');
//   const highlight = document.createElement('span');
//   highlight.classList.add('highlight');
//   document.body.appendChild(highlight);

//   function highlightLink() {
//     const linkCoords = this.getBoundingClientRect();
//     console.log(linkCoords);
//     const coords = {
//       width: linkCoords.width,
//       height: linkCoords.height,
//       top: linkCoords.top + window.scrollY,
//       left: linkCoords.left + window.scrollX
//     };

//     highlight.style.width = `${coords.width}px`;
//     highlight.style.height = `${coords.height}px`;
//     highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

//   }

//   triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
