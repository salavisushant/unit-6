function fib (n,k){
    if(k === 0){
        return 0;
    }
    if(k==1){
        return 1;
    }
    
     return fib(k*n)
    
}

function runProgram(input) {
    var [n, k] = input.trim().split(" ").map(Number);
    console.log(fib(n,k));


   
}

if (process.env.USERNAME === "salav") {
runProgram(`10 2`);
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0) ;
});
}