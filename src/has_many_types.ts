// IntersectionTypes
// type Dog = {
//     tail: Tail,
//     bark: () => void
// }
// type Bird = {
//     tail: Wing,
//     fly: () => void
// }
// type Kimera = Dog & Bird


// function returnNever(): never {
//     return new Error()
// }
// let unexistenceType: string & number & boolean = returnNever(); // 「string & number & boolean」はnever型




// UnionTypes
let value: boolean | number | string
value = false
value = 1
value = '2'

let numberOrString: (number |string)[]
numberOrString = [0, '1']
// numberOrString = [0, "1", false] //Error

// Nullable
let nullableString: string | null
nullableString = null
nullableString = 'null'

let nullableStrings: (string | null)[] = []
nullableStrings.push(null)
nullableStrings.push('1')
// nullableStrings.push(false) //Error

// typeofキーワード
let asString: string = ''
let value2: typeof asString
value2 = "value";
// value2 = 0; // Error

//typeofキーワード 型推論
let myObject = { foo: 'foo' }
let anotherObject: typeof myObject =  {foo: '' }
anotherObject['foo'] = 'value'
anotherObject['bar'] = 'value' //Error
anotherObject['']

//keyof キーワード
const myObject2 = {
    foo: 'FOO',
    bar: 'BAR',
    bas: 'BAS'
}
let myObjectKey: keyof typeof myObject2;
myObjectKey = "bar";
// myObjectKey = "qux";//Error
