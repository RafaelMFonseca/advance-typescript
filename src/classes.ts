// A generic class has a similar shape to a generic interface
class GenericArray<T> {
    arr: T[];
    add(item: T): void {
        this.arr.push(item);
    }
}

// class has two sides to its type: the static side and the instance side.
// when working with classes, static members can not use the class’s type parameter.
class GenericClassSample<T> {
    // @ts-expect-error
    static add: (x: T, y: T) => T; // Error: Static members cannot reference class type parameters.
}