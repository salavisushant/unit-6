function runProgram(input) {
    input = input.trim().split("\n");
    var [n, k] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);

    var count = 0;

    for (var i = 0; i < arr.length; i++){
        for (var j = i+1; j < arr.length; j++){
            if ((arr[i] + arr[j]) < k) {
                count++;
            }
        }
    }
    console.log(count);
}

if (process.env.USERNAME === "salav") {
runProgram(`4 20
3 10 4 4 `);
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