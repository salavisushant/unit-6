function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    
    var details = {};
    var count  =0
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];

        if (details[num] === undefined) {
            details[num] = 1;
        } else {
            prev = details[num];
            details[num] = prev + 1;
        }
    }

    for (key in details) {
        if (details[key] > (n / 3)) {
             console.log(key)
        }
    }
   
}

if (process.env.USERNAME === "salav") {
runProgram(`3
3 2 3`);
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