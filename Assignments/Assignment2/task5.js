
let num=[2,8,4,6,7];

//sum of the array elements

let sum=0;
for(let i=0;i<num.length;i++){
sum +=num[i];
}
console.log(sum);

//largest element in the array

let large=num[0];
for(let i=1;i<num.length;i++){
    if(num[i]>large){
        large=num[i];
    }
}

//if you want ,you can use Math.max()
// let max=Math.max(...num);
// console.log(max);
console.log("the larges element is : "+large);




