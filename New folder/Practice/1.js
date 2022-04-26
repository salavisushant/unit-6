function removDup(n, arr) {
    var details = {};

    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];

        if (details[num] !== undefined) {
            details[num] = 1;
        } else {
            prev = details[num];
            details[num] = prev + 1;
        }
    }
    var res = " "
    for (key in details) {
        res+=key+" ";
    }
    console.log(res);
}

function runProgram(input) {
    input = input.trim().split('\n');
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++) {
        var n = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        removDup(n,arr)
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`2
3
1 1 2
4
1 1 3 3`);
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