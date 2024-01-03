function recurs(x, y) {
    if (x === y) {
        console.log(x);
    } else if (x > y) {
        console.log(x);
        recurs(x - 1, y);
    } else {
        console.log(x);
        recurs(x + 1, y);
    }
}

recurs(20, 10);
recurs(30, 50);
