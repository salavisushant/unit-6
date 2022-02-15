function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++){
        var arr1 = input[line++].trim().split(" ").map(Number);
        var arr2 = input[line++].trim().split(" ").map(Number);

        console.log(arr1,arr2);
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`2
2 4
2 1
1 5
3`);
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