function upperBound(n, k, arr) {
    var low = 0;
    var high = n - 1;
    var ans = -1;

    while (low < high) {
        mid = low + (Math.floor((high - low) / 2));

        if (arr[mid] <= k) {
            low = mid + 1;
        } else {
            ans = mid;
            high = mid - 1;
        }
    }
    return ans;
}


function runProgram(input) {
    input = input.trim().split("\n");
    var [n, k] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    arr.sort((a,b) => a-b)
    console.log(upperBound(n, k, arr));
}

if (process.env.USERNAME === "salav") {
runProgram(`10 3
0 2 4 4 5 5 7 7 9 10`);
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