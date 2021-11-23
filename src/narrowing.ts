// Narrowing occurs when TypeScript can deduce a more specific type
// for a value based on the structure of the code.
// If every member in a union has a property in common, you can use
// that property without narrowing.

// Within our if check, TypeScript sees typeof input === "string" and
// understands that as a special form of code called a type guard. 

// TypeScript follows possible paths of execution that our programs can
// take to analyze the most specific possible type of a value at a given position. 

// The process of refining types to more specific types than declared is called narrowing.

function doSomething(input: string | number) {
    if (typeof input === 'string') {
        return `string is ${input}`;
    }

    // Doesn't need else, here input is number.
    return `number is ${input.toFixed()}`;
}

function logTypeOf(type: any) {
    console.log(typeof type);
}

logTypeOf('test'); // 'string'
logTypeOf(25); // 'number'
logTypeOf(74n); // 'bigint'
logTypeOf(true); // 'boolean'
logTypeOf(Symbol('name')); // 'symbol'
logTypeOf(undefined); // 'undefined'
logTypeOf({}); // 'object'
logTypeOf([]); // 'object'
logTypeOf(() => { }); // 'function'
logTypeOf(null); // 'object'

function printAll(names: string | string[] | null) {
    // typeof null is actually "object"
    if (typeof names == 'object') {
        // @ts-expect-error
        for (const name of names) {
            console.log(name);
        }
    }
}