function getMin() {
    let temp = arguments[0];
    for (let i = 0; i <= arguments.length; i++) {
        if (temp > arguments[i]) {
            temp = arguments[i];
        }
    }
    return temp;
}

getMin(3, 0, -3);