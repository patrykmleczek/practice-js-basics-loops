const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

if (randomNumber >= 5) {
    for (let i = 5; i < randomNumber; i++) {
        console.log(i);
    }

} else {
    console.log('wylosowana liczba jest zbyt mala, aby uzyc petli')
}