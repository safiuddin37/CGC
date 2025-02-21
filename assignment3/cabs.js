var distance =27;
function fare (distance){
    var first5= 10*5;
    var next10 = 10*8;
    if(distance<=5){
        return distance*10;
    } else if (distance<=15){
        return first5+(distance-5)*8;
    } else{
        return first5+ next10+ (distance-15)*5;
    }
}
console.log("Total fare is:",fare(distance));
    