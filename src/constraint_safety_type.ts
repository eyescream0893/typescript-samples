//関数でNullableを使う

import { type } from "os";

//BadExample
function getFormattedValue1(value) {
    return `${value.toFixed} pt`
}
console.log(getFormattedValue1(0.1));
console.log(getFormattedValue1(null));//RuntimeError


//アノテーション
function getFormattedValue2(value: number | null) {
    if (value === null) return '-- pt'
    return `${value.toFixed(1)} pt`;
}
console.log(getFormattedValue2(0.1));
console.log(getFormattedValue2(null));// -- pt

//関数の引数をオプションにする
function greet(name?:string) {
    if (name === undefined) return 'Hello'
    return `Hello ${name.toUpperCase}`
}
console.log(greet()); //Hello
console.log(greet('Taro'));//Hello TARO



//デフォルト引数の型推論
function getFormattedValue3(value:number, unit: string | null = null) {
    const _value = value.toFixed
    if (unit === null) return `${_value}`//ガードで安全になたコード
    return `${_value} ${unit.toUpperCase}`
}


//オブジェクトの型安全
type User = {
    age?: number,
    name?: string
}

function registerUser(user: User) {}


const maybeUser = {
    age: 26,
    name: 'Taro',
    gender: 'male'
}

const notUser = {
  gender: 'male',
  gradute: 'Tokyo'
}

registerUser(maybeUser)
// registerUser(notUser) Error!
// registerUser({}) Error!
// registerUser() Error!




//ExcessPropertyChecks
registerUser({
  age: 26,
  name: "Taro",
//   gender: "male" Error!
});

registerUser({...{
  age: 26,
  name: "Taro",
  gender: "male"
}});


//読み込み専用プロパティー: readonly
type State = {
    readonly id: number,
    name: string
}
const state: State = {
    id: 1,
    name: 'Taro'
}
state.name = 'jiro'
// state.id = 2 Error!


//Object.freeze型推論
const frozenState = Object.freeze(state)
// frozenState.name = 'hanako'　Error!
// frozenState.id = 3　Error!










// 抽象度による型推論

//ダウンキャスト
const defaltTheme = {
  backgroundColor: "orange" as "orange",
  borderColor: "red" as "red"
};
// defaltTheme.backgroundColor = "blue"; Error!

//アップキャスト
//Bad Example
function toNumber(value: string): any {
    return value
}
const fiction: number = toNumber('10000')// No Error!
fiction.toFixed() //Runtime Error!



//オブジェクトに動的に値を追加

//インデックスシグネイチャー
type User3 = {
    name: string,
    [k: string]: any
}
const userA: User3 = {
    name: 'Taro',
    age: 26
}
const x = userA.name // const x: string
const y = userA.age // const y: any


//プロパティ型を宣言する
//インデックスシグネイチャーを安全に使う

type Answer = 'migth' | 'lot' | 'few' | 'entirely'
type User4 = {
    name: string
    enquete: {[k:string]: Answer | undefined}
}

const user4: User4 = {
  name: "Taro",
  enquete: {
    exercise_habits: "entirely",
    time_of_sleeping: "few"
  }
};

const x1 = user4.enquete['exercise_habits']//const x: Ansew
const x2 = user4.enquete["time_of_sleeping"];//const y: Ansew


//なんでも許容するインデックスシグネイチャー
interface User5 {
    [k:string]: any
}
const user5: User5 = {
    name: 'Taro',
    age: 32,
    walk: () => [],
    take: async() => {}
}


//危険な型の付与
//Bad Example
function greet2():any {
    console.log('hellp');
}
const message = greet2()
console.log(message.toUpperCase());//Runtime Error

//double assertion
const myName = 0 as any as string
console.log(myName.toUpperCase);//Runtime Error













//絞り込みによる安全
//typeof type gurds
function reset(value: number | string | boolean) {
    const v0 = value //const v0: number | string | boolean
    if (typeof value === 'number') {
        const v1 = value //const v1: number
        return 0
    }

    const v1 = value; //const v1: | string | boolean
    if (typeof value === "string") {
      const v1 = value; //const v1: string
      return '';
    }

    const v2 = value; //const v2: boolean
    return false;
}

console.log(reset(1)); //0
console.log(reset('1')); //''
console.log(reset(true));//false




//in type guards
type User6 = {gender: string}
type User7 = User6 & {name: string}
type User8 = User6 & {age: number, graduate: string }
function jugeUsertype(user: User7 | User8) {
  if ("gender" in user) {
    const u0 = user; //const u0: User7 | User8
    console.log("user type is UserA | UserB");
  }
  if ("name" in user) {
    const u1 = user; //const User7
    console.log("user type is User7");
    return //早期returnによる絞り込み推論
  }
  const u2 = user; //const User8
  console.log("user type is User8");
}


//instanceof type guards
class Creature1 {
  breathe(){}
}
class Animal extends Creature1 {
  shakeTail(){}
}
class Human1 extends Creature1 {
  greet(){}
}

function action(creature: Animal | Human1 | Creature1) {
    const c0 = creature//const c0: Animal | Human1 | Creature1
    c0.breathe()// NoError
    if (creature instanceof Animal) {
        const c1 = creature
        return c1.shakeTail()
    }
    const c2 = creature
    if (creature instanceof Human1) {
      const c3 = creature;
      return c3.greet();
    }
    const c4 = creature
    c4.breathe()
}


//タグ付きUnion Types
type User9 = {gender: 'male', name: string}
type User10 = {gender: 'female', age: number}
type User11 = {gender: 'other', graduate: string}

function jugeUser(user: User9 | User10 | User11) {
    switch (user.gender) {
      case "male":
        const u0 = user; //const u0: User9
        return 'user type is User9'
      case "female":
        const u1 = user; //const u1: User10
        return "user type is User10";
      case "other":
        const u2 = user; //const u2: User11
        return "user type is User11";
      default:
        const u3 = user; //const u3: never
        return "user type is never";
    }
}