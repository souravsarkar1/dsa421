(function fractionKnapSack(values = [], weights = [], n = 0, capacity = 0) {
    let ratios = [];
    for (let i = 0; i < n; i++) {
        ratios.push({ index: i, ratio: values[i] / weights[i] });
    }
    ratios.sort((a, b) => a.ratio - b.ratio);
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let index = ratios[i].index;
        if(weights[index]<=capacity){
            ans+=values[index];
            capacity-=weights[index];
        }
        else{
           ans+= capacity*ratios[i].ratio;
           break;
        }
    }
    console.log(ans);
})()