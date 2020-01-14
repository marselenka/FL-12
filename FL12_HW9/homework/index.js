function convert() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            arr.push(+arguments[i]);
        } else {
            arr.push(arguments[i] + '');
        }
    }
    return arr;
}

convert('1', 2, 3, '4'); // [1, '2', '3', 4]

const executeforEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
};

executeforEach([1, 2, 3], function (el) {
    console.log(el * 2)
}); // logs 2 4 6

const mapArray = (arr, func) => {
    let newArray = [];
    executeforEach(arr, function (el) {
        newArray.push(func(parseInt(el)));
    });
    return newArray;
};

mapArray([2, '5', 8], function (el) {
    return el + 3
}); // returns [5, 8, 11]

const filterArray = (arr, func) => {
    let newArray = [];
    executeforEach(arr, function (el) {
        if (func(el)) {
            newArray.push(el);
        }
    });
    return newArray;
};

filterArray([2, 5, 8], function (el) {
    return el % 2 === 0
}); // returns [2, 8]

const flipOver = (str) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr = str[i] + newStr;
    }
    return newStr;
};

flipOver('hey world'); // 'dlrow yeh'

const makeListFromRange = (num) => {
    let arr = [];
    for (let i = num[0]; i < num[1] + 1; i++) {
        arr.push(i);
    }
    return arr;
};

makeListFromRange([2, 7]); // [2, 3, 4, 5, 6, 7]

const getArrayOfKeys = (arr, key) => {
    let newArr = [];
    executeforEach(arr, actor => newArr.push(actor[key]));
    return newArr;
};

const actors = [
    {name: 'tommy', age: 36},
    {name: 'lee', age: 28}
];

getArrayOfKeys(actors, 'name'); // [‘tommy’, ‘lee’]

const substitute = (arr) => {
    let newArr = mapArray(arr, function (el) {
        if (el < 30) {
            return '*';
        }
        return el;
    });

    return newArr;
};

substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']

const getPastDay = (date, count) => {
    return new Date(date.getTime() - count * 86400000).getDate();
};

const date = new Date(2019, 0, 2);

getPastDay(date, 1); // 1, (1 Jan 2019)
getPastDay(date, 2); // 31, (31 Dec 2018)
getPastDay(date, 365); // 2, (2 Jan 2018)

const formatDate = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${hours}:${minutes}`;
};

formatDate(new Date('6/15/2018 09:15:00')); // "2018/6/15 09:15"
formatDate(new Date()); // "2020/1/7 12:56" // gets current local time