
let input = `50 
3
60 100 120 
10 20 30`

input = input.split('\n');

let capacity = +input[0];
let n = +input[1];
let value = input[2].split(' ').map(Number);
let weights = input[3].split(' ').map(Number);

(function fractionKnapSack(n, capacity, value, weights) {
   // console.log(n, "\n", capacity, '\n', value, '\n', weights);
   let ratios= [];
   for(let i =0;i<n;i++){
    ratios.push({index : i , ratio : value[i]/weights[i]});
   }
   //console.log(ratios);
   let ans = 0;
   for(let i =0;i<n;i++){
    let index = ratios[i].index;
    if(weights[index]<=capacity){
        ans+=value[index];
        capacity-=weights[index];
    }
    else{
        ans+=capacity*ratios[i].ratio;
        break;
    }
   }
console.log(ans);
})(n, capacity, value, weights);