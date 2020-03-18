import { resolve } from "dns"

// 戻り値型アノテーションと異なる実装
function getStringValue(value: number, prefix?: string): string {
    // if (prefix === undefined) return value //Error
    return `${prefix} ${value}`
}

// 処理の内容によって変わる型推論
function getScore(score: number) {
    if (score < 0 || score > 100) return null
    return score
}

function getScoreAmount(score: 'A' | 'B' | 'C') {
    switch(score) {
        case 'A':
            return 100
        case 'B':
            return 60
        case 'C':
            return 300
    };
}


//Promiseの型推論
function waite(duration: number) {
    return new Promise(resolve => {
        setTimeout(()=> resolve(`${duration} ms passed`), duration)
    })
}
waite(100).then((result) => {}) //resは{}


// function waite2(duration: number) {
//     return new Promise(resolve => {
//         setTimeout(()=> resolve(`${duration} ms passed`), duration)
//     })
// }
// waite2(100).then(result => {}); //resは{}


//インスタンス時に型を付与
function waite2(duration: number) {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve(`${duration}  ms passed`), duration);
    })
}
waite2(100).then((result) => {}) //resはstring


//async関数
async function queue () {
    const message = await waite(100) //const message: string
    return message
}

// Promise.all / Promise.race
function waiteThenString(duration: number) {
    return new Promise<string>( resolve => {
        setTimeout(() => resolve(`${duration}  ms passed`), duration);
    })
}

function waiteThenNUmber(duration: number) {
  return new Promise<number>(resolve => {
    setTimeout(() => resolve(duration), duration);
  });
}

function waiteAll() {
    return Promise.all([
      waiteThenString(10),
      waiteThenNUmber(100),
      waiteThenString(100)
    ]);
}

function waiteRace() {
  return Promise.race([
    waiteThenString(10),
    waiteThenNUmber(100),
    waiteThenString(100)
  ]);
}

async function main () {
    const [a, b ,c] = await waiteAll() //a: string, b: number, c: string
    const result = await waiteRace() //result: string | number
}


//import構文の型推論
import {value3, label, returnFalse} from './import'
const v1 = value
const v2 = label;
const v3 = returnFalse

// dynamic import
import('./import').then(module => {
    const amount = module.value3 // const amount: 10
})

async function main2() {
    const { value3 } = await(import('./import'))
    const amount = value3
}


// "gender": "man",
//     "age": 24,
//     "address": {
//         "streetAddress": "126",
//         "city": "San Jone",
//         "state": "CA",
//         "postalCode": "394221"
//     },
//     "phoneNumbers": [
//         {
//             "type": "home",
//             "number": "7383627627"
//         }
//     ]


//JSONの型推論
interface User{
    firstName: string,
    lastName: string,
    gender: string,
    age: number,
    address: {
        streetAddress: string,
        city: string,
        state: string,
        postalCode: string
    },
    phoneNumbers: [ {
        type: string,
        number: string
    } ]
}

type Users =  User[]