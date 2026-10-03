"use strict";

function keysAndValues(obj) {
    return [Object.keys(obj), Object.values(obj)];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// [ [ 'a', 'b', 'c' ], [ 1, 2, 3 ] ]

console.log(keysAndValues({ key: true }));
// [ [ 'key' ], [ true ] ]