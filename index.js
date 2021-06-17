let language = 'JavaScript';

//a) Use string concatenation and two .slice() methods to print 'JS' from 'JavaScript'.
let firstChange = language.slice(-10,-9)
console.log(firstChange);
let secondChange = language.slice(-6,-5)
console.log(secondChange);
console.log(firstChange+secondChange)



//b) Without using .slice(), use method chaining to accomplish the same thing.
let methodC = language.replace("a","S").slice(0,2)
console.log(methodC)

//c) Use bracket notation and a template literal to print "The abbreviation for 'JavaScript' is 'JS'."
let change = language[0]+language[4]
console.log(change);


//d) Just for fun, try chaining 3 or more methods together, and then print the result.
