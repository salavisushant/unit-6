var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [1, 2, 3, 4],
    [5, 6, 7, 8]
]

var N = 4;


 var ans = [];
    
for(var i =0;i<N;i++){
    var arr = [];
    for( var j =N-1;j>=0;j--){
        arr.push(matrix[j][i])
    }
    ans.push(arr.join(" "))
}
console.log(ans.join("\n"))
