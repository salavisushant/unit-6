// var arr = [1, 99, 54, 2, 7, 0, 8, 4, 52, 12];

// var res = []
// for (var i = 0; i < arr.length; i++){
//     for (var j = i + 1; j < arr.length; j++){
//         if (arr[i] > arr[j]) {
//             temp = arr[j];
//             arr[j] = arr[i];
//             arr[i] = temp;
//         }
//     }
//     res.push(arr[i]);
// }
// console.log(res);

var str = "naman";

var count = 0;
for (var i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - i - 1]) {
      count++;
  }
}

if (count === str.length) {
    console.log("Yes");
} else {
    console.log("No");
}
