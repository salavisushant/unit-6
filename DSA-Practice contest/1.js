
var str = "aaabbbbcccdddee"

var details = {};

for (var i = 0; i < str.length; i++){
    if (details[str[i]] === undefined) {
        details[str[i]] = 1;
    } else {
        var prev = details[str[i]];
        details[str[i]] = prev + 1;
    }

}
var out = ""
for (key in details) {
    out+=key+details[key];
}

console.log(out);


