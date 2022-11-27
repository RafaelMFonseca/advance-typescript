// You can use parameter destructuring to conveniently unpack objects provided as
// an argument into one or more local variables in the function body. 
// You can use a named type here as well:
type DestructType = { a: number; b: number; c: number; };
function sumSomething({ a, b, c }: DestructType) {
    console.log(a + b);
}