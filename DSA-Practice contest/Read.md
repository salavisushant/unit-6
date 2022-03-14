
## this is for call method <--------------

var person1 = { fname: "sushant", lname: "salavi" }

function greeTing(a) {
    console.log(`${a} ${this.fname} ${this.lname}`);
}

greeTing.call(person1,"Hello")


## This is for apply method <--------------
the apply method is same as call method but its takes arguments differently
in apply method we have to take arguments in array fromat

var person1 = { fname: 'Sushant', lname: 'Salavi' }

function greeTing(a) {
    console.log(`${a} ${this.fname} ${this.lname}`);
}
greeTing.apply(person1,["Hello"])


## This is for Bind method <--------------------

we can bind perticuler function in bind method and use it later

var person = { fname: 'Sushant', lname: 'Salavi' }

function greeTing() {
     console.log(`hello ${this.fname} ${this.lname}`);
}

var someValue = greeTing.bind(person);
someValue()


## Constructor function <------------------

new keyword creates new blank or plain javascript object
new keyword is mandatory in constructor function
pass a function as arguments

function Person(a, b, c) {
    this.name = a,
    this.age = b,
    this.gender = c
}

var student = new Person("Sushant", 25, "male");
console.log(student);

## Prototype and inheritance <-------------------


constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

## creating objects
const person1 = new Person();
const person2 = new Person();

adding property to constructor function
Person.prototype.gender = 'male';


prototype value of Person
console.log(Person.prototype);


## Promise in javascript <-------------------

var promise = new Promise((resolve, reject)=> {
    var a = 3;
    if (a === 4) {
        resolve("Its correct ans")
    } else {
       reject("Its wrong ans")
    }
})

promise.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err);
})


## Difference between state and props;
1. state and props both are plain JavaScript object
2. both are handling information which is very important to rendering.
3. props are get passed into component and state are manage the componenets.

Context API---
    Its share state with component easy and cleaner way
    
Prop drilling:--->
    Prop drilling refers to the process of sending props from a higher-level component to a lower-level component.
