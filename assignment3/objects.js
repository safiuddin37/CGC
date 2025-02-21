// var mobile2 = mobile1;
// mobile2.price = 799;
// console.log(mobile1.price);
// var contact1= {
    //     name : {
        //         firstName : "John",
        //         middleName : "roy",
        //         lastName : "Doe"
        //     },
        //     value : [{
            //         number : 9642589419,
            //         isprimary : true,
//         type : "personal"
//     },
//     {
//         number : 9876543210,
//         isprimary : false,
//         type : "office"
//     }],
//     callto : function (){
    //         var callprimary = this.value.find(function(val){
        //             return val.isprimary===true;
        //         });
        //         if(callprimary){
            //             console.log(callprimary.number+" Calling...");
            //         }
            //         else{
//             console.log("No primary number found");
//         }
//     },
//     isactive : true,
//     }
// contact1.callto();
// console.log(contact1.isactive);
// contact1.isactive = false;
// console.log(contact1.isactive);
// delete contact1.isactive;
// console.log(contact1.isactive);
// contact1.email = "mohdsafiuddin99@gmail.com";
// console.log(contact1);
var mobile1 = {
    brand: "Apple",
    model: "iPhone 11",
    price: 699,
    color: "Black",
    memory: "128GB"
}
var m3 = {};
for (var key in mobile1) {
    m3[key] = mobile1[key];
}
console.log(m3);