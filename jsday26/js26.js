const menus =  document.querySelectorAll('.cool > li');
const dropdownBackground = document.querySelector('.dropdownBackground');

function enterhendler(){
    this.classList.add('trigger-enter')
    setTimeout(()=>{
        this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active')
    }, 100)
    
    const dropdown = this.querySelector('.dropdown')
    const rect = dropdown.getBoundingClientRect()
    const navrect = document.querySelector('.top').getBoundingClientRect()

    // const menurect = {
    //     width: rect.width,
    //     height: rect.height,
    //     top: 0,
    //     left: 0,
    // };
    //console.log(rect)
    dropdownBackground.classList.add('open')
    dropdownBackground.style.width = rect.width +'px';
    dropdownBackground.style.height = rect.height +'px';
    dropdownBackground.style.top = (rect.top - navrect.top) +'px';
    dropdownBackground.style.left = (rect.left - navrect.left) +'px';
}

function leavehendler(){
    this.classList.remove('trigger-enter');
    this.classList.remove('trigger-enter-active');
    dropdownBackground.classList.remove('open');
}
//-------綁定事件--------------------------後續增加的按鈕無法觸發事件
menus.forEach(menu=>{
    menu.addEventListener('mouseenter', enterhendler) 
    menu.addEventListener('mouseleave', leavehendler)
})
//-------委派事件--------------------------多增加按鈕可直接使用
// const ul =  document.querySelector('.cool')

// ul.addEventListener('mouseover',inhendler)
// ul.addEventListener('mouseout',outhendler)

// function inhendler(e){
//     const path = e.composedPath();
//     if (path[0].nodeName == 'A') console.log('in', e.composedPath())
// }

// function outhendler(e){
//     const path = e.composedPath();
//     if (path[0].nodeName == 'A') console.log('out', e.composedPath())
// }









// const triggers = document.querySelectorAll('.cool > li');
//   const background  = document.querySelector('.dropdownBackground');
//   const nav  = document.querySelector('.top');

//   function handleEnter() {
//     this.classList.add('trigger-enter');
//     setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
//     background.classList.add('open');

//     const dropdown = this.querySelector('.dropdown');
//     const dropdownCoords = dropdown.getBoundingClientRect();
//     const navCoords = nav.getBoundingClientRect();

//     const coords = {
//       height: dropdownCoords.height,
//       width: dropdownCoords.width,
//       top: dropdownCoords.top - navCoords.top,
//       left: dropdownCoords.left - navCoords.left
//     };

//     background.style.setProperty('width', `${coords.width}px`);
//     background.style.setProperty('height', `${coords.height}px`);
//     background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
//   }

//   function handleLeave() {
//     this.classList.remove('trigger-enter', 'trigger-enter-active');
//     background.classList.remove('open');
//   }

//   triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
//   triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));