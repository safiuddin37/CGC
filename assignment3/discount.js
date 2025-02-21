var total=800;
var discount=0;
function offer(total,discount){
    if (total<500){
        discount=0;
        return total-=discount;
    } else if(total<=1000){
        discount=((total/100)*10);
        return total-=discount;
    } else if (total<=2000){
        discount=((total/100)*20);
        return total-=discount;
    }
    else {
        discount=((total/100)*30);
        return total-=discount;
    }
    
}
console.log("Total bill after discount is:", offer(total,discount));