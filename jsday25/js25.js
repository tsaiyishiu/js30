let button = document.querySelector('button');
button.addEventListener('click', buttonhandler,{capture: true, once: false});
function buttonhandler(){
    console.log('botton click')
};


let divs = document.querySelectorAll('div');
divs.forEach((dom)=>{
    dom.addEventListener('click', divhandler, {capture: false});
});
function divhandler(e){
    e.stopPropagation()
    //console.log(e.path)
    //console.log(this.className)
}

let as = document.querySelectorAll('a');
as.forEach(dom =>{
    dom.addEventListener('click', ahandler, {capture: false, passive: false });
});
function ahandler(e){
    e.preventDefault();
    console.log('binding a click', this)
}

let ul = document.querySelector('ul');
ul.addEventListener('click', ulhandler);
function ulhandler(e){
    //console.log('target:', e.target,'currenttarget:', e.currenttarget)
    console.log(e.target.classList, e.path);
    //e.stopPropagation();
    if(e.target.nodeName === 'A'){
        e.preventDefault();
        console.log('delegate a click', e.target);
    }
    
    
}












// const divs = document.querySelectorAll('div');
// const button = document.querySelector('button');

// function logText(e) {
//   console.log(this.classList.value);
//   // e.stopPropagation(); // stop bubbling!
//   // console.log(this);
// }

// divs.forEach(div => div.addEventListener('click', logText, {
//   capture: false,
//   once: true
// }));

// button.addEventListener('click', () => {
//   console.log('Click!!!');
// }, {
//   once: true
// });
