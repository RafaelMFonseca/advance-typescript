// We can refer to specific strings and numbers in type positions.

// Both var and let allow for changing what is held inside the variable, and const does not.
// This is reflected in how TypeScript creates types for literals.

// 'a' can only represent 1 possible string, it
// has a literal type representation.
const a = '1'; // type = '1'

// can represent any possible string, that
// is how TypeScript describes it in the type system
let b = '2'; // type = string
var c = '3';// type = string

let alignment: 'left' | 'center' | 'right' = 'center';

// @ts-expect-error
alignment = 'bottom';

// The type boolean itself is actually just an alias for the union true | false.
type MyBoolean = true | false;

function changeTime(isNight: MyBoolean) { }
function handleRequest(url: string, method: 'GET' | 'POST') { }

// When you initialize a variable with an object, TypeScript assumes
// that the properties of that object might change values later. 

// Another way of saying this is that obj.counter must have the type
// number, not 0, because types are used to determine both reading and writing behavior.
const req = { url: 'https://example.com', method: 'GET' };  // method is 'string', not 'GET' | 'POST'
const req2 = { url: 'https://example.com', method: 'GET' as 'GET' };
const req3 = { url: 'https://example.com', method: 'GET' } as const;

// @ts-expect-error
req3.url = 'https://example.com'; // Cannot assign to 'url' because it is a read-only property.

//@ts-expect-error
handleRequest(req.url, req.method); // ERROR!
handleRequest(req.url, req2.method); // OK!
handleRequest(req.url, req3.method); // OK!

type Method = 'GET' | 'POST';
const reqMethodConst = 'GET';
let reqMethodlet = 'POST';

function testMethod(method: Method) { }

testMethod(reqMethodConst);

//@ts-expect-error
testMethod(reqMethodlet); // ERROR! string <> Method

