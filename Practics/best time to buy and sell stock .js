function buyAndsellStock(n,arr=[]){
    let pro = -Infinity;
    let mini = arr[0];
    for(let i =1;i<n;i++){
        let diff = arr[i]-mini;
        pro = Math.max(diff,pro);
        mini = Math.min(mini,arr[i]);
    }
}