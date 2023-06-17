function stringFrequency(n, str) {
    let onj = {};
    for (let i = 0; i < n; i++){
        if(onj[str[i]]===undefined){
            onj[str[i]]=1;
        }
        else{
            onj[str[i]]++;
        }
    }
    return onj;
}

let a = stringFrequency("abcdefgljsdklfjsa;fjsdl;fjsd".length,'abcdefgljsdklfjsa;fjsdl;fjsd')
console.log(a);