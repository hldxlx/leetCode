alert(22);
let a = 2;
alert(a)
class Person{
  constructor (name,age){
    this.name = name;
    this.age =age;
  }
  getName(){
    return this.name
  }
  age(){
    return this.name
  }
}
let p = new Person("卡卡东");
alert(`${p.name} pp`);
class Student extends Person{
  constructor (name,age,num){
    super(name,age);
    this.num = num;
  }
  name(){
    alert(`${this.name}`)
  }
}
let s1 = new Student('嘻嘻',15,22);
console.log(s1)