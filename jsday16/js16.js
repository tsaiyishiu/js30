let length = 300 //陰影移動 的距離


document.querySelector('.hero').addEventListener('mousemove', function(e){
    //console.log(e)
    
    let {offsetX, offsetY} = e //滑鼠當前座標
    let text = document.querySelector('h1')
    // 我摸到的target不是我自己  
    if(this.target !== this){
    //要再依照他的座標補回來 
         offsetX += e.target.offsetLeft; 
         offsetY += e.target.offsetTop;
        }
    
    let lengthX=  Math.floor(offsetX / this.offsetWidth * length) *2 -length //雙方向
    let lengthY=  Math.floor(offsetY / this.offsetHeight * length) *2 -length //雙方向
    console.log(length)
        
    text.style.textShadow = `
        ${lengthX * 1}px ${lengthY * -1 }px 5px rgba(255,0,0,0.8),
        ${lengthX *1.2 }px ${lengthY * 1 }px 5px rgba(255,0,0,0.8),
        ${lengthX * 1 }px ${lengthY * -0.6 }px 5px rgba(255,0,0,0.8),
        ${lengthX * 1.6 }px ${lengthY * 1 }px 5px rgba(255,0,0,0.8)`  
    })






// const hero = document.querySelector('.hero');
//   const text = hero.querySelector('h1');
//   const walk = 500; // 500px

//   function shadow(e) {
//     const { offsetWidth: width, offsetHeight: height } = hero;
//     let { offsetX: x, offsetY: y } = e;

//     if (this !== e.target) {
//       x = x + e.target.offsetLeft;
//       y = y + e.target.offsetTop;
//     }

//     const xWalk = Math.round((x / width * walk) - (walk / 2));
//     const yWalk = Math.round((y / height * walk) - (walk / 2));

//     text.style.textShadow = `
//       ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
//       ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
//       ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
//       ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
//     `;

//   }

//   hero.addEventListener('mousemove', shadow);