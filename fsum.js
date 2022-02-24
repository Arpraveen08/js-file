function sumOf(n) {
    sum = 0;
    while (n > 0) {
        r = n % 10;
        sum = sum + r;
        n = parseInt(n/10);
    }
}

console.log(sumOf(123))