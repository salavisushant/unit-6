function runProgram(input) {
    input = input.trim().split("\n");
    var [n, k] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    arr.sort((a,b) =>a-b)
    var out = [];
    var sum = 0;
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
        if (sum < k) {
            out.push(arr[i])
        }
    }
    var sum2 = 0;
    for (var i = 0; i < out.length; i++){
        sum2 +=out[i];
    }
    var sum3 = 0;
    for (var j = 0; j < arr.length; j++){
        if (sum2 + arr[j] == k) {
            count++;
        }
    }
    console.log(out.length+count);
    
 
    
}

if (process.env.USERNAME === "salav") {
runProgram(`3 11
1 5 7`);
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