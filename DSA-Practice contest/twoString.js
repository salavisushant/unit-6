function runProgram(input) {
    input = input.trim().split("\n");
    var str1 = input[0].trim().split("");
    var str2 = input[1].trim().split("");
    str1.sort();
    str2.sort();
    
    flag=true;
    for (var i = 0; i < str1.length; i++) {
        if ((str1[i] != str2[i])||str1.length!=str2.length) {
            flag=false;
        }
    }

    if (flag == false) {
        console.log("No");
    } else {
        console.log("Yes");
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`amit
mtiaw`);
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