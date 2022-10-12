const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});


$( function() {
  $( "#accordion" ).accordion();
} );



document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.list-item-btn').forEach(function(btn) {
    btn.addEventListener('click',function(event) {
      const link = event.currentTarget.dataset.link

      document.querySelectorAll('.work-content').forEach(function(content) {
        content.classList.remove('work-content-is-active')
      })
      document.querySelector(`[data-target="${link}"]`).classList.add("work-content-is-active")


      document.querySelectorAll('.list-item-btn').forEach(function(content) {
        content.classList.remove('is-active')
      })
      document.querySelector(`[data-link="${link}"]`).classList.add("is-active")



    })

  })
  document.querySelector("#burger").addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })
  document.querySelector(".menu-g").addEventListener('click', function() {
    document.querySelector('#menu').classList.remove('is-active')
  })
  document.querySelector(".menu-x").addEventListener('click', function() {
    document.querySelector('#menu').classList.remove('is-active')
  })

})
