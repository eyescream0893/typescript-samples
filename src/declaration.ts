// Assertion
let someValue: any = "this is string"
let stringLength1: number = (<string>someValue).length //JSXを使う時はJSXタグと区別が曖昧になるため、非推奨
let stringLength2: number = (someValue as string).length


//Class
class Creature {
  numberOfHands: number;
  numberOfFeet: number;
  constructor(numberOfHands: number, numberOfFeet: number) {
      this.numberOfHands = numberOfHands
      this.numberOfFeet = numberOfFeet
  }
}

class Cat extends Creature {
    bark: string
    constructor(bark: string){
        super(0,4)
        this.bark = bark
    }
    barking() {
        return `${this.bark}! ${this.bark}`
    }
    shakeTail() {
        console.log(this.barking());
    }
}

class Human extends Creature {
    name: string
    constructor(name: string) {
        super(0,0)
        this.name = name
    }
    greet() {
        return `Hello! I'm${this.name}`
    }
    shakeHands() {
        console.log(this.greet());
    }
}

const dog = new Cat('bow-bow')
const human = new Human('Hanako')


//クラスメンバー修飾子
class Human2 extends Creature {
  protected name: string;
  constructor(name: string) {
    super(2, 2);
    this.name = name;
  }
  protected greet() {
    return `Hello! I'm${this.name}`;
  }
  public shakeHands() {
    console.log(this.greet());
  }
}

class Taro extends Human {
  constructor() {
    super('Taro')
  }
  public greeting() {
    console.log(this.greeting);
  }
}

const taro = new Taro()
taro.greeting()
taro.greet()
taro.shakeHands()



//列挙型

//数値列挙
enum Direction {
  Up,Down, Left, Right
}
const left = Direction.Left

//文字列列挙
enum Ports {
  USER_SERVER = '8080',
  REGISTER_SERVICE = '8081',
  MEDIA_SERVICE = '8888'
}