// extending interface
//
interface hasFormatter {
  format(): string;
}

interface Bill extends hasFormatter {
  id: string | number;
  amount: number;
  server: string;
}

const user = {
  id: 1,
  format(): string {
    return `this user has an id of ${this.id}`;
  },
};

const bill = {
  id: 2,
  amount: 50,
  server: "mario",
  format(): string {
    return `Bill with id ${this.id} has $ ${this.amount} to pay`;
  },
};

function printFormatter(val: hasFormatter): void {
  console.log(val.format());
}
function printBill(bill: Bill): void {
  console.log("server: ", bill.server);
  console.log(bill.format);
}

printFormatter(user);
printFormatter(bill);
//printBill(user);
printBill(bill);
