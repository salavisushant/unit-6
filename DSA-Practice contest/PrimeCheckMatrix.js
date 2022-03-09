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

var N = 3;
var M = 3;

var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let count = 0;
for (var i = 0; i < N; i++) {
    for (var j = 0; j < M; j++) {
        if (isPrime(arr[i][j])) {
            count++
        }
    }
}
console.log(count);