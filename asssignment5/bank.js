var accounts = [];
class BankAccount{
    constructor(acc,nme,bal){
        if(acc.length === 10 && acc.startsWith("IN")){
            this.accno = acc;
        } else {
            throw new Error("Invalid account number");
        }
        this.name = nme;
        if(bal >= 1000){
            this.balance = bal;
        }else {
            throw new Error("Invalid Balance");
        }
    }
    deposit(amount){
        this.balance += amount;
    }
    
}
function createAccount(accountNumber,name, initialAmount){
    if(accountNumber.length === 10 && accountNumber.startsWith("IN") && initialAmount >= 1000){
        var account = new BankAccount(accountNumber,name,initialAmount);
        accounts.push(account);
    }else {
        throw new Error("Invalid account number or balance");
    }
}
// var acc1 = new BankAccount("IN12345678","Safi",2000);
// var acc2 = new BankAccount("IN12345679","Omer",5000);
createAccount("IN12345678","Safi",2000);
createAccount("IN12345679","Omer",5000);
// accounts.push(acc1);
// accounts.push(acc2);
console.log(accounts);
