var hMenu = document.querySelector('#img-hamburger');
var dDown = document.querySelector('#drop-down')

// memunculkan menu dari kiri
dDown.addEventListener('click', (e) => {
    dDown.classList.remove('menu-dropdown-muncul')
})
hMenu.addEventListener('click', function (e) {
    dDown.classList.toggle('menu-dropdown-muncul')
})

window.addEventListener('scroll', (e) => {
    muncul()
})


// memunculkan elemen secara smooth
let elements = document.querySelectorAll('.elemen')

function muncul() {
    for (let i = 0; i < elements.length; i++) {
        let tinggiLayar = window.innerHeight;

        let jarakAtasElemen = elements[i].getBoundingClientRect().top;
        let ukuranScroll = 150;

        if (jarakAtasElemen < tinggiLayar - ukuranScroll) {
            elements[i].classList.add('tampil');
        } else {
            elements[i].classList.remove('tampil');
        }
    }
}



// Untuk Tulisan Berganti
const bungkusText = ["Front End Developer", "Graphic Designer", "Desktop Application"];
let c = 0;

function buatTulisan(element, tulisan, kecepatan, callback) {
    let i = 0;

    function type() {
        if (i < tulisan.length) {
            element.textContent += tulisan.charAt(i);
            i++;
            setTimeout(type, kecepatan);
        } else {
            setTimeout(callback, 1000); // delay 1 detik 
        }
    }

    type();
}

function changeText() {
    const elemenGanti = document.getElementById("gantiText");
    elemenGanti.textContent = "";

    buatTulisan(elemenGanti, bungkusText[c], 100, function () {
        c = (c + 1) % bungkusText.length;
        setTimeout(changeText, 2000); // fungsi mengganti tulisan nih
    });
}

changeText();


// Untuk bagian kontak kalo diklik
function bukaModal() {
    const modal = document.getElementById("kotak-kontak");
    modal.style.display = "block";
}

function tutup() {
    const modal = document.getElementById("kotak-kontak");
    modal.style.display = "none";
}