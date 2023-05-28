
{{-- <canvas id="myChart"></canvas> --}}

<div class="card1">
    <div class="titleItem1">
        <h2><i class="bi bi-clipboard-data-fill"></i>Pengaduan Terbaru</h2>
        <p id="tglToday"></p>
    </div>
    <div class="card1-item2">
        <div class="jmlMasalah">
            <canvas id="donat"></canvas>
        </div>
        <div class="ketJmlMasalah">
            <li id="selesai">Selesai</li>
            <li id="belum">Belum Selesai</li>
            <p>Untuk setiap laporan yang masuk harap segera untuk dikonfirmasi</p>
            <button>Periksa</button>
        </div>
    </div>
</div>

<script>
    // Data
    const data = {
      labels: ['Selesai', 'Belum Selesai'],
      datasets: [{
        data: [75, 25],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1
      }]
    };
    
    // Konfigurasi
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        },
        datalabels: {
          color: '#ffffff',
          font: {
            size: 16
          },
          formatter: (value) => {
            return value + '%';
          },
          anchor: 'center',
          align: 'center'
        }
      }
    };
    
    // Membuat grafik donat
    const ctx = document.getElementById('donat').getContext('2d');
    const donat = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options
    });
</script>
