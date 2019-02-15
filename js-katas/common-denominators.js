function convertFrac(lst){
    
    let ln = lst.map(a => a[1])
    
    let gcd = (a, b) => a ? gcd(b % a, a) : b;
    let lcm = (a, b) => a * b / gcd(a, b);
    
    return lst.map(a => "(" + (ln.reduce(lcm)/a[1])*a[0] + "," + ln.reduce(lcm) + ")").join('')
}


var lst = [ [5, 1], [4, 1], [3, 1] ]
console.log(convertFrac(lst), "(6,12)(4,12)(3,12)")


// let a = lst.map(a => a[1]).sort().slice(-1)

// console.log(a);

