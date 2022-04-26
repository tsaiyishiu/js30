
///////////////////////////////////////////////////////////////////////////////////////////////////
let canvas = document.querySelector('#draw');
let ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//初始顏色
let color = 0 ;
//線的粗細
let lineWidth = 50 ;  
//ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;
//ctx.lineWidth= lineWidth ;
let direction = -1 ;
//線結束時的樣式（圓形）
ctx.lineCap = 'round';
//畫現時轉角的樣式
ctx.lineJoin = 'round';
//還沒開始畫
 let drawing = false;
 
 let x = 0;
 let y = 0 ;
 //let hue = 0;
 //mousedown事件滑鼠按下
 canvas.addEventListener('mousedown', function(e) {
     //console.log(e)
     //開始畫
    drawing = true; 
    //第一個按下位置
   [x,y] = [e.offsetX,e.offsetY];
});

//  canvas.addEventListener('mousedown', (e) => {
     
//      drawing = true; 
//     [x,y] = [e.offsetX,e.offsetY];
//  });
//事件鼠標移動時
 canvas.addEventListener('mousemove', (e) => {
     //console.log(drawing)
     //如果狀態是不可畫畫的話就終止反之執行以下動作
    if(!drawing) return;
     //console.log('draw')

     //開始畫
    ctx.beginPath();
        //color小於360 +1 不然就等於0
    color = color  < 360 ? color + 1 : 0 ;
    //hsl 顏色，飽和度，亮度
     ctx.strokeStyle =`hsl(${color}, 100%, 50%)`;
    //  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    //          direction = !direction;
    //        }
        
    //       if(direction) {
    //         ctx.lineWidth++;
    //       } else {
    //         ctx.lineWidth--;
    //       }
    if(lineWidth < 1 || lineWidth > 50){
        direction*= -1;
    }
    lineWidth += direction
    console.log(lineWidth += direction)
    ctx.lineWidth = lineWidth;//這段的意義記得問
    console.log(ctx.lineWidth)
    //ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.moveTo(x, y);
    ctx.lineTo(e.offsetX, e.offsetY);
    [x,y] = [e.offsetX,e.offsetY];
//     hue++;
//     if (hue >= 360) {
//     hue = 0;
//   }
    ctx.stroke(); 
    


 });
canvas.addEventListener('mouseup', () => {
     drawing = false;
 });
canvas.addEventListener('mouseleave', () => {
     drawing = false;
 });

///////////////////////////////////////////////////////////////////////////////////////////////////
// const canvas = document.querySelector('#draw');
// const ctx = canvas.getContext('2d');
// //canvas.width = window.innerWidth;
// //canvas.height = window.innerHeight;
// ctx.strokeStyle = '#BADA55';
// ctx.lineJoin = 'round';
// ctx.lineCap = 'round';
// ctx.lineWidth = 100;
// // ctx.globalCompositeOperation = 'multiply';

// let isDrawing = false;
// let lastX = 0;
// let lastY = 0;
// let hue = 0;
// let direction = true;

// function draw(e) {
//   if (!isDrawing) return; // stop the fn from running when they are not moused down
//   console.log(e);
//   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
//   ctx.beginPath();
//   // start from
//   ctx.moveTo(lastX, lastY);
//   // go to
//   ctx.lineTo(e.offsetX, e.offsetY);
//   ctx.stroke();
//   [lastX, lastY] = [e.offsetX, e.offsetY];

//   hue++;
//   if (hue >= 360) {
//     hue = 0;
//   }
//   if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
//     direction = !direction;
//   }

//   if(direction) {
//     ctx.lineWidth++;
//   } else {
//     ctx.lineWidth--;
//   }

// }

// canvas.addEventListener('mousedown', (e) => {
//   isDrawing = true;
//   [lastX, lastY] = [e.offsetX, e.offsetY];
// });


// canvas.addEventListener('mousemove', draw);
// canvas.addEventListener('mouseup', () => isDrawing = false);
// canvas.addEventListener('mouseout', () => isDrawing = false);
