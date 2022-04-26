    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
      const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      ];
      
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's 篩選 1500 年代出生的發明家列表 
      //const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
      //console.table(fifteen);
      //宣告ans ＝ 在inventors底下（filter保留抓取符合條件的元素組成一個新的陣列）函式所要做的事情帶入參數inventor
      const ans = inventors.filter(function(inventor){
          //（return回傳）inventor底下的year要大於等於1500（&&和）小於1600的值
        return inventor.year >= 1500 && inventor.year < 1600
      });
  
      // Array.prototype.map()
      // 2. Give us an array of the inventor first and last names 將first and last names合併再一起
      //const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
      //console.log(fullNames);
    //   const ans2 = inventors.map(inventor => inventor.first + ' ' + inventor.last)
    //   console.log(ans2)
      //宣告ans2 ＝inventors底下（map抓取所需要的內容組成新的陣列） 
      const ans2 = inventors.map(function(inventor){
      //回傳inventor底下first的內容＋空白＋last的內容     
        return inventor.first + ' ' + inventor.last 
      }) 
      //console.table(ans2);

  
      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      // const ordered = inventors.sort(function(a, b) {
      //   if(a.year > b.year) {
      //     return 1;
      //   } else {
      //     return -1;
      //   }
      // });
  
    //   const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
    //   console.table(ordered);
      const ans3 = inventors.sort(function(a,b){
          //console.log('ans3', a.year, b.year)
          return a.year - b.year
      })
      //console.table(ans3);
      



      // Array.prototype.reduce()
      // 4. How many years did all the inventors live?
    //   const totalYears = inventors.reduce((total, inventor) => {
    //     return total + (inventor.passed - inventor.year);
    //   }, 0);
    //   console.log(totalYears);
    //宣告ans4 ＝ inventors底下使用（reduce將一個累加器及陣列中每項元素傳入回呼函式將陣列化為單一值）（函式,初始值）
      const ans4 = inventors.reduce(function(ans4,inventor){
        //回傳(ans4＝初始0)加上inventor.passed - inventor.year的值 = X
        //回傳（ans4 = X )再加一次inventor.passed - inventor.year的值加到每一個都加過一遍所得出來的值
        return ans4 + inventor.passed - inventor.year
      },0)

       //const ans4 = inventors.reduce((ans4,inventor)=>{
        //return ans4 + inventor.passed - inventor.year
       //},0)
    //console.log(ans4);



      // 5. Sort the inventors by years lived
    //   const oldest = inventors.sort(function(a, b) {
    //     const lastInventor = a.passed - a.year;
    //     const nextInventor = b.passed - b.year;
    //     return lastInventor > nextInventor ? -1 : 1;
    //   });
    //   console.table(oldest);

    const ans5 = inventors.sort(function(a,b){
        return (a.passed-a.year) - (b.passed-b.year)
    })
    //console.table(ans5)
  
      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  
    //    const category = document.querySelector('.mw-category');

    //    const links = Array.from(category.querySelectorAll('a'));
    //   const de = links
                   //.map(link => link.textContent)
                   //.filter(streetName => streetName.includes('de'));
    //(textContent表示了節點或其後代的文字內容)
      //const de = links.map(link => link.textContent)
    //(includes判斷陣列是否有需要的元素（‘de’））                                                      
      //const de2 = de.filter(streetName => streetName.includes('de'))            
  
      // 7. sort Exercise
      // Sort the people alphabetically by last name
      //拿出people這個陣列的第一個Bernhard, Sandra和第二個Bethea, Erin做比較
      const alpha = people.sort((a, b) => {
        // const [aLast, aFirst] = lastOne.split(', ');
        
        const aName = a.split(', ');
        // const [bLast, bFirst] = nextOne.split(', ');
        const bName = b.split(', ');
        //如果a > b 回傳1 不然的話回傳-1
        // return aLast > bLast ? 1 : -1;
        return aName[0] > bName[0] ? 1 : -1;
      });
      //console.log(alpha);
  
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
  
      const transportation = data.reduce(function(obj, item) {
        console.log(obj, item)
        //(if如果)(!沒有)（obj[item]這個car）新增一個這car的key
        if (!obj[item]) {
            //這個key = 0
            obj[item] = 0;
        }
        console.log('create key',obj)
        //不管有沒有再加1
        obj[item]++;
        // obj[item] = obj[item] + 1;
        console.log('after ++',obj)
        return obj;
      }, {});
  
      //console.log(transportation);