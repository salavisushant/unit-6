function sumLessThanK(n, arr, k) {
    var out = [];
    flag = false;
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            var total = arr[i] + arr[j];
            if (k > total) {
                flag =true;
                out.push(total);
            }
        }
    }
    out.sort((a, b) => b - a);
    if (flag == true) {
        console.log(out[0]);
    } else {
        console.log(-1);
    }
    
}


function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++){
        var n = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        var k = +input[line++];
        sumLessThanK(n, arr, k)
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`2
5
1 2 3 4 5
7
3
30 10 20
15`);
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