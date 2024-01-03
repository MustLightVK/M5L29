function recurs(num) {
    if (num > 0) {
        console.log(num);
        recurs(num - 1);
    } 
}

recurs(7);