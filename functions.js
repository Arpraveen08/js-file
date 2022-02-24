function countDigit(num) {
    let count = 0;

    while (num != 0) {
        num = parseInt(num / 10);
        count++;
    }
    return count;
}


function makeTwice(n1,n2,n3){
    let count = countDigit(makeTwice);
    switch(count){
        case 1:
            return  n1*10+n1;
            case 2:
                return n2*100+n2;
        

    }
}
console.log(makeTwice(12,10,20));
