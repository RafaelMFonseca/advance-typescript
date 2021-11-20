
const cities = ['Yokohama','Guangzhou','Brasília'];
const city = cities.find(c => c.length > 3);

// @ts-expect-error
console.log(city.charAt(1)); // Error with strictNullChecks = true

// ! after any expression = says to typescript that the value isn’t null or undefined:
console.log(city!.charAt(1));