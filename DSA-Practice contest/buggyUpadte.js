function buggyUpadte(curr, newer) {
    if (curr[0] > newer[0]) {
        return "False";
    } else if (curr[0] < newer[0]) {
        return "True";
    } else {
        if (curr[1] < newer[1]) {
            return "True";
        } else if (curr[1] > newer[1]) {
            return "False";
        } else {
            if (curr[2] < newer[2]) {
                return "True";
            } else if (curr[2] > newer[2]) {
                return "False";
            }
        }
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++) {
        var curr = input[line++].trim().split(".").map(Number);
        var newer = input[line++].trim().split(".").map(Number);
        console.log(buggyUpadte(curr, newer) );
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`3
2.0.1
1.9.8
12.0.1
12.10.0
1.1.10
1.1.12`);
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