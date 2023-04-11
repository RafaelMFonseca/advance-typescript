// Enums are a feature added to JavaScript by TypeScript which
// allows for describing a value which could be one of a set
// of possible named constants. 

// NOTE: is not possible to create generic enums
// @ts-expect-error
enum GenericEnum<T> { // ERROR! Cannot find name 'T'.
    // @ts-expect-error
    FirstEnumValue
}