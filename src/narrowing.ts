// Narrowing occurs when TypeScript can deduce a more specific type
// for a value based on the structure of the code.
// If every member in a union has a property in common, you can use
// that property without narrowing.

// Type narrowing is the process of moving a less precise type to a
// more precise type.

// Within our if check, TypeScript sees typeof input === "string" and
// understands that as a special form of code called a type guard. 

// TypeScript follows possible paths of execution that our programs can
// take to analyze the most specific possible type of a value at a given position. 

// The process of refining types to more specific types than declared is called narrowing.

// Analysis of code based on reachability is called control flow analysis

function actuallyDoSomething(input: string | number) {
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

// The latter has the advantage that TypeScript infers a narrow literal
// boolean type true, while inferring the first as type boolean.
const b1 = Boolean(NaN); // type = boolean
const b2 = !""; // type = false

// TypeScript also uses switch statements and equality checks like ===, !==, ==, and != to narrow types.
// JavaScript’s looser equality checks with == and != also get narrowed correctly.

function testNarrowing(first: string | number | null, second: string | boolean | null, third: string | null | undefined) {
    if (first! === second!) {
        console.log(first.toLowerCase()); // first = string
        console.log(second.toLowerCase()); // second = string
    } else {
        console.log(first); // first = string | number | null
        console.log(second); // second = string | boolean | null

        if (first !== null) {
            console.log(first); // first = string | number;
        } else {
            console.log(first); // first = null
        }
    }

    if (third != null) {
        console.log(third); // third = string
    }

    if (third != undefined) {
        console.log(third); // third = string
    }
}

// TypeScript takes the in operator into account as a way to narrow down potential types.
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = Fish & Bird;

function move(animal: Fish | Bird | Human) {
    if ('swim' in animal) {
        return animal.swim(); // animal = Fish | Human
    }
    console.log(animal.fly()); // animal = Bird
}

// As you might have guessed, instanceof is also a type guard, and TypeScript narrows
// in branches guarded by instanceofs.

function logDate(date: Date | string) {
    if (date instanceof Date) {
        console.log(date); // date = Date
    } else {
        console.log(date); // date = string
    }
}


// When we assign to any variable, TypeScript looks at the right side of the
// assignment and narrows the left side appropriately.
let asgn = Math.random() < 0.5 ? 10 : "hello world"; // asgn = string | number
asgn = 100; // OK reassign
asgn = "bye"; // OK reassign

function isDate(input: Date | string | number): input is Date {
    return input instanceof Date;
}

// Custom 'type predicates' and 'naworring'
// TypeScript will narrow that variable to Fish if the original type is compatible.
function isFish(input: any): input is Fish { 
    return (input as Fish).swim != undefined;
}

function swim(input: Fish | Bird) {
    if (isFish(input)) { // Tell to TypeScript that input is Fish
        console.log(input.swim()); // Input = Fish
    } else {
        console.log(input.fly()); // Input = Bird
    }
}

// You may use the type guard isFish to filter an array of Fish | Bird and obtain an array of Fish:
const zoo: (Fish | Bird)[] = [{} as Fish, {} as Bird, {} as Fish];
const underWater = zoo.filter(isFish); // underWater = Fish[] because of 'input is Fish' from 'isFish'

// When every type in a union contains a common property with literal types,
// TypeScript considers that to be a discriminated union, and can narrow out
// the members of the union.
interface ItemNormal {
    type: 'normal';
    use: () => void;
}

interface ItemRare {
    type: 'rare';
    magic: () => void;
}

type Item = ItemNormal | ItemRare;

function checkItem(item: Item) {
    if (item.type === 'normal') {
        console.log(item.use());
    } else {
        console.log(item.magic());
    }
}