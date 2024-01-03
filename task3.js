function recursFactorial(num) {
    if (num == 0 || num == 1) {
        return 1;
    } else {
        return num * recursFactorial(num-1);
    }
}

let result = recursFactorial(5);
console.log(result);

