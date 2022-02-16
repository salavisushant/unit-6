function minStack(stack) {
    var min = stack[0];

    for (var i = 0; i < stack.length; i++) {
        if (+stack[i] < min) {
            min = +stack[i];
        }
    }
    return +min;
}

function stack(name, num) {
    var stack = [];

    for (var i = 0; i < name.length; i++) {
        if (name[i] === "push") {
            stack.push(num[i])
        }
        if (name[i] === "pop") {
            stack.pop()
        }
        if (name[i] === "getMin") {
            console.log(minStack(stack))
        }
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    var num = [];
    var name = []

    for (var i = 0; i < test; i++){
        var arr = input[line++].trim().split(" ");
        name.push(arr[0]);
        num.push(arr[1]);
    }
    stack(name, num)


   
}

if (process.env.USERNAME === "salav") {
runProgram(`8
push 5
push 3
push 1
getMin
pop
getMin
pop
getMin`);
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