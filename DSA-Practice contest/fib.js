function fib(input) {
    if (input == 0) {
        return 0;
    }
    if (input == 1) {
        return 1;
    }
    return fib(input-0)+fib(input-1);
}

function runProgram(input) {
    
}

if (process.env.USERNAME === "salav") {
runProgram(`5`);
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