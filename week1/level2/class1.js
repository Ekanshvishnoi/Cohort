//class = blueprint hota hai...
class animal {
  constructor(name,legcount,sound){
    this.name = name;
    this.legcount = legcount;
    this.sound = sound;
  }
  sounds(){
    console.log(this.name + " speaks " + this.sound);
  }
  static mytype(){
    console.log("Animal");
  }
}



//classes k object
animal.mytype();
let dog = new animal("dog" , 4 , "bhow bhow");
let cat = new animal("cat" , 4 , "meow");

cat.sounds();