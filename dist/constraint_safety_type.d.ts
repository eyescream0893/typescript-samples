declare function getFormattedValue1(value: any): string;
declare function getFormattedValue2(value: number | null): string;
declare function greet(name?: string): string;
declare function getFormattedValue3(value: number, unit?: string | null): string;
declare type User = {
    age?: number;
    name?: string;
};
declare function registerUser(user: User): void;
declare const maybeUser: {
    age: number;
    name: string;
    gender: string;
};
declare const notUser: {
    gender: string;
    gradute: string;
};
declare type State = {
    readonly id: number;
    name: string;
};
declare const state: State;
declare const frozenState: Readonly<State>;
declare const defaltTheme: {
    backgroundColor: "orange";
    borderColor: "red";
};
declare function toNumber(value: string): any;
declare const fiction: number;
declare type User3 = {
    name: string;
    [k: string]: any;
};
declare const userA: User3;
declare const x: string;
declare const y: any;
declare type Answer = 'migth' | 'lot' | 'few' | 'entirely';
declare type User4 = {
    name: string;
    enquete: {
        [k: string]: Answer | undefined;
    };
};
declare const user4: User4;
declare const x1: "migth" | "lot" | "few" | "entirely" | undefined;
declare const x2: "migth" | "lot" | "few" | "entirely" | undefined;
