var units=260;
var s1=0;
var fifty=50*2.5;
var hundred=50*4;
var twohundred=100*6;
function bill(units){
    if(units<=50){
            s1=units*2.5;
        } else if (units<=100){
    s1=fifty+(units-50)*4;
    } else if (units<=200){
    s1=fifty+hundred+(units-100)*6;
    } else {
        s1=fifty+hundred+twohundred+(units-200)*8;
    }
    return s1;
}
console.log("Total bill is:",bill(units));

// Approach : 2
// var result=0;
// function fifty(units){
//     result=units*2.5;
//     return result;
// }
// function hundred(units){
//     result=50*2.5+(units-50)*4;
//     return result;
// }
// function twohundred(units){
//     result=50*2.5+50*4+units-100*6;
//     return result;
// }
// function above(units){
//     result = 50*2.5 + 50*4 + 100*6 + (units-200)*8;
//     return result;
// }
// if(units<=50){
//     console.log("Total bill is:", fifty(units));
// } else if (units<=100){
//     console.log("Total bill is:", hundred(units));
// } else if (units<=200){
//     console.log("Total bill is:",twohundred(units));
// }
// else {
//     console.log("Total bill is:",above(units));
// }
