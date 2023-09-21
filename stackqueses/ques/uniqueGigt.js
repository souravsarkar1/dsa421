function masaiUniqueGift(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = 0;
    }
    let que = [];
    let ans = [];
    for (let i = 0; i < str.length; i++) {
        obj[str[i]]++;
        que.push(str[i]);
        while (que.length !== 0) {
            if (obj[que[0]] === 1) break;
            que.shift();
        }
        ans[i] = que.length === 0 ? "#" : que[0];
    }
    console.log(ans.join(""));
}

masaiUniqueGift(`abadbc`);
