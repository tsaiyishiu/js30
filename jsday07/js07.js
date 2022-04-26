
    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
      console.log(people)
  
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
      console.log(comments)
    //1. Some and Every Checks
    // Array.prototype.some() // is at least one person 19?
    // const isAdult = people.some(function(person) {
    //   const currentYear = (new Date()).getFullYear();
    //   if(currentYear - person.year >= 19) {
    //     return true;
    //   }
    // });
    
    // const ans = people.some(p => {
        
    //     return new Date().getFullYear() - p.year >= 19
    // });
//一個陣列中只要有一個以上的元素通過自訂的回呼函式所給定的測試,
    // 回傳的結果為true, 反之, 若全部都沒通過測試, 結果為false
    const ans = people.some(function(p){
        //現在的時間減掉陣列禮物件的year是否有大於等於 19有的話回傳ture沒有反之
        return new Date().getFullYear() - p.year >= 19 ;
        
    });
    //console.log(ans)

    //2. Array.prototype.every() // is everyone 19?
    //一個陣列中所有的元素通過自訂的回呼函式所給定的測試,
    // 回傳的結果為true, 反之, 若有其中一項沒通過測試, 結果為false
    const ans2 = people.every(function (p){
        return new Date().getFullYear - p.year >= 19 ;
    });
    //console.log(ans2)

    //3.// Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    //const ans3 = comments.find(function(com){
       // return com.id === 823423
        
    //});
    //console.log(ans3)

    //4.Array.prototype.findIndex()
    // Find the comment with this ID
    
    const ans4 = comments.findIndex(comment => comment.id === 823423);
    // const ans4 = comments.findIndex(function(comment){
    //      comment.id === 823423
    // })
    console.log(ans4);
    // delete the comment with the ID of 823423


    //splice(起始位置, 刪除數量, 增加項目（可選）)
    const ans5 = comments.splice(1,1)
    console.log(ans5)
    //slice(起始位置～結束位置（不包含）)
    const ans6 = comments.slice(1,3)
