"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// 戻り値型アノテーションと異なる実装
function getStringValue(value, prefix) {
    // if (prefix === undefined) return value //Error
    return prefix + " " + value;
}
// 処理の内容によって変わる型推論
function getScore(score) {
    if (score < 0 || score > 100)
        return null;
    return score;
}
function getScoreAmount(score) {
    switch (score) {
        case 'A':
            return 100;
        case 'B':
            return 60;
        case 'C':
            return 300;
    }
    ;
}
//Promiseの型推論
function waite(duration) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(duration + " ms passed"); }, duration);
    });
}
waite(100).then(function (result) { }); //resは{}
// function waite2(duration: number) {
//     return new Promise(resolve => {
//         setTimeout(()=> resolve(`${duration} ms passed`), duration)
//     })
// }
// waite2(100).then(result => {}); //resは{}
//インスタンス時に型を付与
function waite2(duration) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(duration + "  ms passed"); }, duration);
    });
}
waite2(100).then(function (result) { }); //resはstring
//async関数
function queue() {
    return __awaiter(this, void 0, void 0, function () {
        var message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, waite(100)]; //const message: string
                case 1:
                    message = _a.sent() //const message: string
                    ;
                    return [2 /*return*/, message];
            }
        });
    });
}
// Promise.all / Promise.race
function waiteThenString(duration) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(duration + "  ms passed"); }, duration);
    });
}
function waiteThenNUmber(duration) {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(duration); }, duration);
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
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, a, b, c, result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, waiteAll()]; //a: string, b: number, c: string
                case 1:
                    _a = _b.sent() //a: string, b: number, c: string
                    , a = _a[0], b = _a[1], c = _a[2];
                    return [4 /*yield*/, waiteRace()]; //result: string | number
                case 2:
                    result = _b.sent() //result: string | number
                    ;
                    return [2 /*return*/];
            }
        });
    });
}
//import構文の型推論
var import_1 = require("./import");
var v1 = value;
var v2 = import_1.label;
var v3 = import_1.returnFalse;
// dynamic import
Promise.resolve().then(function () { return __importStar(require('./import')); }).then(function (module) {
    var amount = module.value3; // const amount: 10
});
function main2() {
    return __awaiter(this, void 0, void 0, function () {
        var value3, amount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (Promise.resolve().then(function () { return __importStar(require('./import')); }))];
                case 1:
                    value3 = (_a.sent()).value3;
                    amount = value3;
                    return [2 /*return*/];
            }
        });
    });
}
