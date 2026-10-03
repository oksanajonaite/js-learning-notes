let user = {
    name: "John",
    ip: "192.168.10.255",
    greet() {
        console.log("hello");
    }
}

// console.log(user.name);

let prop = "name";
console.log(user[prop]);

let user2 = {
    ...user,
    ip: "000.00.00.000"
}

console.log(user2);
