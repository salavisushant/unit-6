function isPrime(n){
    let count = 0;
    for(var i =1;i<=n;i++){
        if(n % i == 0){
            count++
        }
    }
    if(count==2){
        return true
    }
    return false
}


function runProgram(input) {
    input = input.trim().split("\n");
    var [n, m] = input[0].trim().split(" ").map(Number);
    var line = 1;
    var matrix = [];

    for (var i = 0; i < n; i++){
        matrix.push(input[line++].trim().split(" ").map(Number));
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (isPrime(matrix[i][j])) {
                count++
            }
        }
    }
    console.log(count);

}

if (process.env.USERNAME === "salav") {
runProgram(`3 3
1 2 3 
4 5 6
7 8 9`);
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