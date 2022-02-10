function setBits(n) {
    var count = 0;
    var n = n.toString(2).split("")
    n = n.join("")
    n = n.split("0")
    var min = 0;
    for (var i = 0; i < n.length; i++) {
        if (n[i].length>min) {
            min=n[i].length
        }
    }
    console.log(min)
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++){
        var n = +input[line++];
       setBits(n)
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`4
1
0
4294967295
13`);
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