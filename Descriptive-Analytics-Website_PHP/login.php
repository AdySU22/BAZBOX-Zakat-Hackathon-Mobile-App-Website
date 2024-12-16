<?php
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    // Ambil data dari form
    $nama = $_POST["nama"];
    $id = $_POST["id"];
    $kata_sandi = $_POST["kata_sandi"];

    // Verifikasi data masuk (Anda perlu mengatur logika verifikasi)

    // Contoh logika sederhana
    if ($id === "user123" && $kata_sandi === "password123") {
        // Jika verifikasi berhasil, arahkan ke halaman lain
        header("Location: dashboard.php");
        exit();
    } else {
        $pesan_error = "ID atau kata sandi salah.";
    }
}

?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h2>Silakan Masuk</h2> 
    <?php if (isset($pesan_error)) { ?>
        <p style="color: red;"><?php echo $pesan_error; ?></p>
    <?php } ?>
    <form action="" method="post">
        <label>Nama:</label>
        <input type="text" name="nama" required><br><br>
        <label>ID:</label>
        <input type="text" name="id" required><br><br>
        <label>Kata Sandi:</label>
        <input type="password" name="kata_sandi" required><br><br>
        <input type="submit" value="Masuk">
    </form>
</body>
</html>
