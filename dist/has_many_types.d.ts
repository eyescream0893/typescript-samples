declare let value: boolean | number | string;
declare let numberOrString: (number | string)[];
declare let nullableString: string | null;
declare let nullableStrings: (string | null)[];
declare let asString: string;
declare let value2: typeof asString;
declare let myObject: {
    foo: string;
};
declare let anotherObject: typeof myObject;
declare const myObject2: {
    foo: string;
    bar: string;
    bas: string;
};
declare let myObjectKey: keyof typeof myObject2;
