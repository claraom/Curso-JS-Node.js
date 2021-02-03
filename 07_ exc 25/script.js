regression = function(num) {
    console.log("------PARES------")
    while(num >= 0) {
        if(num % 2 == 0) {
            console.log(num);
        }
        num = num - 1;
    }
}

regression(10);
regression(5);