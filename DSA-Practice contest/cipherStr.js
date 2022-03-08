function cipherStr(n, str) {
    var low = 0;
    var high = n - 1;
    var ans =""
    while (low <= high) {
        let count = 1;
        while (str[low] == str[low + 1]) {
            count++;
            low++;
        }
        low++;
        ans += str[low-1]+""+count;
    }
    return ans
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++) {
        var n = +input[line++];
        var str = input[line++].trim().split("");
        console.log(cipherStr(n, str) );
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`2
5
aabcc
5
aazaa`);
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