
//Menampilkan Tanggal pada card1
document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var tanggalElemen = document.getElementById("tglToday");
    
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0');
    var year = String(today.getFullYear()).slice(-2);
    
    var formattedDate = day + ' / ' + month + ' / ' + year;
    
    tanggalElemen.textContent = formattedDate;
  });
  