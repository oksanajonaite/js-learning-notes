
let prices = [10, 20, 15, 100];

let calcTotal = (...args) => {
    return args.reduce((total, current) => total + current);

}

console.log(calcTotal(40, 80, 100, 10));
