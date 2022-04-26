// var arr = [1,2,3,4,5,51];

// var sum = 0;
// function digitSum(value) {
//     while (value) {
//         sum += value % 10;
//         value = Math.floor(value / 10);
//     }
//     return sum;
// }

// var out = []

// for (var i = 0; i < arr.length; i++){
//     out.push(digitSum(arr[i]))
// }
// console.log(out[out.length - 1]);

// var sum = 0;
// var ans = ""
// for (var i = 0; i < arr.length; i++){
//     sum += arr[i];
//     ans += sum + " ";
// }

// console.log( ans);



// var arr = [1, 2, 3, 4, 5, 6];

// function diaCircle(n){
//     return n%2==1
// };

// console.log(arr.filter(diaCircle));

// function Person(a, b, c) {
//     this.name = a,
//     this.age = b,
//     this.gender = c
// }

// var student = new Person("sushant", "salavi", 26);
// var student1 = new Person("vishal", "salavi", 29);
// console.log(student);
// console.log(student1);

// var cars = ["BMW", "Audi", "Nexa"];

// var x = {}

// for (x in cars) {
//     console.log(x+" "+ cars[x]);
// }

// setTimeout(() => {
//     console.log("this is the first message")
// }, 5000);



function isDouble(n) {
    return n*2
}


var arr = [2, 3, 5, 7, 8];


for (var i = 0; i < arr.length; i++){
    console.log(isDouble(arr[i]));
}