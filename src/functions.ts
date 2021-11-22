// Much like variable type annotations, you usually don’t need a return
// type annotation because TypeScript will infer the function’s return
// type based on its return statements. 
function doSomethingHere(n: number): boolean {
    return true;
}

// contextual typing = TypeScript inferred type the types of the
// forEach function along with the inferred type of the array.