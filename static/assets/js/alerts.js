window.addEventListener('load', () => {
  function alert1() {
      setTimeout(
          function(){
              const Toast = Swal.mixin({
                  toast: true,
                  position: 'bottom-start',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                
                Toast.fire({
                  icon: 'success',
                  title: '¡Ramón ha vuelto al sitio!'
                })
          }, 15000);
      setTimeout(
          function(){
              const Toast = Swal.mixin({
                  toast: true,
                  position: 'bottom-start',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                
                Toast.fire({
                  icon: 'success',
                  title: '¡Martin Rodriguez se ha registrado en Canalizados!'
                })
          }, 60000);
      setTimeout(
          function(){
              const Toast = Swal.mixin({
                  toast: true,
                  position: 'bottom-start',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                
                Toast.fire({
                  icon: 'success',
                  title: '¡Hector Suarez ha creado un Startup!'
                })
          }, 90000);
  }
  alert1()
})

window.addEventListener('load', function() {
new Glider(document.querySelector('.glider'), {
  // Mobile-first defaults
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  rewind: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 'auto',
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
});
});

$("#contact").on('submit', function(evt){
evt.preventDefault();
const nameForm = document.getElementById('name').value;
const emailForm = document.getElementById('email').value;
const messageForm = document.getElementById('message').value;

if(!(/\S+@\S+\.\S+/.test(emailForm))){
  return false;
}

if(messageForm.length >= 140) {
  return false;
}

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: `¡Genial, ${nameForm}! Mensaje Enviado`,
})

});