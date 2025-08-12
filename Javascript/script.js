function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log("¿5 es primo?", esPrimo(5));
console.log("¿8 es primo?", esPrimo(8));
