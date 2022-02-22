function flowerSum(n, k, arr) {
  
    for (var i = 0; i < n; i++){
        if (arr[i] === 1) {
            continue;
        }
        if (i == 0 && arr[i + 1] == 0) {
            arr[i] = 1;
            k--
        } else if (i == n - 1 && arr[i - 1] == 0) {
            arr[i] = 1;
            k--;
        } else if (arr[i - 1] == 0 && arr[i + 1] == 0) {
            arr[i] = 1;
            k--;
        }

        if (k == 0) {
            return "Yes"
        }
    }
   return "No";
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++) {
        var [n, k] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(flowerSum(n, k, arr))
    }
   
}

if (process.env.USERNAME === "salav") {
runProgram(`1
5 1
1 0 0 0 1`);
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