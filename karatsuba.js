function karatsuba(num1,num2) {


    if(num1 < 10 || num2 < 10) {
        return num1*num2
    }

    var m  = half_ceil(degree(Math.max(num1, num2)));
    var x  = decompose(num1,m);
    var x1 = x[0], x0 = x[1];
    var y  = decompose(num2,m);
    var y1 = y[0], y0 = y[1];

    var z2 = karatsuba(x1,y1);
    var z0 = karatsuba(x0,y0);
    var z1 = karatsuba(x1+x0,y1+y0) - z2 -z0;

    return z2 * Math.pow(10,2*m) + z1 * Math.pow(10,m) + z0

    function degree(num) {
        return (num + '').length
    }

    function decompose(num,m) {
        var pow_m = Math.pow(10,m);
        return [Math.floor(num / pow_m), num % pow_m ]
    }

    function half_ceil(num) {
        return Math.floor(num / 2) + (num & 1)
    }


}
