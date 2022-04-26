const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
let shiuname = 'apple'
// Regular(log)
console.log('hello');

// Interpolated(%s)
console.log('Hello I am a %s string!', '💩');
console.log('Hello I am a %f string!', 1.23)
console.log('Hello I am a %d string!', 1.23)
console.log(`Hello I am a ${shiuname} string!`)


// Styled
// console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')
window.console.log('%c閉嘴','font-size:60px ; color:blue')
// warning!
console.warn('OH NOOO'); 

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong!');
console.assert(true,'白痴')
console.assert(false,'白痴')
console.assert(0,'白痴')
console.assert('','白痴')
console.assert(null,'白痴')
console.assert(undefined,'白痴')
// clearing
console.clear();

// Viewing DOM Elements
 console.log(p);
 console.dir(p);

// console.clear();

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting

console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);
