declare let someValue: any;
declare let stringLength1: number;
declare let stringLength2: number;
declare class Creature {
    numberOfHands: number;
    numberOfFeet: number;
    constructor(numberOfHands: number, numberOfFeet: number);
}
declare class Cat extends Creature {
    bark: string;
    constructor(bark: string);
    barking(): string;
    shakeTail(): void;
}
declare class Human extends Creature {
    name: string;
    constructor(name: string);
    greet(): string;
    shakeHands(): void;
}
declare const dog: Cat;
declare const human: Human;
declare class Human2 extends Creature {
    protected name: string;
    constructor(name: string);
    protected greet(): string;
    shakeHands(): void;
}
declare class Taro extends Human {
    constructor();
    greeting(): void;
}
declare const taro: Taro;
declare enum Direction {
    Up = 0,
    Down = 1,
    Left = 2,
    Right = 3
}
declare const left = Direction.Left;
declare enum Ports {
    USER_SERVER = "8080",
    REGISTER_SERVICE = "8081",
    MEDIA_SERVICE = "8888"
}
