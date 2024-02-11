function getAverage(a, b, c) {
    var total = a + b;
    var count = 2;
    if (typeof c !== 'undefined') {
        total += c;
        count++;
    }
    var result = total / count;
    return 'result : ' + result;
}
console.log(getAverage(10, 20, 30));
console.log(getAverage(10, 20));
