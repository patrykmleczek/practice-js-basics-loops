const x = 10;
let iteration = 0;
let randomNumber = -1;



while (randomNumber !== x) {
    randomNumber = Math.round(Math.random() * 20);
    iteration++;
    console.log("iteracja #", iteration);
}
console.log("sumaryczna liczba potrzebnych iteracji:", iteration);
