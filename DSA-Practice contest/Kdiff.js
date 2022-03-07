function diffOfK(n, k, arr) {
    var i = 0;
    var j = 0;

    while (i < n && j < n) {
        if (i != j && (arr[i] - arr[j] == k || arr[j] - arr[i] == k)) {
            return "Yes"
        } else if (arr[i] - arr[j] < k) {
            j++;
        } else {
            i++;
        } 
    }
    return "No"
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++){
        var [n, k] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(diffOfK(n,k,arr));
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`2
5 3
1 2 3 4 5
5 8
1 2 3 4 5 `);
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