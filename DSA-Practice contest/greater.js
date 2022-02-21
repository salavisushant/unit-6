function greaterElem(n, arr) {
    var stack  = [];
    
    for (var i = 0; i < n; i++){
        
        while (stack.length==0 && arr[stack.top()] <= arr[i]) {
            stack.pop();
        }

        if (stack.length==0) {
            greaterElem[i] = stack.top();
        } else {
            greaterElem[i] = -1;
        }
        stack.push(arr[i]);
    }
    return stack;
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++){
        var n = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        console.log(greaterElem(n, arr));
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`1
4
1 3 2 4`);
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