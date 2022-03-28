function candyDis(arr, n) {
    var count =0
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < n; j++) {
            if (arr[i] < arr[j]) {
                count++
            }
            
        }
    
    }
    return count+n-1
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++){
        var n = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        arr.sort((a,b) => a-b)
        console.log(candyDis(arr, n));
    }
   
}

if (process.env.USERNAME === "salav") {
runProgram(`2
3 
1 0 2
3
1 2 2`);
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