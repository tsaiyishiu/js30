const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName){
                            //開頭a the an 不管大小寫 都替換成空字串‘’ 
    return bandName.replace(/^(a |the |an )/i, '').trim()//trim()的意義 避免避免轉完之後兩側會有空格
}


bands.sort((a,b) => 
     (strip(a) > strip(b)? 1 : -1) //如果strip(a)大於strip(b)就等於1（：不然）就-1
) ;

document.getElementById('bands').innerHTML = bands
.map(band=>`<li>${band}</li>`)
.join('');











// function strip(bandName) {
//   return bandName.replace(/^(a |the |an )/i, '').trim();
// }

// const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// document.querySelector('#bands').innerHTML =
//   sortedBands
//     .map(band => `<li>${band}</li>`)
//     .join('');

// console.log(sortedBands);
