// constructor function


let details = {
    name: "sushant",
    city: "kolhapur"
}
details.name ="amar"
console.log(details);

function nameOfCity(name,city) {
    this.name = name,
    this.city = city
}
let Add = new nameOfCity("sushant", "kolhapur")

Add.name = "samar";

console.log(Add);

