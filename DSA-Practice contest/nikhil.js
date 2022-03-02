function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var test = +input[2]
    var line = 1;

    for (var i = 3; i < test+3 ; i++){
        var arr = input[i].trim().split(" ").map(Number);
        console.log(q,k,arr,n);
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`4
1 2 3 4
3
0 5
1 3
0 3`);
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