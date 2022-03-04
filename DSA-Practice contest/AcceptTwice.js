function acceptTwice(arr, n) {
    var details = {};
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        if (details[num] === undefined) {
            details[num] = 1
        } else {
            prev = details[num];
            details[num] = prev + 1;
        }
    }
    for (key in details) {
        if (details[key] == 1) {
            console.log(key);
        }
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++){
        var n = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        acceptTwice(arr, n)
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`2
1
5
5
1 2 1 3 2`);
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