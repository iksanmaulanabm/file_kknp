<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./css/adminPage.css">
    <link rel="stylesheet" href="./css/adminCards.css">

    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.3.0/dist/chart.umd.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
    
    <title>Halaman Admin</title>
    
</head>
<body>
<section class="gridHome">
    <div class="sidebar">
        <div class="adminPP">
            <img src="./images/thorfin256.png" alt="">
            <p>Administrator</p>
        </div>

        <hr style="height:1px; width:200px; background-color:#191919; margin:0px auto; margin-top:5px;">

        <ul class="ulSidebarMenu">
            <a href="#" class="dashboardBtn active">
                <i class="bi bi-trello"></i>Dashboard
            </a>
        </ul>
        <ul class="ulSidebarMenu">
            <a href="#" class="active">
                <i class="bi bi-person-badge"></i>Akun
            </a>
        </ul>
        <ul class="ulSidebarMenu">
            <a href="#" class="active">
                <i class="bi bi-people-fill"></i>Pengguna
            </a>
        </ul>
        <ul class="ulSidebarMenu">
            <a href="#" class="active">
                <i class="bi bi-clipboard-pulse"></i>Pengaduan</a>
        </ul>
        <ul class="ulSidebarMenu">
            <a href="#" class="active">
                <i class="bi bi-sliders"></i>Pengaturan
            </a>
        </ul>
        <ul class="icon-keluar">
            <a href="#">
                <i class="bi bi-box-arrow-in-left"></i>Keluar
            </a>
        </ul>
    </div>
    <div class="konten">
        <div class="konten1">
            <div class="laporanMasuk">
                @include('partials.card1')
            </div>
            <div class="totalPengaduan">
                @include('partials.card2')
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