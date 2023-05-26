let opdCard = document.getElementById('bg-hover');
let warnaText = document.getElementById('warnaText');

opdCard.classList.add('color-dark-3');

// opdCard.addEventListener('mouseover', () =>{
//   opdCard.classList.remove('color-dark-3');
//   opdCard.classList.add('color-light-2');
// })
// opdCard.addEventListener('mouseout', () => {
//   opdCard.classList.remove('color-light-2');
//   opdCard.classList.add('color-dark-3');
// })

function onHover(){
  opdCard.classList.remove('color-dark-3');
  opdCard.classList.add('color-light-2');
}

function notHover(){
  opdCard.classList.remove('color-light-2');
  opdCard.classList.add('color-dark-3');
}


function showFilterMenu(){
    let filterDropdown = document.getElementById('filterDropdown')
    let filterButton = document.getElementById('filterButton')

    if (filterDropdown.style.display === 'none'){
        filterDropdown.style.display = 'flex'
        filterButton.style.color = 'white'
        filterButton.style.backgroundColor = '#1691ca'
        filterButton.style.boxShadow = '0px 0px 5px 1px #1691ca'
    }else{
        filterDropdown.style.display = 'none'
        filterButton.style.color = '#1691ca'
        filterButton.style.backgroundColor = 'white'
        filterButton.style.boxShadow = 'none'
    }
}

// Checkbox
function checkboxAll(myCheckbox){
    let checkboxAll = document.getElementById('checkboxALL');
    let checkboxItems = document.querySelectorAll(".isi-konten input[type='checkbox']");

    if (myCheckbox.checked === true){
        checkboxItems.forEach(function(checkbox) {
            checkbox.checked = true;
        });
    }
    else if (myCheckbox.checked === false){
        checkboxItems.forEach(function(checkbox) {
            checkbox.checked = false;
        });
    }
}
// Checkbox END


// Filter Option untuk PPID PELAKSANA
let filterCard = document.querySelectorAll('.opd-cards div.opd-card'); // data-filter atribute untuk membedakan item
let filterOptionPelaksana = document.querySelectorAll('ul.filter-dropdown-menu-1 a');// filter-option sebagai Pilihan Filter

for (let i = 0; i < filterOptionPelaksana.length; i++){
    filterOptionPelaksana[i].addEventListener('click', function() {
        for (let j = 0; j < filterOptionPelaksana.length; j++){
            filterOptionPelaksana[j].classList.remove('active');
        }
        this.classList.add('active');

        let optionFilter = this.getAttribute('filter-option');

        // let dataFilter = this.getAttribute('dataFilter')
        for (let k = 0; k < filterCard.length; k++){
            filterCard[k].style.display = 'none';

            if (filterCard[k].getAttribute('data-filter') == optionFilter || optionFilter == "all"){
                filterCard[k].style.display = 'flex';
            }
        }
    })
}
// Filter Option END

// Search Filter
function filterSearch(){
    let input = document.querySelector('.pencarian#search');
    let filterValue = input.values.toUpperCase();
    let itemKonten = document.querySelector('#itemKonten');
    let judulItems = document.querySelector('#judulItems');

    for (let i = 0; i < judulItems.length; i++){
        let judul = judulItems[i].getElementsByTagName('p')[0];

        if (judul.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            judulItems[i].style.display = "";
        }else {
            judulItems[i].style.display = 'none';
        }
    }
}
// Search Filter END

// List Item
let listItemIcon = document.querySelector('#list_item_icon');
listItemIcon.addEventListener('click', () =>{
    listItemIcon.style.color = '#1691ca';
})



