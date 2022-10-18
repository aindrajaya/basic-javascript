class Human {
  constructor(name, height){
    this.name = name;
    this.height = height;
  }

  //Built in function/ method
  humanCanIntroduce(){
    return `hello my name is ${this.name}`
  }
}

const Arifin = new Human("Arifin", "170 cm");
Arifin.humanCanIntroduce()