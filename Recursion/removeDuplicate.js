function removeDuplicate(str) {
    //console.log(str);
    if (str.length === 0) return "Empty String";
    if (str.length === 1) return str;
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            if (str[i] !== str[i + 1])
                res += str[i];
        }
        if (i === str.length - 1) {
            if (str[i] !== str[i - 1])
                res = str[i];
        }
        else {
            if (str[i] !== str[i - 1] && str[i] !== str[i + 1])
                res += str[i];
        }
    }
    return res.length === str.length ? res : removeDuplicate(res);
}

let ans = removeDuplicate("azxxxzy");

console.log(ans);