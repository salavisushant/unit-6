function twoSorted(n, arr1, arr2) {
    var count = 0;
    var left = 0;
    var right = n - 1;

    while (left < n && right >= 0) {
        if (arr1[left] < arr2[right]) {
            left++;
        } else if (arr1[left] > arr2[right]) {
            right--
        } else {
            count++;
            left++;
            right--;
        }
    }
    return count;
}
function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++){
        var n = +input[line++];
        var arr1 = input[line++].trim().split(" ").map(Number);
        var arr2 = input[line++].trim().split(" ").map(Number);
        console.log(twoSorted(n, arr1, arr2));
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`1
6
1 2 2 3 4 5
4 4 3 2 1 1`);
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