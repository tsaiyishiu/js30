const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('items')) || [];//JSON.parse轉成json格式
//<將內容新增至 array items>
  function addItem(e) {     
      console.log(e)                                        
    e.preventDefault(); //即取消事件的預設行為。但不會影響事件的傳遞，事件仍會繼續傳遞。                                           
    const text = (this.querySelector('[name=item]')).value;
    //console.log(text) //為輸入的文字
    //console.log(this) //<from> tag觸發
    //console.log((this.querySelector('[name=item]')).value)//.value輸入的值
    const item = {
      text: text,    //自已打的待辦事項   
      done: false    //是否完成勾選ture/false
    };
    //console.log(item)
//   function addItem(e) {                                             
//         e.preventDefault()  
//         let input = (this.querySelector('[name=item]')) ;
//         items.push({ text:input.value, done: false}); 更新js資料
//         localStorage.setItem('items',  JSON.stringify(items)); 更新localStorage資料 
//         createlist(ite ms, itemsList); 更新畫面
//         this .reset(); 
    //<將資料存至 localStorage>使用的方法是 localStorage.setItem(..)
    items.push(item); //陣列最後一項加1
    populateList(items, itemsList);
    //(setItem(keyname, keyvalue) )
    localStorage.setItem('items', JSON.stringify(items));
    console.log( JSON.stringify(items))
    //console.log(JSON.stringify(items))//都轉成字串
    this.reset();//重置from
  }

  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {   
       // console.log(i)
      return `
        <li>                                                    
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    }).join('');
  }                                             //(?如果）plate.done完成 就checked （：不然)就（''空著）
                                                //${plate.done ? 'checked' : ''}
        // <li>                                
        //   <input type="checkbox" data-index ='1' id="item1"  checked />
        //   <label for="item1">aaa</label>
        // </li>

  function toggleDone(e) {
    if (!e.target.matches('input')) return; //避免重複觸發，判斷是input才處理
    console.log(e)
    const el = e.target; //el = input
    //console.log(e.target)
    const index = el.dataset.index;//index = 順序
    //console.log(index)
    items[index].done = !items[index].done;//表示開關  更新js資料
    //console.log(items[index].done)
    localStorage.setItem('items', JSON.stringify(items)); //更新localStorage資料
    (items, itemsList);//更新畫面
  }

  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);

  populateList(items, itemsList);
