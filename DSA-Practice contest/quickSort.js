function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);

    var mid = arr[Math.floor((i + j) / 2)];
    var i = 0; 
    var j = arr.length

    while (i <= j) {
        while (arr[i] < mid) {
            i++;
        }
        while (arr[j] > mid) {
            j--;
        }

        if (i <= j) {
            swap(arr, i, j);
            j++;
            j--;
        }
    }
    console.log(i);
}

if (process.env.USERNAME === "salav") {
runProgram(`5
2 3 1 4 5`);
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