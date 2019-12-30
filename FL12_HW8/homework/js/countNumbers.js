const makeNumber = (str) => {
    return str.split('').filter(item => !isNaN(item)).join('');
};

const countNumbers = (str) => {
    let arr = makeNumber(str).split('');
    let obj = {};
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== Object.keys(obj)[Object.keys(obj).length - 1]) {
            res = 0;
        }
        obj[arr[i]] = ++res;
    }
    return obj;
};
countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');