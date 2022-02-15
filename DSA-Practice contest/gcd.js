function gcd(a, b) {
    a = Math.abs(a)
    b = Math.abs(b)
    while (a != b) {
        if (a > b) {
            a -= b
        } else {
            b -= a
        }
    }
    return a
}

function greatestCommon(num) {
    ans=num[0]
    for (var i = 1; i <= num.length; i++) {
        if (num[i] % i == 0) {
            ans = gcd(ans, num[i])
        }
    }
    return ans;
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++){
        var num = input[line++].trim().split(" ").map(Number);
        console.log(greatestCommon(num));
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`2
6 9
2 25`);
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