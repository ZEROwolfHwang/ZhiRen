/*
var s = 'asjkdasd';
console.log([...s]);


let generator = function* () {
    yield 1;
    yield* [2, 3, 4];
    yield 5;
};

var iterator = generator();

console.log(iterator);


console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 1, done: false }



*/
/*

var str = new String("hi");

console.log([...str]); // ["h", "i"]

var a = [];
a[Symbol.iterator] = function() {
    return {
        next: function() {
            if (this._first) {
                this._first = false;
                return { value: "bye", done: false };
            } else {
                return { done: true };
            }
        },
        _first: true
    }
};

console.log('a+'+[...a]);
console.log(a);

str[Symbol.iterator] = function() {
    return {
        next: function() {
            if (this._first) {
                this._first = false;
                return { value: "bye", done: false };
            } else {
                return { done: true };
            }
        },
        _first: true
    };
};

console.log([...str]); // ["bye"]
console.log(str); // "hi"
*/


// let myIterable = {
//     [Symbol.iterator]: function* () {
//         yield 1;
//         yield 2;
//         yield 3;
//     }
// };
// console.log([...myIterable]); // [1, 2, 3]
//
// // 或者采用下面的简洁写法
//
// let obj = {
//     * [Symbol.iterator]() {
//         yield 'hello';
//         yield 'world';
//     }
// };
//
// console.log([...obj]);
// for (let x of obj) {
//     console.log(x);
// }
// // "hello"
// // "world"


/*

var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
for (var e of engines) {
    console.log(e);
}
// Gecko
// Trident
// Webkit

var es6 = new Map();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
for (var [name, value] of es6) {
    console.log(name + ": " + value);
}

for (var a of es6) {
    console.log(a);
}
*/
/*

let arr = [{a:'a'}, {b:'b'}, {c:'c'}];
for (let pair of arr.entries()) {
    console.log(pair);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
//
// for (let pair of arr.keys) {
//     console.log(pair);
// }
//
// for (let pair of arr.values) {
//     console.log(pair);
// }
console.log(arr.entries());
*/

//
// // 字符串
// let str = "hello";
//
// for (let s of str) {
//     console.log(s); // h e l l o
// }
//
// // DOM NodeList对象
// let paras = document.querySelectorAll("p");
//
// for (let p of paras) {
//     p.classList.add("Test");
// }
//
// // arguments对象
// function printArgs() {
//     for (let x of arguments) {
//         console.log(x);
//     }
// }
// printArgs('a', 'b');
// // 'a'
// // 'b'

/*let arrayLike = { length: 3, 0: 'a', 1: 'b' };

// // 报错
// for (let x of arrayLike) {
//     console.log(x);
// }

// 正确
for (let x of Array.from(arrayLike)) {
    console.log(x);
}*/



// for (let x of 'a\uD83D\uDC0A') {
//     console.log(x);
// }
// // 'a'
// // '\uD83D\uDC0A'


let es6 = {
    edition: 6,
    committee: "TC39",
    standard: "ECMA-262"
};

for (let e in es6) {
    console.log(e);
}
// edition
// committee
// standard

// for (let e of es6) {
//     console.log(e);
// }
// TypeError: es6[Symbol.iterator] is not a function


// for (var key of Object.keys(es6)) {
//     console.log(key + ': ' + es6[key]);
// }


/*
function* entries(obj) {
    for (let key of Object.keys(obj)) {
        yield [key, obj[key]];
    }
}

for (let [key, value] of entries(es6)) {
    console.log(key, '->', value);
}
*/

var numbers = [1,2,4,6,22,88,15555,666666,77777,222,155,77,33,8888888,88];
for (var n of numbers) {
    if (n > 1000)
        break;
    console.log(n);
}
