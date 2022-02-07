function highFrequency(arr, n) {
    var details = {};
    var maxcount = 1;
    var max = arr[0]
    for (var i = 0; i < n; i++) {
        var num = arr[i];

        if (details[num] === undefined) {
            details[num] = 1;
        }else{
            var prev = details[num];
            details[num] = prev + 1;
        }
        if (details[num] > maxcount) {
            max = num;
            maxcount = details[num]
        }
   
    }
    return max; 
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++) {
        var n = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(highFrequency(arr, n) );
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`2
6
1 4 4 4 5 3
11
1 2 3 4 5 4 3 2 1 3 4`);
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