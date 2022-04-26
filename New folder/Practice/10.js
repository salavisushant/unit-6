function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function oppQuick(arr,left,right) {
    var mid = arr[Math.floor((right + left) / 2)], 
    i = left, 
    j = right; 

     while (i <= j) {
        while (arr[i] > mid) {
            i++;
        }
        while (arr[j] < mid) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j); 
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(arr, left, right) {
    if (arr.length > 1) {
        i = oppQuick( arr,left, right) 
        
        if (left <i - 1) {
            quickSort(arr, left, i-1) 
        }
        if (i < right) {
            quickSort(arr,i,right)  
        }
    }
    return arr.join(' ');
}

function runProgram(input) {
    input = input.trim().split('\n');
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var left = 0;
    var right = n - 1;
    
   console.log(quickSort(arr, left, right));
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