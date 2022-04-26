var out = ""
function searchNum(arr, l, r) {
    var count = 0;
    for (var i = l; i <= r; i++) {
        console.log(arr[i]);
        if (i == arr[i]) {
            count++;
        }
    }
    out += count + " ";
}

function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var test = +input[2];
    var line = 3;
   
    for (var i = 0; i < test; i++){
        var [l,r] = input[line++].trim().split(" ").map(Number);
        searchNum(arr, l, r)
    }
   console.log(out);
   
}

if (process.env.USERNAME === "salav") {
runProgram(`5
10 1 10 3 4
4
1 10
2 9
3 4
2 2
`);
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