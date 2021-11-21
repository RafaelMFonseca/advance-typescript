

function doSomething(input: string | number) {
    if (typeof input === 'string') {
        return `string is ${input}`;
    }

    // Doesn't need else, here input is number.
    return `number is ${input.toFixed()}`;
}