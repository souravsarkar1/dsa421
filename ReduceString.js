function reduceString(str) {
    let n = str.length;
    let st = [];
    for(let i =0;i<n;i++){
        if(st.length===0){
            st.push(str[i]);
        }
        else{
            if(st[st.length-1]===str[i]) st.pop();
            else st.push(str[i]);
        }
    }
    if(st.length===0) console.log('Empty String');
    else console.log(st.join(''));
}

reduceString("aaabccddd");