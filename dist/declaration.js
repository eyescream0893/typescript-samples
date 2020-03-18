"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Assertion
var someValue = "this is string";
var stringLength1 = someValue.length; //JSXを使う時はJSXタグと区別が曖昧になるため、非推奨
var stringLength2 = someValue.length;
//Class
var Creature = /** @class */ (function () {
    function Creature(numberOfHands, numberOfFeet) {
        this.numberOfHands = numberOfHands;
        this.numberOfFeet = numberOfFeet;
    }
    return Creature;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(bark) {
        var _this = _super.call(this, 0, 4) || this;
        _this.bark = bark;
        return _this;
    }
    Cat.prototype.barking = function () {
        return this.bark + "! " + this.bark;
    };
    Cat.prototype.shakeTail = function () {
        console.log(this.barking());
    };
    return Cat;
}(Creature));
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(name) {
        var _this = _super.call(this, 0, 0) || this;
        _this.name = name;
        return _this;
    }
    Human.prototype.greet = function () {
        return "Hello! I'm" + this.name;
    };
    Human.prototype.shakeHands = function () {
        console.log(this.greet());
    };
    return Human;
}(Creature));
var dog = new Cat('bow-bow');
var human = new Human('Hanako');
//クラスメンバー修飾子
var Human2 = /** @class */ (function (_super) {
    __extends(Human2, _super);
    function Human2(name) {
        var _this = _super.call(this, 2, 2) || this;
        _this.name = name;
        return _this;
    }
    Human2.prototype.greet = function () {
        return "Hello! I'm" + this.name;
    };
    Human2.prototype.shakeHands = function () {
        console.log(this.greet());
    };
    return Human2;
}(Creature));
var Taro = /** @class */ (function (_super) {
    __extends(Taro, _super);
    function Taro() {
        return _super.call(this, 'Taro') || this;
    }
    Taro.prototype.greeting = function () {
        console.log(this.greeting);
    };
    return Taro;
}(Human));
var taro = new Taro();
taro.greeting();
taro.greet();
taro.shakeHands();
//列挙型
//数値列挙
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var left = Direction.Left;
//文字列列挙
var Ports;
(function (Ports) {
    Ports["USER_SERVER"] = "8080";
    Ports["REGISTER_SERVICE"] = "8081";
    Ports["MEDIA_SERVICE"] = "8888";
})(Ports || (Ports = {}));
