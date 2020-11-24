
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
// var dropdowns = document.getElementsByClassName("dropdown-content");
// var i;
//     for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
        
//         // if (openDropdown.classList.contains('show')) {
//         // openDropdown.classList.remove('show');
//         // }
//     }
//     }
// }

function myFunction() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});