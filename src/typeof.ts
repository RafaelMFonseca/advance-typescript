// you can use typeof operator in a type context to refer to the type of a variable or property:
let someString = "hello";

// this is the typeof operator of the Javascript
let typeofSomeString = typeof someString; // typeofSomeString is "string"
const msgboxType = typeof msgbox("something"); // OK! you can use in an expression context

// this is the typeof operator of the Typescript
function myFunction() {
    return "hello";
}

// To refer to the type that the value myFunction has, we use typeof:
type MyFunctionType = typeof myFunction; // MyFunctionType is () => string

function msgbox(s: string) {
    return s + "hello";
}

const myNumber = 42;

// This is allowed:
const typeofMyNumber = typeof myNumber;
console.log(typeofMyNumber); // Output: "number"

// This is not allowed:
// it’s only legal to use typeof on identifiers (i.e. variable names) or their properties
// @ts-expect-error
const typeofLiteralNumber: typeof 42; 

interface SomeInterfaceForTypeof {
    someStr: string;
    someNum: number;
}

const someValueForTypeofInt: SomeInterfaceForTypeof = { someNum: 10, someStr: "hello" };

const typeofProp: typeof someValueForTypeofInt.someNum; // OK!

// msgbox is not executing!
// @ts-expect-error
let shouldContinue: typeof msgbox("Are you sure you want to continue?"); // ERROR! msgbox is not executing!
