// Much like variable type annotations, you usually don’t need a return
// type annotation because TypeScript will infer the function’s return
// type based on its return statements. 
function doSomethingHere(n: number): boolean {
    return true;
}

// contextual typing = TypeScript inferred type the types of the
// forEach function along with the inferred type of the array.
const brNames = ['Lucas', 'Carlos', 'Silva'];
brNames.forEach(n => console.log(n)); // n = string

// The simplest way to describe a function is with a function type expression.
type GreetFunction = (greet: string) => boolean;

// functions can have properties in addition to being callable
type GreetNameFunction = {
    description: string;
    // You can combine call and construct signatures in the same type arbitrarily:
    // For call Signatures use : between the parameter list and the return type rather than =>
    (greet: string): void; 
    // You can write a construct signature by adding the new keyword in front of a call signature
    new (): { value: boolean };
};

function doGreet(fn: GreetNameFunction) {
    console.log(fn(''));
    console.log(new fn().value);
    console.log(fn.description);
}