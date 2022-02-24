let n = 121;
let s = 0;
let c = n;

while (n > 0) {
    r = n % 10;
    s = (s * 10) + r;
    n = n / 10;
}
if (c == s)
    console.log('it is palindrome');
else
    console.log('it is not palindrome');
