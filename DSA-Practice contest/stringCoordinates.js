function stringCordin(n, str){
    var x = 0;
    var y = 0;
    for (var i = 0; i < n; i++) {
        if (str[i] == "u") {
            x++
        }
        if (str[i] == "d") {
            x--;
        }
        if (str[i] == "r") {
            y++
        } if (str[i] == "l") {
            y--
        }
    }
    return (x+" "+y);
}

function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
    var str = input[1].trim().split("");
    console.log(stringCordin(n, str));
   
}

if (process.env.USERNAME === "salav") {
runProgram(`5
ulrdr`);
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