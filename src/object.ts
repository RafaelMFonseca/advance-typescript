// The special type object refers to any value that isn’t a
// primitive (string, number, bigint, boolean, symbol, null, or undefined).
// This is different from the empty object type { }, and also different from the global type Object.

// For this reason, function types are considered to be objects in TypeScript.
function isObject(input: object) { }
console.log(isObject(isObject));