function runProgram(input) {
    arr = input.trim().split("");
    
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        if ((stack[stack.length-1] === "{" && arr[i] === "}") || (stack[stack.length-1] === "[" && arr[i] === "]") || (stack[stack.length-1] === "[one" || "[two" ||"[three"||"[four]"||"[five]"||"[six" ||"[seven]"||"[eight]"||"[nine"||"[ten" && arr[i] === "]") ||(stack[stack.length-1] === "(" && arr[i] === ")")) {
            stack.pop();
        } else {
            stack.push(arr[i]);
        }
    }
    if (stack.length === 0) {
        console.log("balanced");
    } else {
        console.log("not balanced");;
    }

   
}

if (process.env.USERNAME === "salav") {
runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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