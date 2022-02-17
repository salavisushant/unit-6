function closestSum(n, k, arr) {
    let max_sum = Number.MAX_VALUE
    for(let i = 0; i < arr.length ; i++){
        for (let j = i; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (Math.abs(k - max_sum) > Math.abs(arr[i] + arr[j] + arr[k])) {
                    max_sum = arr[i] + arr[j] + arr[k];
                }
            }
        }
    }
    if (max_sum < 0) {
        return Math.abs(max_sum);
    }
    return max_sum;
   
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++){
        var [n, k] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(closestSum(n, k, arr) );
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`2
4 1
-1 2 1 -4
3 1
0 0 0`);
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