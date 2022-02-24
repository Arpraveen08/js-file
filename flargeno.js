function largeno(n1, n2, n3) {
    if (n1 > n2 && n1 > n3)
        return n1 + 'is greater';
    else if (n2 > n1 && n2 > n3)
        return n2 + 'is greater';
    else
        return n3 + 'is greater';

}
console.log(largeno(4, 5, 6));



function addfor(n1, n2, n3) {
    if (n1 + n2 == n3)
        return true;
    else if (n2 + n1 == n3)

        return true;
    else
        return false;
}
console.log(addfor(4,5,6))

