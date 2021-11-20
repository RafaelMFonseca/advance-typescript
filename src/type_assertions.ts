// Use a type assertion to specify a more specific type.
const myCanvas1 = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");


// TypeScript only allows type assertions which convert to a more specific or
// less specific version of a type.
// You can't convert string to number (for exemple).

// @ts-expect-error
const x = "32" as number;