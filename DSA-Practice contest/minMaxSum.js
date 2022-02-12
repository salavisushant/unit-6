function maxMinSum(arr, n, m) {
    
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++){
        var [n, m] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(maxMinSum(arr,n,m));
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`1
5 1
1 2 3 4 5`);
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