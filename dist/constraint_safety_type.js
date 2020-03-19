"use strict";
//関数でNullableを使う
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//BadExample
function getFormattedValue1(value) {
    return value.toFixed + " pt";
}
console.log(getFormattedValue1(0.1));
console.log(getFormattedValue1(null)); //RuntimeError
//アノテーション
function getFormattedValue2(value) {
    if (value === null)
        return '-- pt';
    return value.toFixed(1) + " pt";
}
console.log(getFormattedValue2(0.1));
console.log(getFormattedValue2(null)); // -- pt
//関数の引数をオプションにする
function greet(name) {
    if (name === undefined)
        return 'Hello';
    return "Hello " + name.toUpperCase;
}
console.log(greet()); //Hello
console.log(greet('Taro')); //Hello TARO
//デフォルト引数の型推論
function getFormattedValue3(value, unit) {
    if (unit === void 0) { unit = null; }
    var _value = value.toFixed;
    if (unit === null)
        return "" + _value; //ガードで安全になたコード
    return _value + " " + unit.toUpperCase;
}
function registerUser(user) { }
var maybeUser = {
    age: 26,
    name: 'Taro',
    gender: 'male'
};
var notUser = {
    gender: 'male',
    gradute: 'Tokyo'
};
registerUser(maybeUser);
// registerUser(notUser) Error!
// registerUser({}) Error!
// registerUser() Error!
//ExcessPropertyChecks
registerUser({
    age: 26,
    name: "Taro",
});
registerUser(__assign({
    age: 26,
    name: "Taro",
    gender: "male"
}));
var state = {
    id: 1,
    name: 'Taro'
};
state.name = 'jiro';
// state.id = 2 Error!
//Object.freeze型推論
var frozenState = Object.freeze(state);
// frozenState.name = 'hanako'　Error!
// frozenState.id = 3　Error!
// 抽象度による型推論
//ダウンキャスト
var defaltTheme = {
    backgroundColor: "orange",
    borderColor: "red"
};
// defaltTheme.backgroundColor = "blue"; Error!
//アップキャスト
//Bad Example
function toNumber(value) {
    return value;
}
var fiction = toNumber('10000'); // No Error!
fiction.toFixed(); //Runtime Error!
var userA = {
    name: 'Taro',
    age: 26
};
var x = userA.name; // const x: string
var y = userA.age; // const y: any
var user4 = {
    name: "Taro",
    enquete: {
        exercise_habits: "entirely",
        time_of_sleeping: "few"
    }
};
var x1 = user4.enquete['exercise_habits']; //const x: Ansew
var x2 = user4.enquete["time_of_sleeping"]; //const y: Ansew
