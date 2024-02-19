"use strict";
const user = {
    id: 1,
    format() {
        return `this user has an id of ${this.id}`;
    },
};
const bill = {
    id: 2,
    amount: 50,
    server: "mario",
    format() {
        return `Bill with id ${this.id} has $ ${this.amount} to pay`;
    },
};
function printFormatter(val) {
    console.log(val.format());
}
function printBill(bill) {
    console.log("server: ", bill.server);
    console.log(bill.format);
}
printFormatter(user);
printFormatter(bill);
//printBill(user);
printBill(bill);
