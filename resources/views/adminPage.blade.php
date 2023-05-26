<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./css/adminPage.css">
    <link rel="stylesheet" href="./css/adminCards.css">

    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.3.0/dist/chart.umd.min.js"></script>
    
    <title>Halaman Admin</title>
    
</head>
<body>
<section class="gridHome">
    <div class="sidebar">
        <div class="adminPP">
            <img src="./images/thorfin256.png" alt="">
            <p>Administrator</p>
        </div>

        <ul class="ulSidebarMenu">
            <a href="#" class="dashboardBtn">Dashboard</a>
        </ul>
        <ul class="ulSidebarMenu">
            <a href="#">Akun</a>
        </ul>
        <ul class="ulSidebarMenu">
            <a href="#">Pengguna</a>
        </ul>
        <ul class="ulSidebarMenu">
            <a href="#">Pengaduan</a>
        </ul>
        <ul class="ulSidebarMenu">
            <a href="#">Pengaturan</a>
        </ul>
    </div>
    <div class="konten">
        <div class="konten1">
            <div class="laporanMasuk">
                @include('partials.laporanMasuk')
            </div>
            <div class="totalPengaduan">
                
            </div>
        </div>
        <div class="konten2">    
            <div class="laporanMingguan">
                <div class="hari"></div>
                <div class="hari"></div>
                <div class="hari"></div>
                <div class="hari"></div>
                <div class="hari"></div>
                <div class="hari"></div>
                <div class="hari"></div>
            </div>
        </div>
    </div>
</section>
      
</body>

    <script>
        <?php include("./js/laporanMasuk.js");?>
    </script>
    
</html>