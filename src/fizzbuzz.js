function fizzBuzz (n) {
    // TODO: Compléter fizzbuzz()
    if (n%3==0){
        if (n%5==0) {
            return "FizzBuzz";
        }else{
            return "Fizz";
        }
    }
    if (n%5==0){
        if (n%3==0) {
            return "FizzBuzz";
        }else{
            return "Buzz";
        }
    }

    return 'null'
    
}

module.exports = fizzBuzz
