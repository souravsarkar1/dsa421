function findSubsequences(ans, str, low, high) {
    if (low <= high + 1 && ans !== "") console.log(ans);
    for (let i = low; i <= high; i++) {
      findSubsequences(ans + str[i], str, i + 1, high);
    }
  }

  findSubsequences("","sourav",0,"sourav".length);