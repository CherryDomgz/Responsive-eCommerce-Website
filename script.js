$(document).ready(function(){

/*-------------Product-----------------*/

/*Carousel*/
  $('.carousel.carousel-multi-item.v-2 .carousel-item').each(function () {
      var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
  }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 4; i++) {
      next = next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
      next.children(':first-child').clone().appendTo($(this));
  }
  });

});

/*--------------------Checkout--------------*/
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  }, false)
})()

function myFunction() {
  alert("Press OK to Proceed");
}

/*--------------------Cart--------------*/

$("#hide").click(function(){
    $("tbody").hide();
  });




