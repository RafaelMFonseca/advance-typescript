type StringArray = Array<string>;

let names: StringArray = [ "Mike", "John" ];

interface Bag<T> {
    add: (key: string, obj: T) => void;
    get: (key: string) => T;
}