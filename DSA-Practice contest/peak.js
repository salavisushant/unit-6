function peakPoint(n, arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        
    }
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] == max) {
            return i;
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
        console.log(peakPoint(n, arr));
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`2
3
10 20 11
5
1 3 6 5 4`);
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