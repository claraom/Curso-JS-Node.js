function stringLength(msg) {
    if(typeof(msg) == "string") {
        if(msg.length <= 10) {
            console.log("Texto dentro do limite");
        } else {
            console.log("Texto muito grande");
        }
    } else {
        console.log("nao e um texto");
    }
} 

stringLength("Clara");
stringLength("Clara de Oliveira Marques");
stringLength("ClaraMarques");
stringLength(5);