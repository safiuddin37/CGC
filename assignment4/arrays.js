// Task: 1
// var sample = "JavaScript is a powerful and popular programming language.";
// console.log(sample);
// // TOupper and tolower case
// var upper=sample.toUpperCase();
// console.log(upper);
// var lower=sample.toLowerCase();
// console.log(lower);
// // Index of and slice
// indx=sample.indexOf('popular');
// console.log(indx);
// extrct=sample.slice(16,24);
// console.log(extrct);
// // Replace and includes
// rplce=sample.replace("JavaScript","JS");
// console.log(rplce);
// console.log(sample.includes("language"));

// Task :2
// var smple=['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];
// console.log(smple);
// // Adding and removing elements
// smple.push('Pineapple');
// console.log(smple);
// smple.shift();
// console.log(smple);
// console.log();
// // Splice and index of
// smple.splice(1,0,"strawberry");
// console.log(smple);
// console.log(smple.indexOf('Mango'));
// smple.splice(3,1);
// console.log(smple);
// // Sort and reverse
// smple.sort();
// console.log(smple);
// smple.reverse();
// console.log(smple);

// Task : 3
//object constructor function
// function Person(name, age,gender){
//     this.name = name;
//     this.age = age;
//     this.gender=gender;
//     this.greet = function(){
//         console.log("hello,my name is " ,this.name);
//     }
// }
// var p1 = new Person("Safi",20,"Male");
// var p2 = new Person("ahmed",25,"male");
// var p3 = new Person("fatima", 30, "female");
// p3.greet();
// p1.greet();
// p2.greet();

// Task: 4
// // object and nested object
// var car ={
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2009,
//     features: ['Air Conditioning', 'Sunroof', 'Bluetooth'],
// }
// console.log(car);
// // Adding new features
// car.features.push('Navigation');
// // modifying year
// car.year = 2010;
// // deleting models
// delete car.model;
// console.log(car);

// Task: 5
// nested objects in array
// var students = [
//     {
//         name: "Safi",
//         age: 20,
//         grades : {
//             maths: 70,
//             science: 80,
//         }
//     },
//     {
//         name: "Omer",
//         age: 19,
//         grades : {
//             maths: 60,
//             science: 90,
//         }
//     }
// ]
// console.log(students);
// // Accessing nested objects
// console.log(students[1].grades.science);
// // updating nested objects
// students[0].grades.maths = 80;
// console.log(students[0].grades.maths);
// // Adding new element in object
// students[1].grades.english = 70;
// console.log(students[1].grades.english);
// console.log (students);


// Bonus task (is adult method)
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
// Methods inside class
    isadult(){
        // if(this.age>=18){
        //     console.log(this.name+" is adult");
        // }
        // else{
        //     console.log(this.name+" is not adult");
        // }
        return this.age>=18;
    }
}
var people=[
    new Person("Safi",20),
    new Person("Omer",15),
    new Person("farhan",25),
];
console.log(people);
let adult = people.filter(person => person.isadult());
console.log(adult);