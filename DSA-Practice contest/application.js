function realTimeApp(str1, str2,count) {
    if (str1.length > str2.length) {
      n= str1.length
    } else {
        n= str2.length
    }
  
    var out =[]
    for (var i = 0; i < n; i++){
        if ((str1[i] != str2[i])||(str1[str1.length-i] == str2[str2.length-i-1])){
            out.push(str1[i])
       }
    }
    console.log(out)
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++) {
        var str1 = input[line++].trim().split("");
        var str2 = input[line++].trim().split("");
        var count = 0;
     realTimeApp(str1, str2,count)
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`3
abcde
abde
abde
abcde
abcde
abxde
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