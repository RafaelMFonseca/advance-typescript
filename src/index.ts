// The goal of TypeScript is to be a static typechecker for JavaScript programs.
// In other words, a tool that runs before your code runs (static) and ensures
// that the types of the program are correct (typechecked).
import './best_practices';
import './classes';
import './declare';
import './enum';
import './function_type';
import './functions';
import './generics';
import './interface_vs_type';
import './interfaces';
import './literal_types';
import './narrowing';
import './never';
import './object';
import './objects';
import './parameter_destructuring';
import './primitives_types';
import './rest';
import './strict_null_checks';
import './structural_type_system';
import './this';
import './type_aliases';
import './type_assertions';
import './unions';
import './unknown';
import './void';

// TypeScript analyzes runtime values using static types.

// Accessing a property that doesn’t exist on an object returns the value undefined:

// The process of moving from a newer or 'higher' version of ECMAScript down to an
// older or 'lower' one is sometimes called downleveling.

// Type annotations never change the runtime behavior of your program.
// TypeScript is a structurally typed type system.

/** tsconfig.json */
// noImplicitAny = flag any implicit any as an error
// strictNullChecks = TypeScript will tell us when we're reading from properties they’re potentially undefined