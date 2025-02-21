availableBalance=740;
withdrawal=500;
function checkBalance(availableBalance,withdrawal){
if (withdrawal>availableBalance){
    console.log("Insufficient funds");
} else if (withdrawal%100!=0||withdrawal%500!=0 || withdrawal%200!=0 || withdrawal%2000!=0){
    console.log("Invalid amount");
}
else {
    availableBalance=availableBalance-withdrawal;
    console.log("Withdrawal successful. Available balance is:",availableBalance);
}
}
checkBalance(availableBalance,withdrawal);