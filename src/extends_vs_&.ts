interface Border {
    borderType: string;
}
interface Box {
    size: { x: number, y: number }
}

// Intersection types that is mainly used to combine existing object types.
// An intersection type is defined using the & operator.
type Container = Border & Box;

const myContainer: Container = { borderType: 'solid', size: { x: 10, y: 10 } };

// The principle difference between the two is how conflicts are handled.
interface Image {
    source: string;
}

// @ts-expect-error
interface Mask extends Image { // ERROR!
    // Interface 'Mask' incorrectly extends interface 'Image'.
    // Types of property 'source' are incompatible.
    // Type 'number' is not assignable to type 'string'.
    source: number;
}

interface WebPage {
    source: number;
}

type Component = Image & WebPage;

// @ts-expect-error
const myComponent: Component = { source: 'hello!' }; // ERROR! Type 'string' is not assignable to type 'never'.