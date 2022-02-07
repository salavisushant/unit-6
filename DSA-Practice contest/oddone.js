function runProgram(input) {
    var [l, m, r] = input.trim().split(" ").map(Number);
    
    if (l == r) {
        console.log(m);
    } else if (m==r) {
        console.log(l);
    } else if (l==m) {
        console.log(r);
    }
    else {
        console.log(0);
    }
   
    
    
}

if (process.env.USERNAME === "salav") {
runProgram(`2 5 2`);
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