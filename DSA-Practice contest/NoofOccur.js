function upperBound(n, k, arr) {
    var low = 1;
    var high = arr.length;
    var ans = -1;

    while (low <= high) {
        mid = low + (Math.floor((high - low) / 2));
        if (arr[mid] <= k) {
            low = mid + 1;
        } else {
            ans = mid
            high = mid - 1;
        }
    }
    return ans;
}

function lowerBound(n, k, arr) {
    var low = 0;
    var high = arr.length-1;
    var ans = -1;

     while (low <= high) {
        mid = low + (Math.floor((high - low) / 2));
         if (arr[mid] == k) {
             ans = mid;
             high = mid - 1;
         } else if (arr[mid] > k) {
             high = mid - 1;
         } else {
             low = mid + 1;
       }
    }
    return ans;
}

function runProgram(input) {
    input = input.trim().split("\n");
    var [n, k] = input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    console.log(upperBound(n, k, arr)-lowerBound(n, k, arr));

}

if (process.env.USERNAME === "salav") {
runProgram(`6 3
2 3 3 3 6 9`);
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