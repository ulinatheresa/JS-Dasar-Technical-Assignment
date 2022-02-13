/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// - Type Error = telah terjadi kesalahan type
/// - Reference Error = ini terjadi ketika kita menggunakan (referensi) variabel yang belum di deklarasikan.
/// - Range Error = ini terjadi jika kita menggunakan angka yang berada di luar rentang nilai ilegal.
/// - Syntax Error = kesalahan dalam tata bahasa atau dalam struktur code nya.


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// - akan terjadi error
/// - kategori syntax error
/// - karena setelah kita membuat variabel, baru dapat di consule


var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
/// var salaryWithVar = 6;
/// const salaryWithConst = 7;


console.log(salaryWithVar);
console.log(salaryWithConst);