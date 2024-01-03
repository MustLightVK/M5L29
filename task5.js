function addition(n) {
    return function (x) {
        return n + x;
    };
}

const addNum = addition(5); 
const result = addNum(15); 
console.log(result); 
