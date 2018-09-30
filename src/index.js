module.exports = function getZerosCount(number) {
    let check = true;
    let exponent = 0;
    
    while (check) {
        check = false;
        if (number/Math.pow(5, exponent) > 1) {
            check = true;
            exponent++;
        }
    }   
    
    let zerosCount = 0;
    for (let i = 1; i < exponent; i++){
        zerosCount = zerosCount + Math.trunc( number/Math.pow(5, i) );
    }
    
    return zerosCount;
}
