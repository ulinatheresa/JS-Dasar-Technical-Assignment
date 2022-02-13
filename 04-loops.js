/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
let i,counter,j;
function prima(n) {
    for (i = 1; i <= n; i++) {
        counter=0;
        for ( j = 1; j <= i; j++) {
            if (i%j==0) {
                counter++;
            }
        }
        if (counter==2) {
            console.log(i+'');
        }
    }
}
prima(100);


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime = 0;
let n = 1;
while (primeCounter < 50) {
    n++;
    var eliminasi = false;
    for (let j = 2; j <= n; j++) {
        if (n%j==0 && n!==j) {
            eliminasi = true;
        }
    }
    if (eliminasi == false) {
        primeCounter++;
        fiftiethPrime = n;
    }
}
console.log(fiftiethPrime);


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;
let r = 0;

do {
    r++;
    if(r%2==1){
    oddCounter++;
    if(oddCounter==50){
    fiftiethOdd = r;
    console.log(fiftiethOdd);
    }
}
}
while (oddCounter<50)