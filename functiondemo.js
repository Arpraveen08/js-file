function countDigit(num) {
    let count = 0;

    while (num != 0) {
        num = parseInt(num / 10);
        count++;
    }
    return count;
}
//console.log(countDigit(12)) 

function makeTwice(num){
    let count = countDigit(num);
    switch(count){
        case 1:
            return num*10+num;1
            case 2:
                return num*100+num;
    }
}
console.log(makeTwice(12));
console.log(makeTwice(5,5));