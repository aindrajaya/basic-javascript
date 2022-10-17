/**
 * Contoh dari Ekspresi
 */
// console.log(typeof(2+2), "contoh dari ekpresi"); // numbre

/**
 * Contoh dari deklarasi
 */
let a = [];
// console.log(typeof(a), "contoh dari deklarasi"); //number

function sum(a, b){
  return a+b
}

/**Contoh object */
let Car1 = {
  //properti dari suatu object
  roda: 1,
  name: "Toyota"
}

// console.log(typeof(sum), "tipe data");
// console.log(typeof(Car.name), "tipe data")

const b = sum(2, 5) //7
// console.log(b) //7

// console.log(sum(4,7)) //1

const Plant = {
  jenis: "Akar",
  nama: "alang-alang"
}
const p = "phi"
const P = "pho"

// console.log(p, "p kecil");
// p = "Jari-jari"
// console.log(P, "p besar");

/**
 * Iterations - For loop
 */
for(let i = 0; i <= 4; i++){
  // console.log(`Perulangan ke-${i+1}`);
}

let i = 0
let res = 0
do {
  i = i + 1
  res = res + 1
} while (i < 5)
// console.log(res, "do while")



//Expression
function subs(a, b){
  // console.log(a-b, "clg di dalam fungsi")
  return a-b
}
// console.log(subs(9,1), "clg di luar fungsi") //cara manggil fungsi

//Deklarasi
const times = function(a, b){
  return a * b;
}
// console.log(times(6,7));

/**
 * Class example
 */
class Car {
  constructor(nama, roda){
    this.nama = nama
    this.roda = roda
  }
  //fungsi/ method
  fungsiKecepatan(){
    return `mobil berama ${this.nama}, berjalan dengan kecepatan 100Km/jam`;
  }
}

// const mobilKijang = new Car("Kijang", 4)
// console.log(mobilKijang.fungsiKecepatan())


/**
 * Data Built-in functions
 */
const hariIni = new Date()
// console.log(hariIni.toLocaleString(), "tanggal har ini")

// To test a function and get back its return
function printElapsedTime(testFn) {
  const startTime = Date.now();
  const result = testFn();
  const endTime = Date.now();

  console.log(`Elapsed time: ${String(endTime - startTime)} milliseconds`);
  return result;
}

const yourFunctionReturn = printElapsedTime(yourFunction);
