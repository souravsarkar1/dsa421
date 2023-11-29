function masaiPalindromicSubString(str){
    let n = str.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    console.log(dp);
}
masaiPalindromicSubString("masaischool");