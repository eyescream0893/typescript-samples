"use strict";
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
var value;
value = false;
value = 1;
value = '2';
var numberOrString;
numberOrString = [0, '1'];
// numberOrString = [0, "1", false] //Error
// Nullable
var nullableString;
nullableString = null;
nullableString = 'null';
var nullableStrings = [];
nullableStrings.push(null);
nullableStrings.push('1');
// nullableStrings.push(false) //Error
// typeofキーワード
var asString = '';
var value2;
value2 = "value";
// value2 = 0; // Error
//typeofキーワード 型推論
var myObject = { foo: 'foo' };
var anotherObject = { foo: '' };
anotherObject['foo'] = 'value';
anotherObject['bar'] = 'value'; //Error
anotherObject[''];
//keyof キーワード
var myObject2 = {
    foo: 'FOO',
    bar: 'BAR',
    bas: 'BAS'
};
var myObjectKey;
myObjectKey = "bar";
// myObjectKey = "qux";//Error
