<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari form
    $nama = $_POST["nama"];
    $email = $_POST["email"];
    $alamat = $_POST["alamat"];
    $kota = $_POST["kota"];
    $kecamatan = $_POST["kecamatan"];
    $kelurahan = $_POST["kelurahan"];
    $rt_rw = $_POST["rt_rw"];
    $kode_pos = $_POST["kode_pos"];
    $kata_sandi = $_POST["kata_sandi"];
    $verifikasi_kata_sandi = $_POST["verifikasi_kata_sandi"];

    // Validasi data, Anda bisa menambahkan validasi sesuai kebutuhan

    // Simpan data ke dalam database (Anda perlu mengatur koneksi ke database terlebih dahulu)

    // Setelah data disimpan, Anda bisa melakukan redirect ke halaman lain
    header("Location: success.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Registrasi</title>
</head>
<body>
    <h2>Registrasi Pengguna</h2>
    <form action="" method="post">
        <!-- Form input lainnya ... -->
        <input type="submit" value="Daftar">
    </form>
    <p>Sudah punya akun? <a href="C:\xampp\htdocs\login.php">Masuk di sini</a></p>
</body>
</html>
