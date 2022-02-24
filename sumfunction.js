function sum(num){
    let sum = 0;
    while (num > 0){
        r=num % 10;
        sum=sum+r;
    num = parseInt(num/10);
    }
}

console.log(sum(123));

