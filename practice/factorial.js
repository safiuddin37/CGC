// calculate the factorial of a given number
function fact(){
    return function(n){
        if (n==1||n===0)
            return 1;
        else {
            let res=1;
            for(let i = 2 ;i<=n;i++){
                res*=i;
            }
            return res;
        }
    }
    
}
res=fact();
console.log(res(5));