const checkboxes = Array.from(
    document.querySelectorAll('.inbox input[type="checkbox"]')
);
console.log(checkboxes)

let lastCheck = null;

 function clickhandler(e){
     

     if (this.checked){
        
        if (e.shiftKey && lastCheck !== null){

             let nowCheck = checkboxes.indexOf(this);
            console.log(this)
            
             checkboxes.slice(
                 Math.min(nowCheck, lastCheck),
                 
                 Math.max(nowCheck, lastCheck)
             ).forEach(input => (input.checked = true));
         }
         console.log(lastCheck)
         lastCheck = checkboxes.indexOf(this);
         console.log(lastCheck)

     }else {
         lastCheck = null;
     }
 }

 checkboxes.forEach(input => {
     input.addEventListener("click", clickhandler);
   });


  
  
    
      
        
       
          
      
   
 






// const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// //
// let lastChecked;

// function handleCheck(e) {
//     console.log(e)
//     console.log(e.clientX)
//   // Check if they had the shift key down
//   // AND check that they are checking it
//   let inBetween = false;
//   if (e.shiftKey && this.checked) {
//     // go ahead and do what we please
//     // loop over every single checkbox
//     checkboxes.forEach(checkbox => {
//       //console.log(checkbox);
//       //這邊判斷式確保從上面點下來或是從下面點上去都可以回傳
//       if (checkbox === this || checkbox === lastChecked) {
//           console.log(this)
//         inBetween = !inBetween;
//         console.log('Starting to check them in between!');
//       }

//       if (inBetween) {
//           console.log(inBetween)
//         checkbox.checked = true;
//       }
//     });
//   }

//   lastChecked = this;
//   console.log(this)
// }

// //checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
// checkboxes.forEach(function(checkbox){
    
//     checkbox.addEventListener('click',handleCheck)
// })
// //每一抓出來的checkbox增加click事件 