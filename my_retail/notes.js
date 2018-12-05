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


const isPerfect = num => {
    let sum;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    } if (sum === num) {
        console.log("perfection");

    }
    else {
        return "Oi Vey"
    }
}
console.log(isPerfect(6));
function perfectRange(start, end) {
    for (let numToCheck = start; numToCheck <= end; numToCheck++) {
        if (numToCheck === 0) {
            console.log('This is not a thing you can do');
            return;
        };
        let sum = 0;
        for (let i = 1; i <= numToCheck / 2; i++) {
            if (numToCheck % i === 0) {
                sum += i;
            }
        }
        if (sum === numToCheck) {
            console.log(numToCheck, 'It is a perfect number');

        }
        else {
            console.log('Pobody is Nerfect');
        };
    };
};

perfectRange(1, 500);