/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// 1. ada 2 variabel : variael lokal dan variabel global
/// 2. variabel lokal adalah biasanya diidentifikasi dengan adanya {}, semua yang ada di dalam lokal scope, hanya bisa diakses oleh lokal scope itu sendiri
///    variabel global adalah semua yang ada di dalam global scope, maka dapat dipakai atau diakses oleh  lokal scope didalamnya,tetapi global scope tidak bisa mengakses sesuatu yang ada di dalam lokal scope
/// 3. 

/// variabel global 
var diamond = "ulina theresa";

function laptop() {
    /// variabel lokal
    var diamond = "cules";
    console.log(diamond);
}

/// show the result
console.log(diamond);
laptop();
console.log(diamond);

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - yang akan terjadi di console.log adalah Mariah
/// - karena me-return variabel name.split dengan array [0],
///   jadi yang di console.log ada 2 "Mariah" dan "Carey" jadi Mariah saja yang keluar karena Mariah menjadi index ke [0].
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));