// keyof operator takes an object type and produces a string or numeric literal union of its keys
type Point2 = {
    x: number;
    y: number;
};

type P2 = keyof Point2; // "x" | "y"

// if the type has a string or number index signature, keyof will return those types instead:
type PointWithIndex = {
    x: number;
    y: number;
    [index: number]: number;
};

type P3 = keyof PointWithIndex; // "x" | "y" | number

let P3key1: P3 = 1; // OK!
let P3key2: P3 = "x"; // OK!
let P3key3: P3 = "y"; // OK!

// @ts-expect-error
let P3key4: P3 = "z"; // Error!

type PointWithStringIndex =  {
    [index: string]: number;
};

type P4 = keyof PointWithStringIndex; // P4 = string | number
// P4 is string | number because JavaScript object keys are always coerced to a string, so obj[0] is always the same as obj["0"].

let P4key1: P4 = "can be any string"; // Works!
let P4key2: P4 = 123; // Works!