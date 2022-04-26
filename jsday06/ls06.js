const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
//1.
function requesthandler(){
    //(JSON.parse把一個JSON字串轉換成 JavaScript的數值或是物件)
    console.log(JSON.parse(this.response));
    
}
let req = new XMLHttpRequest();
//新增監聽（load事件当整个页面及所有依赖资源如样式表和图片都已完成加载时，将触发load事件）
req.addEventListener('load',requesthandler);
req.open('get',endpoint);
req.send();
//2.
fetch(endpoint)
    .then(blob => blob.json())
    // .then(function(blob){
    //     return blob.json();
    // })
    .then(data => console.log(data));
    // .then(function(data){
    //     return console.log(data)
    // })
//3.
// const cities = [];
// fetch(endpoint)
//   .then(blob => blob.json())
//   .then(data => cities.push(...data));

//4.
let cities = null;
fetch(endpoint)
    .then(blob => blob.json())
    // .then(function(blob){
    //     return blob.json();
    //      })
    //.then(data => (cities = data));
     .then(function(data){
         return cities = data
     })

//-------------------------------------------------------------------------------------------------
function findMatches(wordToMatch, iAmCities){
    // return cities.filter(function(place){
    //     const regex = RegExp(wordToMatch, 'gi');
    // }) 
    console.log('wordToMatch',wordToMatch)
    return iAmCities.filter(place =>{
        const regex = new RegExp(wordToMatch, 'gi');
        
        //console.log(wordToMatch)
        //console.log('place.city', place.city)

        // return place?.city?.match(regex) || place?.stage?.match(regex);
        return place.city.match(regex) || place.state.match(regex);
        
    });
    
}

// let apple = 'asd'
// let banana = 'qwe'
// findMatches(apple, banana)



function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    //return x.toLocaleString()
}

function inputhandler(){
    console.log(this)
    const matchArray =  findMatches(this.value, cities)
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex,`<span class="hl">${this.value}</span>`);
        
        return `
       <li>
         <span class="name">${cityName}, ${stateName}</span>
         <span class="population">${numberWithCommas(place.population)}</span>
       </li>
     `;
        })
        .join('');
    suggestions.innerHTML = html;   
    //console.log(html)
}
    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');



 document.querySelector('.search').addEventListener('keyup', inputhandler);
 




// function findMatches(wordToMatch, cities) {
//   return cities.filter(place => {
//     // here we need to figure out if the city or state matches what was searched
//     const regex = new RegExp(wordToMatch, 'gi');
//     return place.city.match(regex) || place.state.match(regex)
//   });
// }

// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }

// function displayMatches() {
//   const matchArray = findMatches(this.value, cities);
//   const html = matchArray.map(place => {
//     const regex = new RegExp(this.value, 'gi');
//    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
//     const stateName = pn lace.state.replace(regex, `<span class="hl">${this.value}</span>`);
//     return `
//       <li>
//         <span class="name">${cityName}, ${stateName}</span>
//         <span class="population">${numberWithCommas(place.population)}</span>
//       </li>
//     `;
//   }).join('');
//   suggestions.innerHTML = html;
// }

// const searchInput = document.querySelector('.search');
// const suggestions = document.querySelector('.suggestions');

// searchInput.addEventListener('change', displayMatches);
// searchInput.addEventListener('keyup', displayMatches);


// function testApple(value){
//     console.log('apple', value)
// }

// testApple('asd')
// testApple('qwe')
// testApple('zxc')
let one = 3
let two = 4
function shiu(three,four){

    return three + four
}
 shiu(one,two)
console.log('shiu',shiu(one,two))