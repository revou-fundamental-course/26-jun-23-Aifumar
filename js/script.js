
const sliderContainer = document.querySelector('.slider-container');
const sliderImages = document.querySelectorAll('.slider-image');

let slideIndex = 0;
let direction = 1;
const slideInterval = setInterval(nextSlide, 1500);

function nextSlide() {
  slideIndex += direction;
  updateSlider();
}

function updateSlider() {
  sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
  sliderContainer.style.transition = 'transform 0.5s';

  if (slideIndex >= sliderImages.length - 1) {
    direction = -1;
  } else if (slideIndex <= 0) {
    direction = 1;
  }
}

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const nohp = document.getElementById("nohp");
const psn = document.getElementById("psn");
const submitButton = document.getElementById("tombol");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const namaValue = nama.value;
    const emailValue = email.value;
    const nohpValue = nohp.value;
    const psnValue = psn.value;

    const errorMessages = [];
    let errorName = '';
    let errorEmail = '';
    let errorPhone = '';
    let errorMsg = '';
    

    if (!nameValidation(namaValue)) {
        errorMessages.push("Nama Kosong");
        errorName = 'Nama tidak boleh kosong';
    }

    if (emailValue === "") {
        errorMessages.push("Email Kosong");
        errorEmail = 'Email tidak boleh kosong';
    } else if (!emailValidation(emailValue)) {
        errorMessages.push("Email Tidak Valid");
        errorEmail = 'Email tidak valid';
    }

    if (nohpValue === "") {
        errorMessages.push("Nomor Telepon Kosong");
        errorPhone = 'No telepon tidak boleh kosong';
    } else if (!nohpValidation(nohpValue)) {
        errorMessages.push("Nomor Telepon Tidak Valid");
        errorPhone = 'No telepon tidak valid';
    }

    if (!pesanValidation(psnValue)) {
        errorMessages.push("Pesan Kosong");
        errorMsg = 'Pesan tidak boleh kosong';
    }

    if ((!errorEmail == '') || (!errorName == '') || (!errorPhone == '') || (!errorMsg == '')){
        const nameOutput = document.getElementById("nameError");
        const emailOutput = document.getElementById("emailError");
        const phoneOutput = document.getElementById("phoneError");
        const msgOutput = document.getElementById("msgError");
        nameOutput.textContent = errorName;
        emailOutput.textContent = errorEmail;
        phoneOutput.textContent = errorPhone;
        msgOutput.textContent = errorMsg;
        return;
    }
    alert("Sukses");
    location.reload();
});

function nameValidation(name) {
    return name !== "";
}

function emailValidation(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function nohpValidation(nohp) {
    const nohpPattern = /^\+62\s?\d{9,15}$/;
    return nohpPattern.test(nohp);
}

function pesanValidation(pesan) {
    return pesan !== "";
}
