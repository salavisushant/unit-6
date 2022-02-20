function repeatMissing(arr, n) {
    var details = {};
    for (var i = 0; i < n; i++) {
        var num = arr[i];
        if (details[num] === undefined) {
            details[num] = 1
        } else {
            var prev = details[num];
            details[num] = prev + 1;
        }
    }
    var out = [];

    for (var j = 1; j <= n; j++) {
        if (arr[i] != i) {
            out.push(i);
            break;
        }
    }

    for (key in details) {
        if (details[key] >= 2) {
            out.push(key);
        }
    }
    return out.join(" ")
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++) {
        var n = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(repeatMissing(arr, n));
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`3
5
1 2 3 3 4
2
1 1
3
1 2 2`);
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