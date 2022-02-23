function palindrome(n, str) {
    var details = {};

    for (var i = 0; i < n; i++){
        var num = str[i];
        if (details[num] === undefined) {
            details[num] = 1
        } else {
            var prev = details[num];
            details[num] = prev + 1;
        }
    }

    var count = 0;

    for (key in details) {
        if (details[key] % 2 == 1) {
            count++;
        }
    }
 
    if (count >= 2) {
        console.log("Not Possible!");
    } else {
        console.log("Possible!");
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++){
        var n = +input[line++];
        var str = input[line++].trim().split("");
        palindrome(n,str)
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`2
6
aabbcc
5
aabcd`);
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