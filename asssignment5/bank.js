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
        console.log("Amount deposited!! Updated Balance:"+this.balance);
    }
    withdrawal(amount){
        if (amount>this.balance){
            console.log("Insufficient funds");
        } else if ( amount % 100 == 0 || amount % 500 == 0 || amount%200 == 0 || amount % 2000 == 0 ){
            this.balance=this.balance-amount;
            console.log("Withdrawal successful. Available balance is:",+this.balance);
        }
        else {
            console.log("Invalid amount");
        }
    }
    transfer(amount, targetAccountNo){
        if(this.balance-amount>=1000){
            this.balance-=amount;
            const targetacc= accounts.find(acc=>acc.accno===targetAccountNo);
            if(!targetacc){
                throw new Error("Invalid target account number");
            }
            targetacc.balance+=amount;
            console.log("Amount transfered successfully");
            console.log("Updated balance of current account is : "+this.balance);
            console.log("Updated receiver account balance is : "+targetacc.balance)
        }else{
            throw new Error("Balance less then 1000");
        }
    }
}
function createAccount(accountNumber,name, initialAmount){
    if(accountNumber.length === 10 && accountNumber.startsWith("IN") && initialAmount >= 1000){
        var account = new BankAccount(accountNumber,name,initialAmount);
        accounts.push(account);
        console.log(account);
        console.log("Account created successfully!!!");
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
accounts[1].withdrawal(600);
accounts[0].deposit(3000);
accounts[1].transfer(1000,"IN12345678")
function display(accounts){
    console.log("-----------------DISPLAY-----------------")
    console.log("Registered Accounts are as follows:")
    console.log(accounts);
}
display(accounts);
