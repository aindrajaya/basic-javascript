// h1 => tag element
// .h1 => classname
// #h1 => id
const array = ["data 1", "data 2", "data 3", "data 4", "data 5", "data 6"]
let title = document.querySelector("#judul");
title.innerHTML = "Application title";
let data = document.querySelector("#data");
let elementBaru = document.createElement("h1")

data.append("Data element baru", elementBaru)

// function inputData(param){
//   let li = document.createElement("li")
//   li.textContent = param;
//   return li;
// }

// for(let i = 0; i< array.length; i++){
//   data.appendChild(inputData(array[i]))
// }

const clicked = function(){
  alert("Button Clicked")
}