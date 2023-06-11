function minimumPlatformsRequired(n,a,d){
    a.sort((a,b)=>a-b);
    d.sort((a,b)=>a-b);
    let cou =0,ans=0,i=0,j=0;
    while(i<n){
        if(a[i]<=d[j]){
            cou++;
            ans=Math.max(ans,cou);
            i++;
        }
        else if(a[i]>d[j]){
            cou--;
            j++;
        }
    }
    console.log(ans);
}
function remove(a){
    let ans ='';
    for(let i =0;i<a.length;i++){
        if(a[i]!==':'){
           // continue;
           ans+=a[i];
        }
    }
    return ans;
}
let input = `6
9:00 9:40 9:50 11:00 15:00 18:00
9:10 12:00 11:20 11:30 19:00 20:00`

input = input.trim().split('\n');
  let n = +input[0];
  let a = input[1].trim().split(' ');
  let ap=[];
  for(let i =0;i<n;i++){
    ap.push(+remove(a[i])) ;
  }
  let dp=[];
  let d = input[2].trim().split(' ');
  for(let i =0;i<n;i++){
    dp.push(+remove(d[i])) ;
  }
  minimumPlatformsRequired(n,ap,dp);