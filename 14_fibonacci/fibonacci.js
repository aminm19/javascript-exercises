const fibonacci = function(n) {
    let ret = 1;
    let prev = 0;
    n = parseInt(n);
    if(n < 0) return "OOPS";
    if(n === 0) return 0;
    if(n === 1) return 1;
    for(let i = 2; i<=n; i++){
        let temp = ret;
        ret = prev + temp;
        prev = temp;
    }
    return ret;
};

// Do not edit below this line
module.exports = fibonacci;
