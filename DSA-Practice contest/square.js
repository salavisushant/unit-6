function squreSort(n, arr) {
    let sqr = arr.map((x) => x * x);
    sqr.sort((a, b) => a - b);
    arr.sort((a, b) =>a-b)
    var sqrRoot = sqr.map((x) => Math.sqrt(x));

    var array = []
    for (var i = 0; i < n; i++) {
        if (arr[i] == sqrRoot[i]) {
            array.push(sqrRoot[i]);
        } else {
            array.push(sqrRoot[i]);
        }
    }
    var out =[]
    for (var j = 0; j < array.length; j++) {
        if (array[i] < 0) {
            
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
        squreSort(n, arr)
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`1
5
-2 3 1 -4 6
`);
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