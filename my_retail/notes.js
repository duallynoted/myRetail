let quantity = (function (num) {
    return function () {
        num += 1;
        return num;
    }
}(0));

console.log(quantity());
console.log(quantity());
console.log(quantity());
console.log(quantity());
console.log(quantity());
