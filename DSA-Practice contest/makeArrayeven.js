function makeEvenArray(n, arr) {

    for (var i = 0; i < n; i++) {
        for (var j = i; j < arr.length; j++){
            total = arr[i]+arr[j];
        }
    }
    if (total % 2 == 0) {
        return "YES"
    }
    return "NO"
    
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++) {
        var n = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(makeEvenArray(n, arr) );
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`2
1
2
3
1 2 3`);
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