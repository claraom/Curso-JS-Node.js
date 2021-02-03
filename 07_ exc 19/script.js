randomMax = function(max) {
    if (max > 0)
        return Math.floor((Math.random() * max) + 1);
    if (max < 0)
        return Math.floor((Math.random() * max) + max + 1);
}

console.log(randomMax(300));
console.log(randomMax(-300));
//console.log(randomMax(0));