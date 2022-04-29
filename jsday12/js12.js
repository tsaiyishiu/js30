const secretcode = [38, 38 ,40, 40, 37, 39, 37, 39, 66 ,65];
const input = [];
window.addEventListener('keyup',function(e){
    
    

    input.push(e.keyCode);
    
    while(input.length > secretcode.length){
        //shift从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度
        input.shift();
    }

    if(input.join('') === secretcode.join('')){
         cornify_add();
    } 
})










const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('DING DING!');
    cornify_add();
  }
  console.log(pressed);
});