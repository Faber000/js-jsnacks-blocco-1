let nomi = ["Fabio", "Andrea", "Mario", "Luca", "Giovanni"];
let cognomi = ["Moro", "Amoretti", "Di Salvo", "De Santis", "Auletta"];

let invitato;
let invitati = [];
for (let i=0; i<5; i++) {
    invitato = " "+nomi[Math.floor(Math.random() * 5)] +" "+ cognomi[Math.floor(Math.random() * 5)];
    invitati.push(invitato);
}
alert(invitati);


