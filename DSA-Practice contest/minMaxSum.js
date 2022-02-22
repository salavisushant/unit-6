function maxMinSum(arr, n, m) {
    var out = [];

      for(var i =0;i<n;i++){
        min = i;
        for(var j =i+1;j<n;j++){
          if(arr[min]>arr[j]){
            min=j;
          }
          
        }
        if (min != i) {
          temp = arr[i];
          arr[i]=arr[min];
          arr[min]=temp
          
        }
        
        out.push(arr[i]);  
    }
    var sum1 = 0;
    var sum2 = 0;
    var N = Math.floor(n - m)
    for (var k = 0; k < N/2; k++){
        sum1+=arr[k]
    }

    for (var l = N/2; l < (n - m); l++){
        sum2 += arr[l]
    }
    console.log(sum2-sum1);

    
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;

    for (var i = 0; i < test; i++){
        var [n, m] = input[line++].trim().split(" ").map(Number);
        var arr = input[line++].trim().split(" ").map(Number);
        (maxMinSum(arr,n,m));
    }
}

if (process.env.USERNAME === "salav") {
runProgram(`1
5 1
1 2 3 4 5`);
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