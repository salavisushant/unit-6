function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var sum = 0;
    var sum1 = 0;
    var out = [];

    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            sum+= arr[i]*2;
        } else {
            sum1+= arr[i]
        }
    }
    console.log(sum,sum1);
    
   
}

if (process.env.USERNAME === "salav") {
runProgram(`8
1 2 3 4 5 6 7 8`);
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