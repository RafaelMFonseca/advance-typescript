// Narrowing occurs when TypeScript can deduce a more specific type
// for a value based on the structure of the code.
// If every member in a union has a property in common, you can use
// that property without narrowing.

function doSomething(input: string | number) {
    if (typeof input === 'string') {
        return `string is ${input}`;
    }

    // Doesn't need else, here input is number.
    return `number is ${input.toFixed()}`;
}