let array = []; 
let bool = true; 
let number;
let somma = 0;
let i=0;

do {
    number = Number(prompt("inserisci elemento"));
    array[i] = number;
    i++;

    answer = prompt("inserire ancora? (y/n)");

    if(answer=="n") {
        bool = false;
    }
}
while (bool)


for (let i=0; i < array.length; i++) {
    if(i%2==1) {
        somma = somma + array[i];
    }
}

alert(somma);