function noOfways(input) {
    if (input == 0) {
        return 0;
    }
    if (input == 1) {
        return 1;
    }
    return noOfways(input-1)+noOfways(input-2)+noOfways(input-3);
}


function runProgram(input) {
  
    console.log(noOfways(input));
    
}

if (process.env.USERNAME === "salav") {
runProgram(input);
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