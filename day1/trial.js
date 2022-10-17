const kuda1 = {
  isChampion: false,
  name: "Kuda 1"
}

function getName1(pony){
  if(pony.isChampion){
    var name = 'Champion 1 ' + pony.name;
    return name;
  }
  return name;
}

function getName2(pony){
  var name;
  if(pony.isChampion){
    name = 'Champion 2 ' + pony.name;
    return name;
  }
  return name;
}

function getName3(pony){
  if(pony.isChampion){
    let name = 'Champion 3 ' + pony.name;
    return name;
  }
  return name
}

// console.log(getName1(kuda1))

// console.log(kuda1)

/**
 * Const
 */
const Pony = {color: 'blue'}
Pony.color = 'red' //it works
// console.log(Pony)

const Ponies = []
Ponies.push({color: 'blue'})
// console.log(Ponies)


/**
 * Shorthand Code
 */
function createPony(){
  const name = 'Nugie web';
  const color = 'Yellow';
  return {
    name: name,
    color: color
  };
}

//can be simplified\
function createPonySimplify(){
  const name = 'Nugie web';
  const color = 'Yellow';
  return {name, color};
}

//Using method
function createPonyMethod(){
  return {
    run: () => {
      console.log('Run!');
    }
  }
}

//can be simplified
function createPonyMethodSimplify(){
  return {
    run(){
      console.log('Run!');
    }
  }
}

/**
 * Destructuring Assignments
 */
const httpsOptions = {timeout: 3000, isCache: true};
const httpsOptionsNesting = {timeout: 3000, cache: {age: 3}};

//raw
const httpTimeouts = httpsOptions.timeout;
const httpIsCache = httpsOptions.isCache;

//destructuring with new name
const {timeout:  httpTimeouts1, isCache: httpIsCache1} = httpsOptions;
// console.log(httpTimeouts1, httpIsCache1);

//destructuring with same name variable
const {timeout, isCache} = httpsOptions;
// console.log(timeout, isCache)

//with nesting object
const {
  cache: {age}
} = httpsOptionsNesting;
// console.log(age);

//array destructuring
const arrTimeouts = [1000, 2000, 3000];
const [shortTime, medTime, longTime] = arrTimeouts;
// console.log(shortTime, medTime, longTime)

//Function destructuring
function getRandomPony(){
  const pony = {name: 'Nugie web'};
  const position = 2;
  //...
  return {pony, position};
}

const {pony, position} = getRandomPony()
console.log(pony, position)