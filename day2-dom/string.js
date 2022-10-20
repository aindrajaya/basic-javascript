const arr = ["1", "2", "3"];
// console.log(typeof(arr))

const objek = {
  prop1: "string",
  prop2: "string"
}

const arr2 = [
  1,
  "string 2",
  "string 3"
]

// arr.push(arr2[0], arr2[1], arr2[2])

for(let i = 0; i < arr2.length; i++){
  arr.push(arr2[i]);
}
 

const arrayAkhir = arr.map((a) => 
  a+ " tambahan"
)

console.log(arrayAkhir)
// console.log(gabungan)
