const a = 5 //global scope
const sum = function(a){
  const b = 7 //function scope
  return a + b
}

const subs = function(a){
  var b = 2
  return a - b
}

console.log(sum(a))

