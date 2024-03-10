var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// validation code for inputs

var email = document.forms["formlogin"]["email"];
var password = document.forms["formlogin"]["password"];

var email_error = document.getElementById("email_error");
var pass_error = document.getElementById("pass_error");

email.addEventListener("textInput", email_Verify);
password.addEventListener("textInput", pass_Verify);

function validated() {
  if (email.value.length < 9) {
    email.style.border = "1px solid red";
    email_error.style.display = "block";
    email.focus();
    return false;
  }
  if (password.value.length < 6) {
    password.style.border = "1px solid red";
    pass_error.style.display = "block";
    password.focus();
    return false;
  }
}
function email_Verify() {
  if (email.value >= 8) {
    email.style.border = "1px solid silver";
    email_error.style.display = "none";
    return true;
  }
}
function pass_Verify() {
  if (password.value >= 5) {
    password.style.border = "1px solid silver";
    pass_error.style.display = "none";
    return true;
  }
}
