let array = [];
let number;

for (let i=0; i < 6; i++) {
    number = prompt("inserisci il numero");
    if(number%2==1) {
        array.push(number);
    }
}
alert(array);