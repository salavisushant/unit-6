function flowerSum(n, k, arr) {
    if (k == 0) {
        return true;
    }

    let out = 0;
    let temp = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] || arr[i - 1] === 1) {
            continue;
        } else if (arr[i + 1] === 1) {
            i = i + 2;
            continue;
        }
        out += 1;
        arr[i++] = 1;

        if (out === k) {
            temp = true;
            break;
        }
    }
    return temp;
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++){
        var [n, k] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number);
        if (flowerSum(n, k, arr) === true) {
          console.log("Yes");
        } else {
            console.log("No");
      }
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