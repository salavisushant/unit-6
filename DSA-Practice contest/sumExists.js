function sumExists(n, arr, k) {
    for (var i = 0; i < arr.length; i++){
        for (var j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] == k || arr[i] + arr[j]+arr[j+1]==k) {
                return "yes"
            } 
        }
    }
    return "no"
}


function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var k = +input[2];
    console.log(sumExists(n, arr, k));
}

if (process.env.USERNAME === "salav") {
runProgram(`9
1 2 3 4 5 6 7 8 9
5`);
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