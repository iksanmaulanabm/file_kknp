
<div class="card2">
    <div class="chart-card2">
        <canvas id="barChart"></canvas>
    </div>
</div>

<script>
    //Menampilkan bar chart pada card2
const data2 = {
  labels: ['Level 1', 'Level 2', 'Level 3'],
  datasets: [{
    label: 'Total Pengaduan',
    data: [15, 25, 5, 10],
    backgroundColor: 'rgba(54, 162, 235, 0.6)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }]
};

// Konfigurasi
const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

// Membuat grafik batang
const ctx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctx, {
  type: 'bar',
  data: data2,
  options: options
});
</script>